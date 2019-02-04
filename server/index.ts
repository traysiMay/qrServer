// tslint:disable-next-line:no-var-requires
require("dotenv").config()
import "reflect-metadata"
import { createConnection } from 'typeorm'
import { User } from './entity/User';
import { ApolloServer } from 'apollo-server-express'
import * as express from 'express';
import {meepo} from './meepo'
import { createSchema } from "./utils/createSchema";
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const main = async () => {

  await createConnection({
    name: `default`,
    type: `postgres`,
    port: 5432,
    synchronize: true,
    logging: true,
    host: dev ? "35.227.162.142" : process.env.host,
    username: dev ? "postgres" : process.env.postgres,
    database: dev ? "postgres" : process.env.postgres,
    password: dev ? "postgres" : process.env.postgres,
    entities: [
        User
    ]
})
const schema = await createSchema()
  const apolloServer = new ApolloServer({
    schema,
    playground: true,
    introspection: true
  })
  const app = express()

  app.get('/a', (_, res) => {
    return res.send('a')
  })

  app.get('/b', async (_,res)=> {
    const newUser = await User.create({firstName:"teemo", lastName:"teemo", email:"teemo@teemo.com", password:"teemoteeemo"}).save()

    res.send(newUser.email)
  })

  app.get('/', async (_, res) => {
    const users = await User.find()
    let emailString = ''
    for (let i = 0; i < users.length; i++) {
      emailString += users[i].email
    }
    console.log(emailString)
    return res.end(meepo())
  })

  apolloServer.applyMiddleware({app, cors:false})

  app.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}
main()
