import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Rent {

    @PrimaryGeneratedColumn() //id квартиры
    id: number;

    @Column() //Тип квартиры
    TypeOfApartment: string;

    @Column() //Адрес
    Address: string;

    @Column() //Район
    Area: string;

    @Column() //Предложение
    Offer: string;

    @Column() //Площадь
    Square: number;

    @Column() //Цена
    Price: number;

    @Column() //Дата размещения
    Date: Date;

}
