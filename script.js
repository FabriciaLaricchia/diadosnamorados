

const armsContainer = document.getElementById('galaxyArms');
const totalStars = 120; 


const photoFiles = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg'

];

let photosPlaced = 0;

for (let i = 0; i < totalStars; i++) {
    const angle = i * 0.15; 
    const radius = i * 2.2; 

    createCosmosElement(angle, radius);
    createCosmosElement(angle + Math.PI, radius);
}

function createCosmosElement(angle, radius) {
    const randomX = (Math.random() - 0.5) * 35;
    const randomY = (Math.random() - 0.5) * 35;

    const x = 300 + radius * Math.cos(angle) + randomX;
    const y = 300 + radius * Math.sin(angle) + randomY;

    if (Math.random() > 0.96 && photosPlaced < photoFiles.length && radius > 50) {
        createPhotoOrb(x, y, photoFiles[photosPlaced]);
        photosPlaced++;
        return; 
    }

    const isHeart = Math.random() > 0.75; 
    const element = document.createElement('div');

    if (isHeart) {
        element.className = 'heart-star';
        const scale = 0.4 + Math.random() * 0.7;
        element.style.transform = `translate(${x}px, ${y}px) rotate(${-45 + randomX}deg) scale(${scale})`;
        if(Math.random() > 0.5) element.style.backgroundColor = '#ff85a2'; 
    } else {
        element.className = 'star';
        const size = 1 + Math.random() * 4;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        
        const colors = ['#fff', '#ffd166', '#a2d2ff', '#ffafcc'];
        element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    armsContainer.appendChild(element);
}


function createPhotoOrb(x, y, photoSrc) {
    const orb = document.createElement('div');
    orb.className = 'photo-orb';
    

    orb.style.transform = `translate(${x - 30}px, ${y - 30}px)`; 

    const img = document.createElement('img');
    img.src = photoSrc;
    img.alt = "Foto Cósmica";

    orb.appendChild(img);
    armsContainer.appendChild(orb);
}