CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(255),
    LastName VARCHAR(255),
    Email VARCHAR(255) UNIQUE,
    PhoneNumber VARCHAR(20),
    PasswordHash VARCHAR(255),
    IsAdmin BOOLEAN
);


CREATE TABLE LostItems (
    LostItemID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ItemType VARCHAR(255),
    DocumentType VARCHAR(255),
    DocumentNumber VARCHAR(255),
    LocationLost VARCHAR(255),
    DateLost DATE,
    Description TEXT,
    Status VARCHAR(255),  -- Pending, Found, etc.
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE FoundItems (
    FoundItemID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    ItemType VARCHAR(255),
    DocumentType VARCHAR(255),
    DocumentNumber VARCHAR(255),
    LocationFound VARCHAR(255),
    DateFound DATE,
    Description TEXT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);


CREATE TABLE Matches (
    MatchID INT PRIMARY KEY AUTO_INCREMENT,
    LostItemID INT,
    FoundItemID INT,
    MatchDate DATE,
    FOREIGN KEY (LostItemID) REFERENCES LostItems(LostItemID),
    FOREIGN KEY (FoundItemID) REFERENCES FoundItems(FoundItemID)
);


CREATE TABLE ContactMessages (
    MessageID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    AdminID INT,
    Message TEXT,
    DateSent DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (AdminID) REFERENCES Users(UserID)
);


