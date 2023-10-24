import { Exclude, Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Transform((username) => username.value.toLowerCase())
    @Column()
    username: string;

    @Exclude()
    @Column()
    email: string;

}