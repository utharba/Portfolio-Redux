const review0 = {
    title0: "js title",
    review0:'i purchased this binary star system after i was inspired by seeing a solar eclipse and although i had some problems getting the accretion started it\'s now on track to become a nice, healthy X-ray pulsar. nobody told me this thing was magnetic, though!'
}
var reviewArr = [
    {
        name: "Astrid",
        title: "title",
        review: "review1"
    }
]
function addReview () {
    var reviewForm = {};
        reviewForm.reviewName = document.getElementById("reviewName").value;
        reviewForm.reviewTitle = document.getElementById("reviewTitle").value;
        reviewForm.reviewBody = document.getElementById("reviewBody").value;
        reviewArr.push(reviewForm);

        console.log(reviewForm);
        console.log(reviewArr);
    for (var i = 0; i < reviewArr.length; i++) {
            document.getElementById("title0").innerHTML = reviewArr[i].reviewTitle;
            document.getElementById("review0").innerHTML = reviewArr[i].reviewBody;
    }
}



