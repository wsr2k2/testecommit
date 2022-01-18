import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cep {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cep: string;

}
