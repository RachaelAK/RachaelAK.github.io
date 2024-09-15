document.addEventListener("DOMContentLoaded" , () => {

const images = document.querySelector ("img");

for (const imags of images) {
    fetch ("https://dog.ceo/api/breeds/images/random")
    .then(response => response.jso)
    .then(data => {
        images.sc = data.message
        images.width = 100;
        images.height = 100;
    })
}

})