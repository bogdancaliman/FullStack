-- Up
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE Course (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES User(id)
);

INSERT INTO User (name, email) values ('bruno', 'bruno@email.com');
INSERT INTO User (name, email) values ('jack', 'jack@email.com');

INSERT INTO Course (brand,model,ownerId) values ('audi', 'R8',1);
INSERT INTO Course (brand,model,ownerId) values ('mercedes', 'benz',2);

-- Down
DROP TABLE User;
DROP TABLE Course;