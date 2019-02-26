import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Rent} from "./entity/Rent";
import {load} from "../scraping";

createConnection().then(async connection => {
    const promise = await load();
    console.log(promise);

    const promiseFlat = promise.map(async flat => {
        const rent = new Rent();
        rent.TypeOfApartment = flat.title;
        rent.Price = flat.price;
        await connection.manager.save(rent);
    });

    Promise.all(promiseFlat);

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
