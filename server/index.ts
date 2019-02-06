import "reflect-metadata"
import { createConnection } from 'typeorm'
import { User } from './entity/User';
import { QRCode } from './entity/QRCode'
import { SignUp } from './entity/SignUp'
import { ApolloServer } from 'apollo-server-express'
import * as express from 'express';
import {BizzaHome} from './templates/BizzaHome'
import {FourTet} from './templates/FourTet'
import {Form} from './templates/Form'
import {TY} from './templates/TY'
import { createSchema } from "./utils/createSchema"
import * as bodyParser from 'body-parser';

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
if (dev) require("dotenv").config()
const main = async () => {

  await createConnection({
    name: `default`,
    type: `postgres`,
    port: 5432,
    synchronize: true,
    logging: true,
    host: process.env.host,
    username: process.env.postgres,
    database: process.env.postgres,
    password: process.env.postgres_password,
    entities: [
        User,
        QRCode,
        SignUp
    ]
})
const schema = await createSchema()
  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    introspection: true
  })
  const app = express()

  app.use("/static", express.static("static"))
  if (dev) app.use("/devstatic", express.static("devstatic"))
  console.log(dev)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());


  app.get('/QR', async (req,res)=> {
    const { code } = req.query
    const QR = await QRCode.findOne({code})
    if ( QR ) {
      const { found } = QR
      if (code === 'jupiter' || code === 'lovecry'){
        return res.send(FourTet(found, code))
      }
    }
    res.send('no QR here')
  })

  app.post('/claimQR', async (req,res) => {
    const { code } = req.body
    console.log(code)
    if (code === "jupiter" || code === "lovecry"){
      const QR = await QRCode.findOne({code})
      console.log(QR)
      const { found } = QR
      return res.json({found})
    }
    res.json({found:true})
  })
  
  app.get('/QRForm', async (req,res)=> {
    const { code } = req.query
    console.log(code)
    if (code === "jupiter" || code === "lovecry"){
        return res.send(Form());
    }
    return res.send('nope')
  })

  app.post('/QRForm', async (req,res)=> {
    const { name, email, code } = req.body
    let signer = await SignUp.findOne({name,email,hunt:code})
    console.log(signer)
    if (!signer) {
      signer = await SignUp.create({name,email,hunt:code}).save()
      const QR = await QRCode.findOne({code})
      console.log(QR)
      if (QR) {
        QR.found = true
        QR.found_by = email
        QR.save()
      }
    }
    res.send(TY());
  })

  app.get('/', async (_, res) => {
    res.send(BizzaHome())
  })

  apolloServer.applyMiddleware({app, cors:false})
  
  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}
main()
