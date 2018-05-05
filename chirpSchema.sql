CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
  id int AUTO_INCREMENT,
  author varchar(30) NOT NULL,
  chirp varchar(30) NOT NULL,
  timecreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO chirps (author, chirp) VALUES ("tweety", "tweet");
