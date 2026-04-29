-- Supprime les tables si elles existent
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS post;

-- Table des utilisateurs
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- Table des posts/articles
CREATE TABLE post (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id INTEGER NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  FOREIGN KEY (author_id) REFERENCES user (id)
);

-- Données d'exemple
INSERT INTO user (username, password) VALUES ('admin', 'admin123');
INSERT INTO user (username, password) VALUES ('test', 'test123');

INSERT INTO post (author_id, title, body) VALUES 
  (1, 'Premier article', 'Ceci est le contenu du premier article.'),
  (2, 'Article de test', 'Un autre article pour tester l''application ');