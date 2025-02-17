import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = {...currentArtistObj};
    delete newArtistObj.id;

    return newArtistObj;
})

const newSongsArray = songsArray.map((currentSongstObj) => {
    const newSongsObj = {...currentSongstObj};
    delete newSongsObj.id;

    return newSongsObj;
})

const responseSongs = await db.collection('songs').insertMany(newSongsArray);
const responseArtists = await db.collection('artists').insertMany(newArtistArray);

console.log(responseArtists);
console.log(responseSongs);

// console.log(newArtistArray);
// console.log(newSongsArray);





