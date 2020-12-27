import { NextApiRequest, NextApiResponse } from "next";

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json([{name: 'Marian'},{name: 'Ion'},{name:'Andrei'}]);
}
