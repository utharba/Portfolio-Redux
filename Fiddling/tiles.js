function moveTile1 (tile,blankTile) {

    var tile = document.getElementById("pos1").childNodes;
    //tile1
    var blankTile = document.getElementById("pos4").childNodes;

    document.getElementById("pos1").replaceChild(blankTile,tile);
    document.getElementById("pos4").replaceChild(tile,blankTile);

    var i;
 //   for (i = 0; i < x)
    
};
console.log(document.getElementById("tile1"));
console.log(document.getElementById("tile4"));
/*
function moveTile2 (pos1,pos2,pos3,posBlank,tiles) {
    var pos1 = "#pos1";
    var pos2 = "#pos2";
    var pos3 = "#pos3";
    var posBlank = "#pos4";

    var tileList = document.getElementsByClassName(".tile");
    
    if 

    var i;
    for (i = 0; i < x)
    
}
function moveTile1 (pos1,pos2,pos3,posBlank,tiles) {
    var pos1 = "#pos1";
    var pos2 = "#pos2";
    var pos3 = "#pos3";
    var posBlank = "#pos4";

    var tileList = document.getElementsByClassName(".tile");
    
    if 

    var i;
    for (i = 0; i < x)
    
}
function moveTile1 (pos1,pos2,pos3,posBlank,tiles) {
    var pos1 = "#pos1";
    var pos2 = "#pos2";
    var pos3 = "#pos3";
    var posBlank = "#pos4";

    var tileList = document.getElementsByClassName(".tile");
    
    if 

    var i;
    for (i = 0; i < x)
    
}*/
console.log(document.getElementsByClassName("tile"));