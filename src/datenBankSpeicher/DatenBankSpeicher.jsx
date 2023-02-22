// import uuid 
import { v4 as uuidv4 } from "uuid";


// import bilder
import bild_0_tag from "../img/bild_0_tag.avif";
import bild_1_nacht from "../img/bild_1_nacht.avif";

console.log(bild_0_tag);
console.log(bild_1_nacht);


console.log(uuidv4());







// uuid für eindeutigen key 

const datenArrayObj = [
    {
        id:uuidv4(),
        buttontext: "Wechsel zu Nacht",
        text: " Es ist Tag! ",
        imgSrc: "☀︎",
        img: bild_0_tag,
        

    },
    {
        id:uuidv4(),
        buttontext: "Wechsel zu Tag",
        text: " Es ist Nacht! ",
        imgSrc: "☾",
        img: bild_1_nacht,


    }

]

console.log(datenArrayObj)




export {datenArrayObj} 