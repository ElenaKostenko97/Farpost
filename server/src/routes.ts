import {getFlats, getRoom, getGost, getOne, getTwo, getThree, getFour,
    postDateFlats, postDateRoom, postDateGost, postDateOne, postDateTwo,
    postDateThree, postDateFour} from "./controller/PostGetFlats";

export const AppFlats = [
    {
        path: "/flats",
        method: "get",
        action: getFlats
    },
    {
        path: "/room",
        method: "get",
        action: getRoom
    },
    {
        path: "/gost",
        method: "get",
        action: getGost
    },
    {
        path: "/one",
        method: "get",
        action: getOne
    },
    {
        path: "/two",
        method: "get",
        action: getTwo
    },
    {
        path: "/three",
        method: "get",
        action: getThree
    },
    {
        path: "/four",
        method: "get",
        action: getFour
    },
    {
        path: "/dateflats",
        method: "post",
        action: postDateFlats
    },
    {
        path: "/dategost",
        method: "post",
        action: postDateGost
    },
    {
        path: "/dateroom",
        method: "post",
        action: postDateRoom
    },
    {
        path: "/dateone",
        method: "post",
        action: postDateOne
    },
    {
        path: "/datetwo",
        method: "post",
        action: postDateTwo
    },
    {
        path: "/datethree",
        method: "post",
        action: postDateThree
    },
    {
        path: "/datefour",
        method: "post",
        action: postDateFour
    }
];




