import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Rent} from "../entity/Rent";

export async function postGetRoomAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Rent);

    // load a post by a given post id
    // const one = await postRepository.find();
    const rooms = await Rent.find({where: { TypeOfApartment: "Комната"}});

    // return loaded posts
    response.send(rooms);
}