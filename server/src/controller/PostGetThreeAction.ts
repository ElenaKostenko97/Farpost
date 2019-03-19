import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Rent} from "../entity/Rent";

export async function postGetThreeAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Rent);

    // load a post by a given post id
    // const one = await postRepository.find();
    const threes = await Rent.find({where: { TypeOfApartment: "3-комнатная"}});

    // return loaded posts
    response.send(threes);
}