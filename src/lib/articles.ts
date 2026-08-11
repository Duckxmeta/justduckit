import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Article {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), "content/articles");

export function getAllArticles(): Article[] {
  // Ensure directory exists
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        description: data.description || "",
        category: data.category || "General",
        readTime: data.readTime || "5 min read",
        image: data.image || "/images/duck-sanctuary.jpg",
        content,
      };
    });

  // Sort articles by date descending
  return allArticlesData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPathMdx = path.join(articlesDirectory, `${slug}.mdx`);
    const fullPathMd = path.join(articlesDirectory, `${slug}.md`);
    let fullPath = "";

    if (fs.existsSync(fullPathMdx)) {
      fullPath = fullPathMdx;
    } else if (fs.existsSync(fullPathMd)) {
      fullPath = fullPathMd;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      description: data.description || "",
      category: data.category || "General",
      readTime: data.readTime || "5 min read",
      image: data.image || "/images/duck-sanctuary.jpg",
      content,
    };
  } catch (error) {
    console.error(`Error reading article slug ${slug}:`, error);
    return null;
  }
}
