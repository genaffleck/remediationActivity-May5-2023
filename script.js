(function(){
  "use strict";

  let currentImage = 0;

  const myPhotos = ["image1.jpg", "image2.jpg", "image3.jpg","image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg"];
    
  const container = document.getElementById('content');
  const nextBtn = document.getElementById('next');
  const previousBtn = document.getElementById('previous');

  function swapImages(){
    const newSlide = document.createElement('img');
    newSlide.src = `images/${myPhotos[currentImage]}`;
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if (container.children.length > 2){
      container.removeChild(container.children[0]);
    }
  }

  nextBtn.addEventListener('click', function(event){
    event.preventDefault();

    currentImage++;
    if(currentImage > myPhotos.length-1){currentImage=0;}
    swapImages();
  });

  previousBtn.addEventListener('click', function(event){
    event.preventDefault();

    currentImage--;
    if(currentImage < 0){currentImage = myPhotos.length - 1}
    swapImages();
  });

})();


