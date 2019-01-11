!function(s){var e={};function t(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return s[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=s,t.c=e,t.d=function(s,e,r){t.o(s,e)||Object.defineProperty(s,e,{enumerable:!0,get:r})},t.r=function(s){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},t.t=function(s,e){if(1&e&&(s=t(s)),8&e)return s;if(4&e&&"object"==typeof s&&s&&s.__esModule)return s;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:s}),2&e&&"string"!=typeof s)for(var a in s)t.d(r,a,function(e){return s[e]}.bind(null,a));return r},t.n=function(s){var e=s&&s.__esModule?function(){return s.default}:function(){return s};return t.d(e,"a",e),e},t.o=function(s,e){return Object.prototype.hasOwnProperty.call(s,e)},t.p="",t(t.s=4)}([function(s,e,t){},,function(s,e,t){},,function(s,e,t){"use strict";t.r(e);t(0),t(2);var r=[];var a={levels:document.getElementById("number_of_blocks"),nickname:document.getElementById("registration_form"),skirts:document.getElementById("skirt")};var i=[{id:"naruto",images:[{src:"src/assets/img/naruto/1.png",id:1},{src:"src/assets/img/naruto/2.png",id:2},{src:"src/assets/img/naruto/3.png",id:3},{src:"src/assets/img/naruto/4.png",id:4},{src:"src/assets/img/naruto/5.png",id:5},{src:"src/assets/img/naruto/6.png",id:6},{src:"src/assets/img/naruto/7.png",id:7},{src:"src/assets/img/naruto/8.png",id:8},{src:"src/assets/img/naruto/9.png",id:9}]},{id:"cats",images:[{src:"src/assets/img/cats/1.png",id:1},{src:"src/assets/img/cats/2.png",id:2},{src:"src/assets/img/cats/3.png",id:3},{src:"src/assets/img/cats/4.png",id:4},{src:"src/assets/img/cats/5.png",id:5},{src:"src/assets/img/cats/6.png",id:6},{src:"src/assets/img/cats/7.png",id:7},{src:"src/assets/img/cats/8.png",id:8},{src:"src/assets/img/cats/9.png",id:9}]},{id:"web",images:[{src:"src/assets/img/web/1.png",id:1},{src:"src/assets/img/web/2.png",id:2},{src:"src/assets/img/web/3.png",id:3},{src:"src/assets/img/web/4.png",id:4},{src:"src/assets/img/web/5.png",id:5},{src:"src/assets/img/web/6.png",id:6},{src:"src/assets/img/web/7.png",id:7},{src:"src/assets/img/web/8.png",id:8},{src:"src/assets/img/web/9.png",id:9}]}];class c{constructor(s,e,t){this.cardsNumber=s,this.backPath=e,this.imagesObj=i.find(s=>s.id===t),this.front=null,this.back=null,this.cardsArray=[],this.imageArray=this.shuffleImageArray(this.shuffleImageArray(this.imagesObj.images.slice(0,s/2))),this.imageArray=this.shuffleImageArray(this.imageArray.concat(this.imageArray)),this.createGameField()}createGameField(){for(let s=0;s<this.cardsNumber;s++)this.cardsArray.push(this.createCard());this.setCardClass(),this.createFrontSideImages()}shuffleImageArray(s){for(let e=s.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[s[e],s[t]]=[s[t],s[e]]}return s}createCard(){return this.card=document.createElement("div"),this.card.classList.add("card"),this.createFrontSide(),this.createBackSide(),document.getElementById("cards").appendChild(this.card),this.card}createFrontSide(){this.front=document.createElement("div"),this.front.classList.add("front"),this.card.appendChild(this.front),this.frontImage=document.createElement("img"),this.front.appendChild(this.frontImage)}createBackSide(){this.back=document.createElement("div"),this.back.classList.add("back"),this.card.appendChild(this.back);let s=document.createElement("img");s.src=this.backPath,this.back.appendChild(s)}createFrontSideImages(){this.frontArray=Array.from(document.querySelectorAll("div.front img"));let s=0;for(;s<this.cardsNumber;)this.frontArray[s].src=this.imageArray[s].src,this.cardsArray[s].id=this.imageArray[s].id,s++}setCardClass(){this.cardsArray.forEach(s=>{12===this.cardsNumber?s.classList.add("easy_cards"):16===this.cardsNumber?s.classList.add("medium_cards"):s.classList.add("hard_cards")})}}class n{constructor(s,e,t){this.cardsNumber=s,this.card=new c(s,e,t),this.openCard(),this.arrayOfAllCards=[]}openCard(){this.comparisonArray=[],this.card.cardsArray.forEach(s=>{s.addEventListener("click",()=>{s.classList.add("rotate"),this.comparisonArray.push(s),2===this.comparisonArray.length&&(this.compareCard(),this.comparisonArray=[])})})}compareCard(){this.comparisonArray[0].id===this.comparisonArray[1].id?(this.arrayOfAllCards=this.arrayOfAllCards.concat(this.comparisonArray),this.arrayOfAllCards.length===this.cardsNumber&&this.win(),this.skipCards()):this.card.cardsArray.forEach(s=>{setTimeout(()=>{s.classList.remove("rotate")},1e3)})}skipCards(){this.comparisonArray.forEach(s=>{setTimeout(()=>{s.classList.remove("rotate"),s.classList.add("skip")},1e3)})}win(){document.getElementById("gameField").classList.toggle("gameField"),document.getElementById("gameField").classList.toggle("hide"),document.getElementById("congratulations").classList.toggle("hide"),document.getElementById("congratulations").classList.toggle("congratulations")}}new class{constructor(){this.writeName()}writeName(){document.getElementById("submit").addEventListener("click",()=>{document.getElementById("name").value.length>=3?(a.nickname.classList.toggle("registration_form"),a.nickname.classList.toggle("hide"),a.levels.classList.toggle("hide"),document.getElementById("hello").innerHTML="Hello, "+document.getElementById("name").value+"!<br>Select the number of cards."):document.getElementById("fill_name").innerHTML="Please, write your nickname not shorter than 3 symbols!",this.chooseLevel()})}chooseLevel(){document.getElementById("levels").addEventListener("click",s=>{let e=s.target;r.push(+e.id),"SPAN"===e.tagName&&(a.levels.classList.toggle("hide"),a.skirts.classList.toggle("hide"),this.chooseSkirt())})}chooseSkirt(){document.getElementById("skirt").addEventListener("click",s=>{let e=s.target;r.push(e.src,e.id),"IMG"===e.tagName&&(document.getElementById("registration").classList.toggle("hide"),document.getElementById("gameField").classList.toggle("gameField"),new n(r[0],r[1],r[2]))})}}}]);
//# sourceMappingURL=main.js.map