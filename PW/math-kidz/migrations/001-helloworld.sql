-- Up
CREATE TABLE User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Course (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES User(id)
);

INSERT INTO User (username, email, password) values ('bruno', 'bruno@email.com', 'ceva');
INSERT INTO User (username, email, password) values ('jack', 'jack@email.com', 'ceva');

INSERT INTO Course (brand,model,ownerId) values ('audi', 'R8',1);
INSERT INTO Course (brand,model,ownerId) values ('audi', 'R6',1);
INSERT INTO Course (brand,model,ownerId) values ('mercedes', 'benz',2);

-- Down
DROP TABLE User;
DROP TABLE Course;