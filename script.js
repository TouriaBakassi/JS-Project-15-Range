//                   Range

let rangenumber=document.querySelector("#rangenumber");
let rangeslider=document.querySelector("#rangeslider");

rangeslider.addEventListener("input",function () {
    rangenumber.textContent= rangeslider.value;
});