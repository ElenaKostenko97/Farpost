import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Rent} from "../entity/Rent";



export async function postGetGostAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Rent);

    // load a post by a given post id
    // const one = await postRepository.find();
    const gosts = await Rent.find({where: { TypeOfApartment: "Гостинка"}});

    // return loaded posts
    response.send(gosts);
}

