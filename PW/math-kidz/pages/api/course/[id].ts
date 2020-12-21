import { NextApiRequest, NextApiResponse } from "next";

export default function getCourseById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json({ byId: req.query.id, message:'getCourseById'});
}
