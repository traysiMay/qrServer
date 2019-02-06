import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class QRCode extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column()
    code: string

    @Field()
    @Column()
    artist: string

    @Field()
    @Column()
    venue: string

    @Field()
    @Column('bool', {default:false})
    found: boolean

    @Column()
    found_by: string
}