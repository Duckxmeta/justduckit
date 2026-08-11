import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";

export async function GET(request: Request) {
  try {
    // 1. Authorize Vercel Cron (only in production)
    const authHeader = request.headers.get("authorization");
    if (process.env.NODE_ENV === "production" && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY is not defined in environment variables.");
      return NextResponse.json({ error: "Brevo API key missing" }, { status: 500 });
    }

    // 2. Fetch the latest 5-7 articles
    const articles = getAllArticles();
    const latestArticles = articles.slice(0, 6); // Fetch top 6 articles

    if (latestArticles.length === 0) {
      return NextResponse.json({ message: "No articles found to send." });
    }

    // 3. Construct HTML email content
    const currentMonthYear = new Date().toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });

    let articlesHtml = "";
    for (const article of latestArticles) {
      const descriptionText = article.description || "";
      articlesHtml += `
        <div style="margin-bottom: 30px; border-bottom: 1px solid #e2e8f0; padding-bottom: 20px;">
          <h3 style="font-size: 20px; font-weight: bold; color: #0f172a; margin: 0 0 10px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
            <a href="https://justduckit.xyz/articles/${article.slug}" style="color: #0f172a; text-decoration: none;">
              ${article.title}
            </a>
          </h3>
          <p style="font-size: 14px; color: #64748b; margin: 0 0 15px 0; line-height: 1.6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
            ${descriptionText}
          </p>
          <a href="https://justduckit.xyz/articles/${article.slug}" style="display: inline-block; background-color: #f59e0b; color: #000000; font-weight: 600; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
            Read Article →
          </a>
        </div>
      `;
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Latest from JustDuckIt</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333333; margin: 0; padding: 20px; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 15px; margin-bottom: 25px;">
            <div style="font-size: 24px; font-weight: bold; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">JustDuckIt<span style="color: #f59e0b;">.</span></div>
          </div>
          <div style="font-size: 16px; margin-bottom: 30px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
            <p style="margin: 0 0 10px 0; font-weight: 500;">Here’s what we’ve been publishing lately…</p>
          </div>
          
          ${articlesHtml}
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8; line-height: 1.5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
            <p style="margin: 0 0 10px 0;">&copy; ${new Date().getFullYear()} JustDuckIt. All rights reserved.</p>
            <p style="margin: 0 0 10px 0;">If you no longer wish to receive these emails, you can unsubscribe using the link below.</p>
            <p style="margin: 0;"><a href="{{ unsubscribe }}" style="color: #f59e0b; text-decoration: underline;">Unsubscribe</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 4. Create Brevo Campaign
    const campaignName = `JustDuckIt Monthly Newsletter - ${currentMonthYear}`;
    const campaignSubject = `Latest from JustDuckIt: It started with a duck.`;

    const createResponse = await fetch("https://api.brevo.com/v3/emailCampaigns", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        tag: "monthly-newsletter",
        sender: {
          name: "JustDuckIt",
          email: "hello@justduckit.xyz",
        },
        name: campaignName,
        htmlContent: emailHtml,
        subject: campaignSubject,
        recipients: {
          listIds: [3],
        },
      }),
    });

    if (!createResponse.ok) {
      const errorData = await createResponse.json();
      console.error("Failed to create Brevo email campaign:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to create email campaign." },
        { status: createResponse.status }
      );
    }

    const campaignData = await createResponse.json();
    const campaignId = campaignData.id;
    console.log(`Successfully created Brevo campaign ID: ${campaignId}`);

    // 5. Send Brevo Campaign Now
    const sendResponse = await fetch(`https://api.brevo.com/v3/emailCampaigns/${campaignId}/sendNow`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
    });

    if (!sendResponse.ok) {
      const errorData = await sendResponse.json();
      console.error(`Failed to send Brevo campaign ID ${campaignId}:`, errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to trigger email campaign sending." },
        { status: sendResponse.status }
      );
    }

    console.log(`Successfully sent Brevo campaign ID: ${campaignId}`);
    return NextResponse.json({ success: true, campaignId });
  } catch (error: any) {
    console.error("Error executing monthly newsletter cron job:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during newsletter execution." },
      { status: 500 }
    );
  }
}
