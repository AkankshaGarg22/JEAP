import Parser from "rss-parser";

export async function GET() {
    const parser = new Parser();

  try {
    const response = await fetch('https://www.afro.who.int/rss/featured-news.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    const xml = await response.text(); // Get raw XML
    const feed = await parser.parseString(xml); // Parse manually
    return Response.json(feed);
  } catch (err: any) {
    return Response.json({ error: err.message });
  }
}