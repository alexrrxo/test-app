import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response, NextFunction } from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT || "3001", 10);

const app = next({ dev, dir: path.join(__dirname, "../web/frontend") });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader(
      "Content-Security-Policy",
      "frame-ancestors https://*.myshopify.com https://admin.shopify.com;"
    );
    next();
  });

  server.use(express.json());

  server.all(/^.*$/, (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Server ready on http://localhost:${port}`);
  });
});
