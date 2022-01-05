CREATE TABLE "artists" (
    "id" SERIAL PRIMARY KEY,
    "artist_name" varchar(80) not null,
    "year_born" date
);

CREATE TABLE " songs"(
"id" SERIAL PRIMARY KEY,
    "title" VARCHAR(225) not null,
    "length" VARCHAR(10),
    "release" DATE);

    INSERT INTO "artists"
    ("artist_name", "year_born")
    VALUES
    ('Ella Fitzgerald', '04-25-1917'),
    ('Dave Brubeck', '12-06-1920'),
    ('Miles Davis', '05-26-1926'),
    ('Esperanza Spalding', '10-18-1984');

    INSERT INTO "songs"
    ("title", "length", "release")
    VALUES
    ('Take Five', '5:24', '1959-09-29'),
    ('So What', '9:22', '1959-08-17'),
    ('Black Gold', '5:17', '2012-02-01');
