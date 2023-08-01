const buyTentButton = document.querySelector(".buyTent > button") as HTMLElement
const buyHutButton = document.querySelector(".buyHut > button") as HTMLElement
const buyHouseButton = document.querySelector(".buyHouse > button") as HTMLElement
const buyTownHallButton = document.querySelector(".buyTownHall > button") as HTMLElement

const gold = document.getElementById("gold") as HTMLElement
const stone = document.getElementById("stone") as HTMLElement
const wood = document.getElementById("wood") as HTMLElement
const food = document.getElementById("food") as HTMLElement
const population = document.getElementById("population") as HTMLElement

const townMap = document.querySelector(".townMap") as HTMLElement

let playerGold:number = 100
let playerStone:number = 20
let playerWood:number = 100
let playerFood:number = 20
let playerPopulation:number = 10

let tentCount:number = 0
let hutCount:number = 0
let houseCount:number = 0
let townHallCount:number = 0

///////////////////--------FUNCTIONS-----------//////////////////////////
function playerStatus():void {
    gold.innerText = `Gold: ${playerGold}`
    stone.innerText = `Stone: ${playerStone}`
    wood.innerText = `Wood: ${playerWood}`
    food.innerText = `Food: ${playerFood}`
    population.innerText = `Population: ${playerPopulation}`
}
function upgradeOne():void {
    playerWood += 1
    playerStone += 1
    playerStatus()
}

function upgradeTwo():void {
    playerFood += 3
    playerStatus()
}

function upgradeThree():void{
    playerGold += 1
    playerStatus()
}

function upgradeFour():void {
    playerStone += 2
    playerWood += 2
    playerGold += 3
    playerStatus()
}


////////////////----------------BUTTONS ON CLICK---------------////////////////////////

buyTentButton.onclick = () => {
    if (playerGold >= 10 && playerStone >= 10 && playerWood >= 10){

        playerGold -= 10
        playerStone -= 10
        playerWood -= 10
        playerPopulation += 2

        tentCount += 1

        setInterval((): void => {
            upgradeOne()
        }, 1000);

        townMap.innerHTML += `<div class="builtTent">
<img src="https://i.redd.it/icezgp2os9i71.png" alt="">
</div>`

    } else {
        window.alert("you don't have enough resources")
    }
}

buyHutButton.onclick = () =>{

    if (tentCount >= 1){

        if (playerGold >= 20 && playerStone >= 20 && playerWood >= 20 && playerPopulation >= 5){

            playerGold -= 20
            playerStone -= 20
            playerWood -= 20
            playerPopulation -= 5

            hutCount += 1

            setInterval((): void => {
                upgradeTwo()
            }, 1000);

            townMap.innerHTML += `<div class="builtHut">
<img src="https://i.redd.it/3zl80aj80fm61.png" alt="">
</div>`

        } else {
            window.alert("you don't have enough resources")
        }

    } else {
        window.alert("Not enough tents!")
    }

}

buyHouseButton.onclick = () =>{

    if (tentCount >= 1 && hutCount >= 1){

        if (playerGold >= 50 && playerStone >= 70 && playerWood >= 80){

            playerGold -= 50
            playerStone -= 70
            playerWood -= 80
            playerPopulation += 10

            houseCount += 1

            setInterval((): void => {
                upgradeThree()
            }, 1000);

            townMap.innerHTML += `<div class="builtHouse">
<img src="https://i.pinimg.com/originals/7c/40/fe/7c40fe9569b140918948e03c08b58d8d.png" alt="">
</div>`

        } else {
            window.alert("you don't have enough resources")
        }

    } else {
        window.alert("Not enough tents and huts!")
    }

}

buyTownHallButton.onclick = () =>{

    if (tentCount >= 3 && hutCount >= 4 && houseCount >= 5){

        if (playerGold >= 150 && playerStone >= 300 && playerWood >= 200 && playerPopulation >= 100 && playerFood >= 200){

            playerGold -= 150
            playerStone -= 300
            playerWood -= 200
            playerPopulation -= 100
            playerFood -= 200

            townHallCount += 1

            setInterval((): void => {
                upgradeFour()
            }, 1000);

            townMap.innerHTML += `<div class="builtTownHall">
<img src="https://pixeljoint.com/files/icons/full/city_hall_pj.gif" alt="">
</div>`

        } else {
            window.alert("you don't have enough resources")
        }

    } else{
        window.alert("Not enough tents,huts and houses!")
    }

}




