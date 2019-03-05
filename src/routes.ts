import {postGetAllAction} from "./controller/PostGetAllAction";

export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    }
];