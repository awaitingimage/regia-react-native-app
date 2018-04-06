import {create} from "apisauce";

export function getLocalData() {
    const dummyData = require("../Fixtures/diary.json");
    return dummyData;
}

export function getLocalColorData() {
    const dummyData = require("../Fixtures/colors.json");
    return dummyData;
}

export async function fetchEventsAPI() {
    const api = create({
        baseURL: "http://api.regia.org",
    });

    const response = await api.get("/diary.json");
    return response.data;
}
