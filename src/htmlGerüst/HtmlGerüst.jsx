// *1  import useState
import { useState } from "react";




// import css
import "./HtmlGerüst.scss"


// import daten
import { datenArrayObj } from "../datenBankSpeicher/DatenBankSpeicher.jsx";
console.log(datenArrayObj);

const datenArrayObj2 = datenArrayObj;
console.log(datenArrayObj2);

// * 0 sfc
const HtmlGerüst = () => {

    // * 2 hook bauen
    const [button, setButton] = useState(true)

    // * 3 function bauen für hook und aufruf
    function buttonClick() {
        setButton(!button);
        console.log(setButton)
    }

    let text1 = "";
    let buttontext = "";
    let imgSrc = "";
    let id = "";
    let img = "";
    if(button){
        
         text1 = datenArrayObj2[0].text
         buttontext = datenArrayObj2[0].buttontext
         imgSrc = datenArrayObj2[0].imgSrc
         id = datenArrayObj2[0].id
         img = datenArrayObj2[0].img

        console.log(text1)
    }
    else{

        

        text1 = datenArrayObj2[1].text
        buttontext = datenArrayObj2[1].buttontext
        imgSrc = datenArrayObj2[1].imgSrc
        id = datenArrayObj2[1].id
        img = datenArrayObj2[1].img

        console.log(text1)

    }

    return (
        /* // * 0.1 html bauen */
        <section>
            <h2>{text1} {imgSrc} </h2>
            <img src={img} alt={text1 + " und ein Bild dazu"}/>

            {/* // * 4 onClick  */}
            <button onClick={buttonClick}>{buttontext}</button>


        </section>


    );
}

export default HtmlGerüst;