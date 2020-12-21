import { NextApiRequest, NextApiResponse } from "next";

export default function getAllCourses(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method !== 'GET'){
    res.status(500).json({message: 'sorry we only accept GET request'})
  }
  res.json({ hello: "world", method: req.method });
}
