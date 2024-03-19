var express = require('express');
var router = express.Router();
var sqlite3 =require("sqlite3") ;

const db = new sqlite3.Database(':memory:'); 

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT)");
});

router.get('/', function(req, res, next) {
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

module.exports = router;
