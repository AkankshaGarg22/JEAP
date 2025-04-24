import Parser from "rss-parser";

export async function GET() {
    const parser = new Parser({timeout: 5000});
    const feed = await parser.parseURL("https://www.afro.who.int/rss/featured-news.xml"); // Replace with your RSS feed URL
    return Response.json(feed.items); // Returns an array of articles
}