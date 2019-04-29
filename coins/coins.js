//coin packing optimizer - first compare value density of coins/bills
var coinInfo = [
    // mass in grams, diameter (dia) in cm, height in cm, value in dollars
    {
        coin: "penny",
        value: 0.01,
        mass: 2.500,
        dia: 1.905,
        height: .152
    },
    {
        coin: "nickel",
        value: 0.05,
        mass: 5.000,
        dia: 2.121,
        height: .195
    },
    {
        coin: "dime",
        value: 0.10,
        mass: 2.268,
        dia: 1.791,
        height: .135
    },
    {
        coin: "quarter",
        value: 0.25,
        mass: 5.670,
        dia: 2.426,
        height: .175
    },
    {
        coin: "halfDollar",
        value: 0.50,
        mass: 11.340,
        dia: 3.061,
        height: .215
    },
    {
        coin: "dollarCoin",
        value: 1.00,
        mass: 8.100,
        dia: 2.649,
        height: .200
    },
]

const pi = Math.PI
//calculating volumes of coins simplifying as perfect disc and adding to coinInfo array
function coinVol (rad,height) {
    for (i = 0; i < coinInfo.length; i++) {
        var rad = coinInfo[i].dia / 2;
        var height = coinInfo[i].height;
        coinInfo[i].vol = (pi * Math.pow(rad,2) * height);
    }
}

//calculating density of coins in g/cm^3 and adding to coinInfo array
function coinDensity (vol,mass,density) {
    for (let k = 0; k < coinInfo.length; k++) {
        var vol = coinInfo[k].vol;
        var mass = coinInfo[k].mass
        var density = mass / vol;
        coinInfo[k].density = density;
    }
}

//calculating value per unit density and adding to coinInfo array
function valueDensity (vol,value) {
    for (let l = 0; l < coinInfo.length; l++) {
        var vol = coinInfo[l].vol;
        var value = coinInfo[l].value;
        var valDensity = value / vol;
        coinInfo[l].valDensity = valDensity;
    }
}

for (let j = 0; j < coinInfo.length; j++) {
    coinVol();
    coinDensity();
    valueDensity();
    console.log(coinInfo[j].valDensity);
}