import { buildSchema } from 'type-graphql'
import { HelloResolver } from '../modules/hello'
  
export const createSchema = () => 
    buildSchema({
        resolvers: [
          HelloResolver
        ]
    })