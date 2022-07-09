const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

const count = 10;
const apiKey = 'MjiH1AlQVnBK4IGNcoqSPHAgR80Kkx8GnODVAmAagy4';
const unsplashApiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// //Helper Function to Set Attributes on DOM Elements
// function setAttributes(element, attribute) {
//     for (const key in attributes) {
//         element.setAttribute(key, attributes[key])
//     }
// }


// Create elements for Links & Photos, Add to DOM
const displayPhotos = () => {
    //Run function for each object in photosArray
    photosArray.forEach((photo) => {
        //  create <a> to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        //  Put <img> inside <a>, then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item)
    });
}

// get photos from unsplash api

async function getPhotos () {
    try {
        const response = await fetch(unsplashApiUrl);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos();
        
    } catch (error) {
        console.log(error)
    }
}

// On Load
getPhotos();