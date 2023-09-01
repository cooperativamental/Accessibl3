const imageContainer = document.getElementById('image-container');
const submitButton = document.getElementById('submit-button');
const images = [
  'cachorros.jpg',
  'capibara.jpg',
  'cerdo.jpg',
  'cuerpospin.jpg',
  'llama.jpg',
  'orangutan.avif',
  'perroblanco.jpg',
  'tigre-caminando.jpg',
  'vaca.jpg',
  'zebra.jpg',
  'zorro.jpg',
  'tortuga.jpg',
  'cachorros.jpg',
  'capibara.jpg',
  'cerdo.jpg',
  'cuerpospin.jpg',
  'llama.jpg',
  'orangutan.avif',
  'perroblanco.jpg',
  'tigre-caminando.jpg',
  'vaca.jpg',
  'zebra.jpg',
  'zorro.jpg',
  'tortuga.jpg'


];

let selectedImages = [];

images.forEach(imageURL => {
  const image = document.createElement('img');
  image.src = imageURL;
  image.classList.add('image');
  
  image.addEventListener('click', () => toggleImageSelection(imageURL));
  
  imageContainer.appendChild(image);
});


function toggleImageSelection(imageURL) {
  const index = selectedImages.indexOf(imageURL);
  if (index === -1) {
    if (selectedImages.length < 12) {
      selectedImages.push(imageURL);
      imageContainer.querySelector(`[src="${imageURL}"]`).classList.add('selected');
    }
  } else {
    selectedImages.splice(index, 1);
    imageContainer.querySelector(`[src="${imageURL}"]`).classList.remove('selected');
  }
  
  if (selectedImages.length === 12) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

submitButton.addEventListener('click', () => {
  if (selectedImages.length === 12) {
    
    console.log('Contraseña de imágenes:', selectedImages);
  } else {
    alert('Selecciona exactamente 12 imágenes.');
  }
});
