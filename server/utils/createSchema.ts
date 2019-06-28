import { buildSchema } from "type-graphql";
import { HelloResolver } from "../modules/hello";
import { AllQRResolver } from "../modules/allQR";
export const createSchema = () =>
  buildSchema({
    resolvers: [HelloResolver, AllQRResolver]
  });
