import "reflect-metadata";
import * as http from "http";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { QRCode } from "./entity/QRCode";
import { SignUp } from "./entity/SignUp";
import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { BizzaHome } from "./templates/BizzaHome";
import { FourTet } from "./templates/FourTet";
import { BizzaBarty } from "./templates/BizzaBarty";
import { Heart } from "./templates/Heart";
import { Form } from "./templates/Form";
import { TY } from "./templates/TY";
import { Emails } from "./templates/Emails";
import { createSchema } from "./utils/createSchema";
import * as bodyParser from "body-parser";
import * as CryptoJS from "crypto-js";

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== "production";
if (dev) require("dotenv").config();
const main = async () => {
  await createConnection({
    name: `default`,
    type: `postgres`,
    port: 5432,
    synchronize: true,
    logging: false,
    host: process.env.host,
    username: process.env.postgres,
    database: process.env.postgres,
    password: process.env.postgres_password,
    entities: [User, QRCode, SignUp]
  });
  const schema = await createSchema();
  const apolloServer = new ApolloServer({
    schema
    // playground: true,
    // introspection: true
  });
  const app = express();

  // static
  app.use("/static", express.static("static"));
  if (dev) app.use("/devstatic", express.static("devstatic"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // bizza barty
  app.get("/%F0%9F%8D%95%E3%83%94%E3%82%B6", async (_, res) => {
    res.send(BizzaBarty(true, "dogshit"));
  });

  // heart
  app.get("/%E2%9D%A4%EF%B8%8F%F0%9F%8D%95", async (_, res) => {
    res.send(Heart(true, "heart"));
  });

  // four tet QR begin
  app.get("/QR", async (req, res) => {
    const { code } = req.query;
    const QR = await QRCode.findOne({ code });
    if (QR) {
      const { found } = QR;
      if (code === "jupiter" || code === "lovecry") {
        return res.send(FourTet(found, code));
      }
    }
    res.send("no QR here");
  });

  // four tet claim post request
  app.post("/claimQR", async (req, res) => {
    const { code } = req.body;
    if (code === "jupiter" || code === "lovecry") {
      const QR = await QRCode.findOne({ code });
      const { found } = QR;
      return res.json({ found });
    }
    res.json({ found: true });
  });

  // four tet send QR form
  app.get("/QRForm", async (req, res) => {
    const { code } = req.query;
    if (code === "jupiter" || code === "lovecry") {
      return res.send(Form("fourtet", "QRForm"));
    }
    return res.send("nope");
  });

  // complete four tet form
  app.post("/QRForm", async (req, res) => {
    const { name, email, code } = req.body;
    let signer = await SignUp.findOne({ name, email, hunt: code });
    if (!signer) {
      signer = await SignUp.create({ name, email, hunt: code }).save();
      const QR = await QRCode.findOne({ code });
      if (QR) {
        QR.found = true;
        QR.found_by = email;
        QR.save();
      }
    }
    res.send(TY());
  });

  app.get("/heartForm", async (_, res) => {
    res.send(Form("heart", "heartForm"));
  });
  app.post("/heartForm", async (req, res) => {
    let { name, email, topic } = req.body;
    let fname = name.toLowerCase();
    let femail = email.toLowerCase();

    let signer = await SignUp.findOne({
      name: fname,
      email: femail,
      hunt: topic
    });
    if (!signer) {
      signer = await SignUp.create({
        name: fname,
        email: femail,
        hunt: topic
      }).save();
    }
    res.send(
      '<body style="background:black;font-size:100px;color:white;">ty ~:)</body>'
    );
  });
  app.get("/thepizzaloveemaillist420", async (_, res) => {
    const emails = (await SignUp.find()).map(e => e.email);
    const secret = "pizzalove420";
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(emails), secret);
    res.send(Emails(ciphertext));
  });
  app.get("/", async (_, res) => {
    res.send(BizzaHome());
  });

  const httpServer = http.createServer(app);
  apolloServer.applyMiddleware({ app, cors: true });

  httpServer.listen(() => {
    console.log(`> Ready on http://localhost:${port}`);
  });
};
main();
