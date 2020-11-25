let images = [
    { id: 1, path: "./images/pexels-bryant's-juarez-5565396.jpg" },
    { id: 2, path: "./images/pexels-burst-374811.jpg" },
    { id: 3, path: "./images/pexels-julian-peter-5818621.jpg" },
    { id: 4, path: "./images/pexels-tatiana-fet-1105766.jpg" },
    { id: 5, path: "./images/pexels-chait-goli-2093323.jpg" },
    { id: 6, path: "./images/pexels-brayden-law-2096700.jpg" },
    { id: 7, path: "./images/pexels-burst-373912.jpg" },
    { id: 8, path: "./images/pexels-burst-374870.jpg" },
    { id: 9, path: "./images/pexels-edoardo-tommasini-2034851.jpg" },
    { id: 10, path: "./images/pexels-mohamed-almari-1485894.jpg" },
    { id: 11, path: "./images/pexels-ricardo-esquivel-2627063.jpg" },
    { id: 12, path: "./images/pexels-fábio-nuno-4272478.jpg" },
    { id: 13, path: "./images/pexels-florencia-potter-351283.jpg" },
    { id: 14, path: "./images/pexels-vinícius-pimenta-311627.jpg" },
    { id: 15, path: "./images/pexels-peng-liu-169647.jpg" },
]

document.querySelector('.miniatures-images').innerHTML = 
    images.map(image => 
        `<div class="miniature" id="${image.id}">
            <img src="${image.path}" alt="">
        </div>`).join('')

document.querySelectorAll('.miniature').forEach(miniature => miniature.addEventListener('click', clickMiniature))

const imgTag = document.querySelector('.image-gallery')
const btnNext = document.querySelector('.next')
const btnPrevious = document.querySelector('.previous')

let nowIndex = 0;

function nextImage(){
    const nextImage = images[nowIndex+1]
    imgTag.src = nextImage.path

    nowIndex += 1;
    setDisplayButtons()
}

function previousImage(){
    const nextImage = images[nowIndex-1]
    imgTag.src = nextImage.path

    nowIndex -= 1;
    setDisplayButtons()
}

function clickMiniature(e){
    const idImage = parseInt(e.path[1].id)
    const nowImage = images.find(image => image.id === idImage)
    nowIndex = images.indexOf(nowImage)
    imgTag.src = nowImage.path
    setDisplayButtons()
}

function setDisplayButtons(){
    nowIndex === 0 ? btnPrevious.style.display = 'none' : btnPrevious.style.display = 'flex'
    nowIndex === images.length - 1 ? btnNext.style.display = 'none' : btnNext.style.display = 'flex'
}

btnNext.addEventListener('click', nextImage)
btnPrevious.addEventListener('click', previousImage)