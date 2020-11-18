const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function fetchImages() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
  }
  
function renderImages(imgURLs) {
    imgURLs["message"].forEach(displayImgs)

    function displayImgs(item) {
        document.getElementById("dog-image-container").innerHTML += `<img src="${item}">`
    }
}