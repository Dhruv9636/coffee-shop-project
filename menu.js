blackCoffee = document.querySelector("#black-coffee")
        coldCoffee = document.querySelector("#cold-coffee")
        greenCoffee = document.querySelector("#green-coffee")
        hotCoffee = document.querySelector("#hot-coffee")
        mai = document.querySelector(".m2")


btn = document.querySelector("#submit-btn")

black = document.querySelector("#black")
cold = document.querySelector("#cold")
green = document.querySelector("#green")
hot = document.querySelector("#hot")
total = document.querySelector("#order")

let mainMsgBox = document.querySelector(".mainMsgBox")
let msgText = document.querySelector(".msgText")
let mainMsgBtn = document.querySelector(".mainMsgBtn")
let finalMsg = document.querySelector(".msg")




blackC = 0;
coldC = 0;
hotC = 0;
greenC = 0;

totalC = 0;

black.innerText = blackC
cold.innerText = coldC
green.innerText = greenC
hot.innerText = hotC

function totalCoffee() {
    totalC = blackC + coldC + hotC + greenC
    total.innerText = totalC
}

blackCoffee.addEventListener("click", () => {
    blackC = blackC+1

    black.innerText = blackC
    totalCoffee()
})

coldCoffee.addEventListener("click", () => {
    coldC = coldC+1

    cold.innerText = coldC
    totalCoffee()
})

greenCoffee.addEventListener("click", () => {
    greenC = greenC+1

    green.innerText = greenC
    totalCoffee()
})

hotCoffee.addEventListener("click", () => {
    hotC = hotC+1

    hot.innerText = hotC
    totalCoffee()
})



btn.addEventListener("click", () => {
        if(totalC == 0){
        mai.classList.add("hide")
        msgText.innerText = "You have not order any Coffee, Please order your faverate Coffee"
        mainMsgBtn.innerText = "Try Again"
        mainMsgBox.classList.remove("hide")
        finalMsg.style.backgroundColor = "red"
    }else if(totalC == 1){
        mai.classList.add("hide")
        msgText.innerText = `Your order which is ${totalC} coffee will deliver soon`
        mainMsgBtn.innerText = "DONE"
        mainMsgBox.classList.remove("hide")
        finalMsg.style.backgroundColor = "blue"
    }else{
        mai.classList.add("hide")
        msgText.innerText = `Your order which is ${totalC} coffees will deliver soon`
        mainMsgBtn.innerText = "DONE"
        mainMsgBox.classList.remove("hide")
        finalMsg.style.backgroundColor = "blue"
    }
})



mainMsgBtn.addEventListener("click", () => {
    mai.classList.remove("hide")
        mainMsgBox.classList.add("hide")
        blackC = 0;
        coldC = 0;
        hotC = 0;
        greenC = 0;
        totalC = 0;
        black.innerText = blackC;
        cold.innerText = coldC;
        hot.innerText = hotC;
        green.innerText = greenC;
        total.innerText = totalC
})