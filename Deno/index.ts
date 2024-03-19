// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express@4.18.2";

const app = express();

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
app.listen(8000);