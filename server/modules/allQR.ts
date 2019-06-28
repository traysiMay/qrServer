import {
    Resolver,
    Query,
  } from "type-graphql";
import { QRCode } from "../entity/QRCode";
  
  @Resolver()
  export class AllQRResolver {
    @Query(() => [QRCode], {nullable:true})
    async allQR(): Promise<QRCode[] | null> {
      return QRCode.find()
    }
  }

