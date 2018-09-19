!function(e){var t={};function s(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(i,a,function(t){return e[t]}.bind(null,a));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}([function(e,t,s){},,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);s(0),s(2);var i=[];var a={levels:document.getElementById("number_of_blocks"),nickname:document.getElementById("registration_form"),skirts:document.getElementById("skirt")};var r=[{id:"naruto",images:[{img:"./assets/img/naruto/1.png",id:1},{img:"./assets/img/naruto/2.png",id:2},{img:"./assets/img/naruto/3.png",id:3},{img:"./assets/img/naruto/4.png",id:4},{img:"./assets/img/naruto/5.png",id:5},{img:"./assets/img/naruto/6.png",id:6},{img:"./assets/img/naruto/7.png",id:7},{img:"./assets/img/naruto/8.png",id:8},{img:"./assets/img/naruto/9.png",id:9}]},{id:"cats",images:[{img:"./assets/img/cats/1.png",id:1},{img:"./assets/img/cats/2.png",id:2},{img:"./assets/img/cats/3.png",id:3},{img:"./assets/img/cats/4.png",id:4},{img:"./assets/img/cats/5.png",id:5},{img:"./assets/img/cats/6.png",id:6},{img:"./assets/img/cats/7.png",id:7},{img:"./assets/img/cats/8.png",id:8},{img:"./assets/img/cats/9.png",id:9}]},{id:"web",images:[{img:"./assets/img/web/1.png",id:1},{img:"./assets/img/web/2.png",id:2},{img:"./assets/img/web/3.png",id:3},{img:"./assets/img/web/4.png",id:4},{img:"./assets/img/web/5.png",id:5},{img:"./assets/img/web/6.png",id:6},{img:"./assets/img/web/7.png",id:7},{img:"./assets/img/web/8.png",id:8},{img:"./assets/img/web/9.png",id:9}]}];class n{constructor(e,t,s){this.cardsNumber=e,this.backPath=t,this.imagesObj=r.find(e=>e.id===s),this.front=null,this.back=null,this.cardsArray=[],this.imageArray=this.shuffleImageArray(this.imagesObj.images.slice(0,e/2)),this.imageArray=this.shuffleImageArray(this.imageArray.concat(this.imageArray)),this.createGameField(),this.click()}shuffleImageArray(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}createCard(){return this.card=document.createElement("div"),this.card.classList.add("card"),this.createFrontSide(),this.createBackSide(),document.getElementById("cards").appendChild(this.card),this.card}createFrontSide(){this.front=document.createElement("div"),this.front.classList.add("front"),this.card.appendChild(this.front)}createBackSide(){this.back=document.createElement("div"),this.back.classList.add("back"),this.card.appendChild(this.back);let e=document.createElement("img");e.src=this.backPath,this.back.appendChild(e)}createGameField(){for(let e=0;e<this.cardsNumber;e++)this.cardsArray.push(this.createCard());this.setCardClass(),console.log(this.imageArray)}setCardClass(){this.cardsArray.forEach((e,t)=>{e.id=`${t+1}`,12===this.cardsNumber?e.classList.add("easy_cards"):16===this.cardsNumber?e.classList.add("medium_cards"):e.classList.add("hard_cards")})}click(){this.cardsArray.forEach(e=>{e.addEventListener("click",()=>{e.classList.add("rotate")})})}}class d{constructor(e,t,s){new n(e,t,s)}}new class{constructor(){this.writeName()}writeName(){document.getElementById("submit").addEventListener("click",()=>{document.getElementById("name").value.length>=3?(a.nickname.classList.toggle("registration_form"),a.nickname.classList.toggle("hide"),a.levels.classList.toggle("hide"),document.getElementById("hello").innerHTML="Hello, "+document.getElementById("name").value+"!<br>Select the number of cards."):document.getElementById("fill_name").innerHTML="Please, write your nickname not shorter than 3 symbols!",this.chooseLevel()})}chooseLevel(){document.getElementById("levels").addEventListener("click",e=>{let t=e.target;i.push(+t.id),"SPAN"===t.tagName&&(a.levels.classList.toggle("hide"),a.skirts.classList.toggle("hide"),this.chooseSkirt())})}chooseSkirt(){document.getElementById("skirt").addEventListener("click",e=>{let t=e.target;i.push(t.src,t.id),"IMG"===t.tagName&&(document.getElementById("registration").classList.toggle("hide"),document.getElementById("gameField").classList.toggle("gameField"),new d(i[0],i[1],i[2]),console.log(i))})}}}]);
//# sourceMappingURL=main.js.map