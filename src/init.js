import "dotenv/config";
import "./db";
import app from "./server";


const HTTP_PORT = process.env.HTTP_PORT || 8930;

app.listen(HTTP_PORT, () => {
  console.log(`Server listening on port http://localhost:${HTTP_PORT}`)
})
