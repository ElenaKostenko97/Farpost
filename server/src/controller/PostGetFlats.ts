import {Request, Response} from "express";
import {getConnection} from "typeorm";
import {Rent} from "../entity/Rent";
const uniqBy = require('lodash/uniqby');

//GET
export async function getFlats(request: Request, response: Response) {

    const flats = await Rent.find();
    const uniq = uniqBy(flats, 'idflat');

    response.send(uniq);
}

export async function getRoom(request: Request, response: Response) {

    const rooms = await Rent.find({where: { TypeOfApartment: "Комната"}});

    const uniq = uniqBy(rooms, 'idflat');

    response.send(uniq);
}

export async function getGost(request: Request, response: Response) {

    const gosts = await Rent.find({where: {TypeOfApartment: "Гостинка"}});
    const uniq = uniqBy(gosts, 'idflat');

    response.send(uniq);
}

export async function getOne(request: Request, response: Response) {

    const ones = await Rent.find({where: { TypeOfApartment: "1-комнатная"}});
    const uniq = uniqBy(ones, 'idflat');
    console.log(ones);
    response.send(uniq);
}

export async function getTwo(request: Request, response: Response) {

    const twos = await Rent.find({where: { TypeOfApartment: "2-комнатная"}});
    const uniq = uniqBy(twos, 'idflat');

    response.send(uniq);
}

export async function getThree(request: Request, response: Response) {

    const threes = await Rent.find({where: { TypeOfApartment: "3-комнатная"}});
    const uniq = uniqBy(threes, 'idflat');

    response.send(uniq);
}

export async function getFour(request: Request, response: Response) {

    const four = await Rent.find({where: { TypeOfApartment: "4-комнатная"}});
    const uniq = uniqBy(four, 'idflat');

    response.send(uniq);
}

//POST
export async function postDateFlats (request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}

export async function postDateRoom(request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.TypeOfApartment = :TypeOfApartment", { TypeOfApartment: "Комната" })
        .andWhere("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}

export async function postDateGost(request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.TypeOfApartment = :TypeOfApartment", { TypeOfApartment: "Гостинка" })
        .andWhere("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}

export async function postDateOne(request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.TypeOfApartment = :TypeOfApartment", { TypeOfApartment: "1-комнатная" })
        .andWhere("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}

export async function postDateTwo(request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.TypeOfApartment = :TypeOfApartment", { TypeOfApartment: "2-комнатная" })
        .andWhere("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}

export async function postDateThree(request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.TypeOfApartment = :TypeOfApartment", { TypeOfApartment: "3-комнатная" })
        .andWhere("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}

export async function postDateFour(request: Request, response: Response) {

    console.log(request.body.dayone);
    console.log(request.body.daynext);

    const rents = await getConnection()
        .getRepository(Rent)
        .createQueryBuilder("rent")
        .where("rent.TypeOfApartment = :TypeOfApartment", { TypeOfApartment: "4-комнатная" })
        .andWhere("rent.Date > :from", { from: request.body.dayone })
        .andWhere("rent.Date < :to", { to: request.body.daynext })
        .getManyAndCount();

    const buf=rents[0];
    const uniq = uniqBy(buf, 'idflat');

    response.send(uniq);
}