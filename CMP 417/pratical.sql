USE mydb;

-- 1. Add Data to AGENTS (Run this first)
INSERT INTO Agents (AgentID, FirstName, LastName, Email) VALUES 
(1, 'Sarah', 'Connor', 'sarah.c@realty.com'),
(2, 'James', 'Bond', 'j.bond@realty.com'),
(3, 'Peter', 'Parker', 'p.parker@realty.com'),
(4, 'Diana', 'Prince', 'd.prince@realty.com'),
(5, 'Tony', 'Stark', 't.stark@realty.com');

-- 2. Add Data to OWNERS (Run this second)
INSERT INTO Owners (OwnerID, FirstName, LastName, Phone) VALUES 
(101, 'Bruce', 'Wayne', '555-0101'),
(102, 'Clark', 'Kent', '555-0102'),
(103, 'Lois', 'Lane', '555-0103'),
(104, 'Wanda', 'Maximoff', '555-0104'),
(105, 'Steve', 'Rogers', '555-0105');

-- 3. Add Data to PROPERTIES (Run this last)
-- Notice the last two numbers in each row match the AgentIDs and OwnerIDs we just created!
INSERT INTO Properties (PropertyID, Address, City, Price, Agents_AgentID, Owners_OwnerID) VALUES 
(1001, '12 Grimmauld Place', 'London', 850000.00, 1, 101),
(1002, '742 Evergreen Terrace', 'Springfield', 250000.00, 2, 102),
(1003, '124 Conch Street', 'Bikini Bottom', 45000.00, 1, 101),
(1004, '221B Baker Street', 'London', 1200000.00, 3, 104),
(1005, '31 Spooner Street', 'Quahog', 320000.00, 5, 105);