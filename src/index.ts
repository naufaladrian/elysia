import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia");

// Gunakan process.env.PORT untuk menangani port yang dinamis di Vercel
const port = process.env.PORT || 3000;

app.listen(port)

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

