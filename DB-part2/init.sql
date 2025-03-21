CREATE TABLE IF NOT EXISTS Users (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS UserPreferences (
    PreferenceID SERIAL PRIMARY KEY,
    LanguageCode VARCHAR(100),
    PreferredCommunication INT,
    UserId INT,
    FOREIGN KEY (UserId) REFERENCES Users(ID)
    ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT
);

-- ALTER TABLE users ADD UNIQUE (name)
-- ALTER TABLE users ALTER COLUMN name SET NOT NULL;