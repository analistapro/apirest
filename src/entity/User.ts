import { IsEmail, IsNotEmpty } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from "typeorm"

@Entity()
@Unique(["username"])
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @IsNotEmpty()
    @IsEmail()
    username: string

    @Column()
    @IsNotEmpty()
    password: string

    @Column()
    @IsNotEmpty()
    role: string

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

}

