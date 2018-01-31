import {create} from 'apisauce'

export function asd () {
    const dummyData = require("../Fixtures/diary.json");
    console.log("asdasd");
    return dummyData;
}

// export async function fetchEvents() {

// // define the api
// const api = create({
//   baseURL: 'http://api.regia.org'
// })

// // start making calls
// api
//   .get('/diary.json')
//   .then((response) => response.data[0].commit.message)
//   .then(console.log)

// }




//   export async function loadLocalDvgJsonData() {
//     const DIRECTORY = await getSdCardDirectory();
//     const dataFile = DIRECTORY + "/dvgdata.json";
//     const fixtureData: DVGData = require("../Fixtures/dvgdata.custom.json");
//     const exists = await RNFS.exists(dataFile);
//     let data = fixtureData;
//     try {
//       if (!exists) {
//         await RNFS.writeFile(dataFile, JSON.stringify(fixtureData));
//       } else {
//         const json = await RNFS.readFile(dataFile);
//         const parsed = JSON.parse(json);
//         if (parsed) {
//           data = parsed;
//         }
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//     return data || Promise.reject("No data");
//   }