import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetOneAction} from "./controller/PostGetOneroomAction";
import {postGetTwoAction} from "./controller/PostGetTwoAction";
import {postGetThreeAction} from "./controller/PostGetThreeAction";
import {postGetGostAction} from "./controller/PostGetGostAction";
// import {GetGostActionDate} from "./controller/PostGetGostAction";
import {postGetRoomAction} from "./controller/PostGetRoomAction";
import {postGetFourAction} from "./controller/PostGetFourAction";


export const AppRoutes = [
    {
        path: "/flats",
        method: "get",
        action: postGetAllAction
    }];

export const AppRoomRoutes = [
    {
        path: "/room",
        method: "get",
        action: postGetRoomAction
    }
];

export const AppOneRoutes = [
    {
        path: "/one",
        method: "get",
        action: postGetOneAction
    }
];
export const AppTwoRoutes = [
    {
        path: "/two",
        method: "get",
        action: postGetTwoAction
    }
];
export const AppThreeRoutes = [
    {
        path: "/three",
        method: "get",
        action: postGetThreeAction
    }
];
export const AppGostRoutes = [
    {
        path: "/gost",
        method: "get",
        action: postGetGostAction
    }
];
export const AppFourRoutes = [
    {
        path: "/four",
        method: "get",
        action: postGetFourAction
    }
];

