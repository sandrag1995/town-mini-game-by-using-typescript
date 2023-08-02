"use strict";
const buyTentButton = document.querySelector(".buyTent > button");
const buyHutButton = document.querySelector(".buyHut > button");
const buyHouseButton = document.querySelector(".buyHouse > button");
const buyTownHallButton = document.querySelector(".buyTownHall > button");
const gold = document.getElementById("gold");
const stone = document.getElementById("stone");
const wood = document.getElementById("wood");
const food = document.getElementById("food");
const population = document.getElementById("population");
const townMap = document.querySelector(".townMap");
const playerResources = {
    gold: 100,
    stone: 20,
    wood: 100,
    food: 20,
    population: 10,
};
const buildingCounts = {
    tent: 0,
    hut: 0,
    house: 0,
    townHall: 0,
};
///////////////////--------FUNCTIONS-----------//////////////////////////
function playerStatus() {
    gold.innerText = `Gold: ${playerResources.gold}`;
    stone.innerText = `Stone: ${playerResources.stone}`;
    wood.innerText = `Wood: ${playerResources.wood}`;
    food.innerText = `Food: ${playerResources.food}`;
    population.innerText = `Population: ${playerResources.population}`;
}
function createBuilding(imageUrl) {
    townMap.innerHTML += `<div class="builtBuilding">
<img src="${imageUrl}" alt="" style="height: 100px;">
</div>`;
}
function upgradeOne() {
    playerResources.wood += 1;
    playerResources.stone += 1;
    playerStatus();
}
function upgradeTwo() {
    playerResources.food += 3;
    playerStatus();
}
function upgradeThree() {
    playerResources.gold += 1;
    playerStatus();
}
function upgradeFour() {
    playerResources.stone += 2;
    playerResources.wood += 2;
    playerResources.gold += 3;
    playerStatus();
}
////////////////----------------BUTTONS ON CLICK---------------////////////////////////
buyTentButton.onclick = () => {
    if (playerResources.gold >= 10 &&
        playerResources.stone >= 10 &&
        playerResources.wood >= 10) {
        playerResources.gold -= 10;
        playerResources.stone -= 10;
        playerResources.wood -= 10;
        playerResources.population += 2;
        buildingCounts.tent += 1;
        createBuilding("https://i.redd.it/icezgp2os9i71.png");
        setInterval(() => {
            upgradeOne();
        }, 1000);
    }
    else {
        window.alert("you don't have enough resources");
    }
};
buyHutButton.onclick = () => {
    if (buildingCounts.tent >= 1) {
        if (playerResources.gold >= 20 &&
            playerResources.stone >= 20 &&
            playerResources.wood >= 20 &&
            playerResources.population >= 5) {
            playerResources.gold -= 20;
            playerResources.stone -= 20;
            playerResources.wood -= 20;
            playerResources.population -= 5;
            buildingCounts.hut += 1;
            createBuilding("https://i.redd.it/3zl80aj80fm61.png");
            setInterval(() => {
                upgradeTwo();
            }, 1000);
        }
        else {
            window.alert("you don't have enough resources");
        }
    }
    else {
        window.alert("Not enough tents!");
    }
};
buyHouseButton.onclick = () => {
    if (buildingCounts.tent >= 1 && buildingCounts.hut >= 1) {
        if (playerResources.gold >= 50 &&
            playerResources.stone >= 70 &&
            playerResources.wood >= 80) {
            playerResources.gold -= 50;
            playerResources.stone -= 70;
            playerResources.wood -= 80;
            playerResources.population += 10;
            buildingCounts.house += 1;
            createBuilding("https://i.pinimg.com/originals/7c/40/fe/7c40fe9569b140918948e03c08b58d8d.png");
            setInterval(() => {
                upgradeThree();
            }, 1000);
        }
        else {
            window.alert("you don't have enough resources");
        }
    }
    else {
        window.alert("Not enough tents and huts!");
    }
};
buyTownHallButton.onclick = () => {
    if (buildingCounts.tent >= 3 &&
        buildingCounts.hut >= 4 &&
        buildingCounts.house >= 5) {
        if (playerResources.gold >= 150 &&
            playerResources.stone >= 300 &&
            playerResources.wood >= 200 &&
            playerResources.population >= 100 &&
            playerResources.food >= 200) {
            playerResources.gold -= 150;
            playerResources.stone -= 300;
            playerResources.wood -= 200;
            playerResources.population -= 100;
            playerResources.food -= 200;
            buildingCounts.townHall += 1;
            createBuilding("https://pixeljoint.com/files/icons/full/city_hall_pj.gif");
            setInterval(() => {
                upgradeFour();
            }, 1000);
        }
        else {
            window.alert("you don't have enough resources");
        }
    }
    else {
        window.alert("Not enough tents, huts, and houses!");
    }
};

