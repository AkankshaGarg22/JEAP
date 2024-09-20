import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';


// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.user.findMany({});
  res.json(result);
}