import { DB } from "https://deno.land/x/sqlite/mod.ts";
import express from "npm:express@4.18.2";

const app = express();
const db = new DB(":memory:");

db.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT)");


app.use(express.json());

app.get("/addUser", (req, res) => {
  const username ="John"
  const email ='John@example.com'

  const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
  try {
    db.query(sql, [username, email])
    console.log('User added successfully');
    res.status(200).json({ message: 'User added successfully' });
  } catch (error) {
    console.error('Error adding user');
    res.status(500).json({ error: 'Failed to add user' });
  }
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

  // Generate the first 100 Fibonacci numbers
  const fibNumbers = fibonacci(100);

  // Send the Fibonacci sequence as the response
  res.send(fibNumbers.join(', '));
});
app.listen(8000);