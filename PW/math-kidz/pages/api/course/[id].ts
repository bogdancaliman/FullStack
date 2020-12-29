import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

export default async function getCourseById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();
  const course = await db.get("select * from course where id = ?",[req.query.id]);
  
  res.json(course);
}
