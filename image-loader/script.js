var imageContainer = document.querySelector(".image-container")

var loadbutton =document.querySelector(".load-btn") 

loadbutton.addEventListener("click",()=>{

    imageval = 8
    addNewImage()

})

function addNewImage(){

    for (let index = 0; index < imageval; index++) {
        const newImgEl = document.createElement("img")

        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*1000)}`;
    
        imageContainer.appendChild(newImgEl)
        
    }


}