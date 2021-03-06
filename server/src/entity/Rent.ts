import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Rent extends BaseEntity{

    @PrimaryGeneratedColumn() //id
    id: number;

    @Column({nullable: true}) //id квартиры
    idflat: string;

    @Column({nullable: true}) //Тип квартиры
    TypeOfApartment: string;

    @Column({nullable: true}) //Адрес
    Address: string;

    @Column({nullable: true}) //Район
    Area: string;

    @Column({nullable: true}) //Предложение
    Offer: string;

    @Column({nullable: true}) //Площадь
    Square: string;

    @Column({nullable: true}) //Цена
    Price: number;

    @Column({nullable: true}) //Дата размещения
    Date: Date;
}
