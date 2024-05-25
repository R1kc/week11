const myButton = document.querySelector('button');
const image = document.querySelector('.image-container img');
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {

    //kood siia
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex]; //kood siia

//proov
}