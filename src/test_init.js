import "dotenv/config";
import "./db";
import app from "./server";


const TEST_HTTP_PORT = process.argv[2] || 4004;

const handleListeningHttp = () =>
    console.log(`Server listening on port http://localhost:${TEST_HTTP_PORT}`);

app.listen(TEST_HTTP_PORT, handleListeningHttp);