import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column("text", { unique:true })
    email: string

    @Column()
    password: string

    @Column('bool', { default: false })
    confirmed: boolean
}