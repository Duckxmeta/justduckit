export type Guide = {
  slug: string;
  title: string;
  subtitle: string;
  price: string;
  pages: number;
  stripeUrl: string;
  coverSrc: string;
  coverAlt: string;
  blurb: string;
  sections: string[];
  excerpt: string;
  sources: { label: string; href?: string }[];
};

export const guides: Guide[] = [
  {
    slug: "center-hill-edgar-evins",
    title: "Center Hill Lake & Edgar Evins: A Pocket Field Guide",
    subtitle: "The dam, the lake, and the state park on its shore",
    price: "$8",
    pages: 5,
    stripeUrl: "https://buy.stripe.com/00wfZh88U3Ko86f71f7ok01",
    coverSrc: "/guides/center-hill-edgar-evins-preview.png",
    coverAlt: "Preview of the cover of Center Hill Lake & Edgar Evins: A Pocket Field Guide. Watermarked preview, not the full PDF.",
    blurb:
      "A short, sourced walking history of Center Hill Dam, Center Hill Lake, and Edgar Evins State Park. Independent Just Duck It guide — not a park or Corps publication. Hours and trail conditions change; confirm them on official sites before you go.",
    sections: [
      "How to use this guide",
      "1. The river before the lake",
      "2. Building Center Hill Dam",
      "3. What the dam is for",
      "4. Edgar Evins and the state park",
      "5. A walk from the visitor center",
      "6. Nearby, if you have more time",
      "Sources",
    ],
    excerpt:
      "This is a short field guide, not a park brochure. It is meant to be read before you go, or at the visitor center, so the plaques and the shoreline have a story behind them. Every historical claim below is tied to a source listed at the end. Where sources disagree on a date or a figure, this guide says so instead of picking a favorite number.\n\nCenter Hill Lake is not an old natural lake. It is a reservoir on the Caney Fork River, the largest tributary of the Cumberland River. A Historic American Engineering Record report on the dam, prepared for the National Park Service (HAER No. TN-45), places the structure on the Caney Fork about 26.6 miles upstream of the river’s confluence with the Cumberland, in the Smithville–Lancaster country of northern Middle Tennessee.",
    sources: [
      { label: "Mary McCormick, “Center Hill Dam,” Historic American Engineering Record No. TN-45 (National Park Service / U.S. Army Corps of Engineers, July 2012)", href: "https://tile.loc.gov/storage-services/master/pnp/habshaer/tn/tn0400/tn0428/data/tn0428data.pdf" },
      { label: "U.S. Army Corps of Engineers, “Center Hill Dam” (published January 10, 2024)", href: "https://www.lrd.usace.army.mil/Missions/Projects/Article/3641651/center-hill-dam/" },
      { label: "Carroll Van West, “Edgar Evins State Park,” Tennessee Encyclopedia", href: "https://tennesseeencyclopedia.net/entries/edgar-evins-state-park/" },
      { label: "Thomas G. Webb, “Dekalb County,” Tennessee Encyclopedia", href: "https://tennesseeencyclopedia.net/entries/dekalb-county/" },
      { label: "Leland R. Johnson, “United States Army Corps of Engineers,” Tennessee Encyclopedia", href: "https://tennesseeencyclopedia.net/entries/united-states-army-corps-of-engineers/" },
      { label: "Historical Marker Database, “Edgar Evins State Park”", href: "https://www.hmdb.org/m.asp?m=268339" },
      { label: "Tennessee Technological University, Appalachian Center for Craft, contact page", href: "https://www.tntech.edu/fine-arts/craftcenter/contact.php" },
      { label: "Tennessee State Parks, Edgar Evins State Park (confirm hours, maps, and trail alerts here)", href: "https://tnstateparks.com/parks/edgar-evins" },
    ],
  },
  {
    slug: "dekalb-county-smithville",
    title: "DeKalb County & Smithville: A Pocket History",
    subtitle: "The county seat, Liberty, Alexandria, the square, and the lake country",
    price: "$8",
    pages: 5,
    stripeUrl: "https://buy.stripe.com/14AdR93SE80Ecmvbhv7ok05",
    coverSrc: "/guides/dekalb-county-smithville-preview.png",
    coverAlt: "Preview of the cover of DeKalb County & Smithville: A Pocket History. Watermarked preview, not the full PDF.",
    blurb:
      "A short, sourced history of DeKalb County, Smithville, Liberty, Alexandria, the Fiddlers’ Jamboree, and the Craft Center. Where two public sources disagree on a date, the guide says so. Independent Just Duck It publication — not affiliated with the county, the festival, or Tennessee Tech.",
    sections: [
      "How to use this guide",
      "1. How the county and the county seat were named",
      "2. Liberty, the oldest town",
      "3. Alexandria and the county fair",
      "4. The war in the county, in brief",
      "5. The Smithville square and the Fiddlers’ Jamboree",
      "6. The Joe L. Evins Appalachian Center for Craft",
      "7. The lake, and what it covered",
      "A loose order of places, not a timed itinerary",
      "Sources",
    ],
    excerpt:
      "This is a short pocket history, not a chamber brochure and not an official county publication. It is meant to be read before you walk the Smithville square, drive out to Liberty or Alexandria, or stop at the Craft Center above the lake, so the places have a story behind them. Every historical claim below is tied to a source listed at the end. Where two public sources do not agree on a date, this guide says so instead of picking a favorite number.\n\nThe basic founding story comes from Thomas G. Webb’s entry “Dekalb County” in the Tennessee Encyclopedia, published by the Tennessee Historical Society. Webb writes that the Tennessee General Assembly established DeKalb County in December 1837 and named it for Johann DeKalb, a German general who died while serving in the American Revolution. The county seat, he writes, was located on fifty acres donated by Bernard Richardson and named Smithville by the General Assembly in honor of Samuel Granville Smith of Jackson County, a state senator and Tennessee’s secretary of state.",
    sources: [
      { label: "Thomas G. Webb, “Dekalb County,” Tennessee Encyclopedia (read 14 November 2026)", href: "https://tennesseeencyclopedia.net/entries/dekalb-county/" },
      { label: "Carroll Van West, “Edgar Evins State Park,” Tennessee Encyclopedia (read 14 November 2026)", href: "https://tennesseeencyclopedia.net/entries/edgar-evins-state-park/" },
      { label: "Smithville Fiddlers’ Jamboree official site (read 14 November 2026)", href: "https://smithvillejamboree.com/" },
      { label: "Tennessee Technological University, Appalachian Center for Craft, contact page (read 14 November 2026)", href: "https://www.tntech.edu/fine-arts/craftcenter/contact.php" },
    ],
  },
  {
    slug: "cannonsburgh-murfreesboro",
    title: "From Cannonsburgh to Murfreesboro: A Pocket History",
    subtitle: "The name, the square, and the living-history village you can visit today",
    price: "$8",
    pages: 4,
    stripeUrl: "https://buy.stripe.com/00w6oH1Kwgxa9aj5Xb7ok06",
    coverSrc: "/guides/cannonsburgh-murfreesboro-preview.png",
    coverAlt: "Preview of the cover of From Cannonsburgh to Murfreesboro: A Pocket History. Watermarked preview, not the full PDF.",
    blurb:
      "A short, sourced account of how Rutherford County’s seat was named, and how Cannonsburgh Village relates to that story. Two public sources tell the founding story a little differently; both are cited. Independent Just Duck It publication — not affiliated with the City of Murfreesboro or the National Park Service.",
    sections: [
      "How to use this guide",
      "1. What the city’s official history says",
      "2. What the Rutherford County Historical Society adds",
      "3. How to talk about this without overstating it",
      "4. Cannonsburgh Village today",
      "5. A later chapter, if you walk a little farther",
      "Sources",
    ],
    excerpt:
      "This is a pocket history, not a city brochure. Two careful public sources tell the founding story a little differently. Both are cited. The point is not to flatten them into a punchy hook. The point is to know what the records actually say before you walk the square or the village.\n\nThe City of Murfreesboro’s “History of Murfreesboro” page states that in 1811 the Tennessee legislature appointed a committee to select a new site for the Rutherford County seat, and that the site chosen was 60 acres belonging to Captain William Lytle. It says the General Assembly named the new town Cannonsburgh, honoring Newton Cannon, a young politician in Williamson County, then, at Lytle’s request, changed the name to Murfreesboro one month later in memory of Lytle’s friend Colonel Hardy Murfree.",
    sources: [
      { label: "City of Murfreesboro, “History of Murfreesboro” (read 14 November 2026)", href: "https://www.murfreesborotn.gov/396/History-of-Murfreesboro" },
      { label: "Greg Tucker, “Newton Cannon and a Cannonsburgh Fish Tale,” Rutherford County Historical Society (read 14 November 2026)", href: "https://rutherfordtnhistory.org/newton-cannon-cannonsburgh-fish-tale/" },
      { label: "Rutherford County Historical Society, “Murfreesboro Founding Time Line” (access date 14 November 2026)", href: "https://rutherfordtnhistory.org/murfreesboro-founding-time-line/" },
      { label: "City of Murfreesboro, “Cannonsburgh Village” (read 14 November 2026)", href: "https://www.murfreesborotn.gov/164/Cannonsburgh-Village" },
      { label: "National Park Service, Stones River National Battlefield (cited 14 November 2026)", href: "https://www.nps.gov/stri/index.htm" },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuideSlugs() {
  return guides.map((g) => g.slug);
}
