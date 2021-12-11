import {Entity, PrimaryGeneratedColumn, JoinColumn, Column, CreateDateColumn,ManyToOne, UpdateDateColumn} from "typeorm";

import { User } from './User';

@Entity() /* decorator para trazer mais funções para classe */
export class Pix {

    @PrimaryGeneratedColumn('uuid') /* uuid gerar id unico hash, mais segurança contra ataques */
    id: string;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.id) /* relacionamento muitos pagamento pra 1 usuario */
    @JoinColumn()
    requestingUser: User;

    @ManyToOne(() => User, user => user.id, {nullable: true}) /* nullable:true pode ser nulo */
    @JoinColumn()
    payingUser: User;
    
    @Column()
    value: number;

    @CreateDateColumn() /* data que foi criado o registro */
    createdAt: Date;

    @UpdateDateColumn() /* data que foi atualizado */
    updatedAt: Date;

}