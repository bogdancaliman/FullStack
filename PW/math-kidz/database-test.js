const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function openDb() {
  return sqlite.open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({
    migrationsPath: "./migrations", //add cutom path to your migrations
    force: "last",
  });

  const users = await db.all("SELECT * FROM User");
  console.log("all users", JSON.stringify(users, null, 2));

  const course = await db.all(`SELECT a.*, b.* FROM User as a
  LEFT JOIN Course as b
  ON a.id = b.ownerId
  `);
  console.log("all courses", JSON.stringify(course, null, 2));
}

setup();
