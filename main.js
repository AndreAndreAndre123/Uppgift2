//knappar
let back = document.querySelector("#add");
let checkOut = document.querySelector("#check-out");
let vip = document.querySelector("#vip");
//input
let input = document.querySelector("#ipt");
//lista
let list = document.querySelector("#lst");
//text
let textContainer = document.querySelector("#text-container")
var text = document.createTextNode("There’s currently no people standing in line");
let h2 = document.createElement("h2");
h2.appendChild(text);
//if(list.childElementCount)
textContainer.appendChild(h2);


back.addEventListener("click", () => {
    if (list.childElementCount ===0){
    let li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    input.value = "";
    textContainer.removeChild(h2);
}   else{
    let li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    input.value = "";
}
})

vip.addEventListener("click", () => {
    if (list.childElementCount ===0){
        let li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        input.value = "";
        textContainer.removeChild(h2);
    }   else{
        let li = document.createElement("li");
        li.innerText = input.value;
        list.prepend(li);
        input.value = "";
    }
})




checkOut.addEventListener("click", () => {
    if(list.childElementCount == 1){
        list.removeChild(list.firstElementChild);
        
        textContainer.appendChild(h2);
    }
    else if(list.childElementCount > 1){
    list.removeChild(list.firstElementChild);
    
}    
    
})


