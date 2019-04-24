const review0 = {
    title0: "js title",
    review0:'i purchased this binary star system after i was inspired by seeing a solar eclipse and although i had some problems getting the accretion started it\'s now on track to become a nice, healthy X-ray pulsar. nobody told me this thing was magnetic, though!'
}
var review = [
    review0,
    {
        title1: "title1",
        review1: "review1"
    }
];

document.getElementById("title0").innerHTML = review[0]["title0"];
document.getElementById("review0").innerHTML = review[0]["review0"];

console.log(review0);
console.log(review);