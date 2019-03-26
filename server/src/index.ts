import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import {Rent} from "./entity/Rent";
import {load} from "../scraping";
import {AppRoutes} from "./routes";
import {AppRoomRoutes} from "./routes";
import {AppOneRoutes} from "./routes";
import {AppFourRoutes} from "./routes";
import {AppTwoRoutes} from "./routes";
import {AppThreeRoutes} from "./routes";
import {AppGostRoutes} from "./routes";
import {AppGostDateRoutes} from "./routes";
import * as express from "express";
import  * as bodyParser from "body-parser";
import {cors} from "cors";


createConnection().then(async connection => {

    const cors = require('cors');

    const promise = await load();
    console.log(promise);

    const promiseFlat = promise.map(async flat => {
        const rent = new Rent();
        const Time = new Date();
        rent.idflat = flat.id;
        rent.TypeOfApartment = flat.roomNum;
        rent.Address = flat.street;
        rent.Area = flat.area;
        rent.Offer = flat.offer;
        rent.Square = flat.square;
        rent.Price = flat.price;
        rent.Date = Time;
        await connection.manager.save(rent);
    });

    Promise.all(promiseFlat);

    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppOneRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppTwoRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppThreeRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppGostRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppRoomRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppFourRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    AppGostDateRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(4000);

}).catch(error => console.log(error));
