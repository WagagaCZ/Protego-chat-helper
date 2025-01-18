// ==UserScript==
// @name         Protego - Highlight
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Zvýrazní jméno na Protegu!
// @author       Wagaga
// @match        https://www.protego.cz/system/chat/index.php*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';
    let input = window.prompt("Zadej jména na zvýraznění oddělená mezerou")
    const betterInput = input.replace(/(\s+)/gi, '|')
    const regex = new RegExp("([^>] )((" + betterInput + ")\\w*)", "gi");
    let elements;
    console.error(regex);
    let msgBoard = document.getElementById("messBg");
    let hit;
while(1){ 
    console.log("While loop.");
    msgBoard = document.getElementById("messBg");
    elements = msgBoard.getElementsByTagName("p");
    await new Promise(r => setTimeout(r, 500));
    console.log(elements);
    for(let i = 0; i < elements.length; i++){
        console.log(elements.item(i).innerHTML.match(regex));
        if(elements.item(i).innerHTML.match(regex)) {
            hit = elements.item(i).innerHTML.replace(regex, '$1<b style="background-color:#fe8a18; color:Black;">$2</b>');
            elements.item(i).innerHTML = hit;
        }
    }
}
})();
