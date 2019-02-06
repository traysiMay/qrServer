import {
    Resolver,
    Query,
  } from "type-graphql";
import { QRCode } from "../entity/QRCode";
  
  @Resolver()
  export class AllQRResolver {
    @Query(() => [QRCode], {nullable:true})
    async allQR(): Promise<QRCode[] | null> {
      console.log('all QR')

      return QRCode.find()
    }
  }

