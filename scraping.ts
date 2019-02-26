const axios = require("axios");
const cheerio = require("cheerio");
const concat = require("lodash/concat");
const range = require("lodash/range"); // проверка массива на пустоту
const iconv = require("iconv-lite");

//Проверить массив на наличие записей
//Доделать записи в таблицу
//rest api почитать


const tasks = {
    title: "tws",
    url: "https://www.farpost.ru/vladivostok/realty/rent_flats/?pageSize=50&plashka-off=1&ajax=1"
};

export async function load() {
    try {
        const map = range(1).map(it => {
            return axios.get(tasks.url, {
                params: {"page": 1},
                responseEncoding: "binary",
                responseType: "arraybuffer"}
            );
        });

        const resolves = await Promise.all(map);
        let result = [];

        const mapIDS = resolves.forEach(({data}) => {
            const html = iconv.decode(data, "win1251");

            const $ = cheerio.load(html);

            result = $(".bull-item").map((i, el) => {

                const id = $(el).find("[data-bulletin-id]").data("bulletin-id");
                const title = $(el).find('div[class="title"] > a').text();
                const price = $(el).find('span[data-role="price"]').text();
                const adress = $(el).find('div[class="annotation auto-shy"]').text();

                const titleSplit = title.split(", ");
                const adressSplit = adress.split(", ");

                const roomNum = titleSplit[0];
                const street = titleSplit[1];



                return {id, title, price, adress, roomNum};


            }).get();
        });

        // console.log(mapIDS);
        return result;
    } catch (e) {
        console.error(e);
    }
}

load();