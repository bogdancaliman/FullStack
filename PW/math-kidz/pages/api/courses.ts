import { NextApiRequest, NextApiResponse } from "next";
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

export default async function getAllCourses(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDb();
  const courses = await db.all("select * from course");
  res.json(courses);
}
