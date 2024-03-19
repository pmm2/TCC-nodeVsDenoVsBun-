import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  // send a simple json response
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
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});