//coin packing optimizer - first compare value density of coins/bills
var coinInfo = [
    {
        coin: "penny",
        mass: 2.500,
        dia: 19.05,
        height: 1.52
    },
    {
        coin: "nickel",
        mass: 5.000,
        dia: 21.21,
        height: 1.95
    },
    {
        coin: "dime",
        mass: 2.268,
        dia: 17.91,
        height: 1.35
    },
    {
        coin: "quarter",
        mass: 5.670,
        dia: 24.26,
        height: 1.75
    },
    {
        coin: "halfDollar",
        mass: 11.340,
        dia: 30.61,
        height: 2.15
    },
    {
        coin: "dollarCoin",
        mass: 8.100,
        dia: 26.49,
        height: 2.00
    },
]

const pi = Math.PI

function coinVol (rad,height) {
    for (i = 0; i < coinInfo.length; i++) {
        var rad = coinInfo[i].dia / 2;
        var height = coinInfo[i].height;
        coinInfo[i].vol = (pi * Math.pow(rad,2) * height);
    }
}


for (let j = 0; j < coinInfo.length; j++) {
    console.log(coinInfo[j].vol);
}

