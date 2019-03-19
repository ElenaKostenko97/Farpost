import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Rent} from "../entity/Rent";

export async function postGetTwoAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Rent);

    // load a post by a given post id
    // const one = await postRepository.find();
    const twos = await Rent.find({where: { TypeOfApartment: "2-комнатная"}});

    // return loaded posts
    response.send(twos);
}