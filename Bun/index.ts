import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const port = 8080;

const db = new sqlite3.Database(':memory:'); // Or specify a file path for a persistent database

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT)");
});

app.use(express.json());

app.get("/addUser", (req, res) => {
  const username ="John"
  const email ='John@example.com'

  const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
  db.run(sql, [username, email], (err) => {
    if (err) {
      console.error('Error adding user:', err);
      res.status(500).json({ error: 'Failed to add user' });
    } else {
      console.log('User added successfully');
      res.status(200).json({ message: 'User added successfully' });
    }
  });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/fibo", (req, res) => {
  function fibonacci(n:any) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
  }
  const fibNumbers = fibonacci(100);

  res.send(fibNumbers.join(', '));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
