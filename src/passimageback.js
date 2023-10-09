/* const imageContainer = document.getElementById('image-container');
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



import React, { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const images = [
    '/images/cachorros.jpg',
    '/images/capibara.jpg',
    '/images/cerdo.jpg',
    '/images/cuerpospin.jpg',
    '/images/llama.jpg',
    '/images/ajolote.jfif',
    '/images/perroblanco.jpg',
    '/images/tigre-caminando.jpg',
    '/images/vaca.jpg',
    '/images/zebra.jpg',
    '/images/zorro.jpg',
    '/images/tortuga.jpg',
    '/images/ardilla.jfif',
    '/images/caballo.jfif',
    '/images/leon.jfif',
    '/images/mapache.jfif',
    '/images/perezoso.jfif',


  ];

  const toggleImageSelection = (imageURL) => {
    console.log(imageURL);
    if (selectedImages.includes(imageURL)) {
      setSelectedImages(selectedImages.filter(img => img !== imageURL));
    } else if (selectedImages.length < 12) {
      setSelectedImages([...selectedImages, imageURL]);
    }
  };

  const handleStepChange = () => {
    if (step === 1) {
     
      if (username.trim() !== '' && email.trim() !== '') {
        setStep(2); 
      } else {
        alert('Validation failed. Please fill out the form correctly..');
      }
    } else if (step === 2) {
      if (selectedImages.length === 12) {
        console.log('Image Password:', selectedImages);
        
      } else {
        alert('Select exactly 12 images.');
      }
    }
  };

  const renderForm = () => (
    <div className="App">
      <div className="content-wrapper">
        <div className="background background-left"></div>
        <div className="background background-right"></div>
        <div className="sing-up-panel active">
          <form>
            <h1 >Lets get started</h1>
            <div className="input">
              <input
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="bar"></div>
              <label></label>
            </div>
            <div className="input">
              <input
                type="text"
                required
                placeholder="Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="bar"></div>
              <label></label>
            </div>

            <div className="button-wrapper">
              <button
                className="button"
                type="button"
                onClick={handleStepChange}
              >
                CreatePassImage
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  const renderImageSelection = () => (
    <div className="App">
      <div className="App-header">
        <h1>Select Your Image Password</h1>
        <div className="image-container">
          {images.map((imageURL, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + imageURL}
              alt={`Image ${index + 1}`}
              className={`image ${selectedImages.includes(imageURL) ? 'selected' : ''}`}
              onClick={() => toggleImageSelection(imageURL)}
            />
          ))}
        </div>
        <div>
          <button onClick={handleStepChange} disabled={selectedImages.length !== 12}>
            CreatePassImage
          </button>
        </div>
      </div>
    </div>
  );

  return step === 1 ? renderForm() : renderImageSelection();
}

export default App;
 */
import React, { useState } from 'react';
import './App.css';

function passImageBack() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = () => {
    setShowContent(true);
  };

  const images = [
    '/images/cachorros.jpg',
    '/images/capibara.jpg',
    '/images/cerdo.jpg',
    '/images/cuerpospin.jpg',
    '/images/llama.jpg',
    '/images/ajolote.jfif',
    '/images/perroblanco.jpg',
    '/images/tigre-caminando.jpg',
    '/images/vaca.jpg',
    '/images/zebra.jpg',
    '/images/zorro.jpg',
    '/images/tortuga.jpg',
    '/images/ardilla.jfif',
    '/images/caballo.jfif',
    '/images/leon.jfif',
    '/images/mapache.jfif',
    '/images/perezoso.jfif',
  ];

  const toggleImageSelection = (imageURL) => {
    console.log(imageURL);
    if (selectedImages.includes(imageURL)) {
      setSelectedImages(selectedImages.filter(img => img !== imageURL));
    } else if (selectedImages.length < 12) {
      setSelectedImages([...selectedImages, imageURL]);
    }
  };

  const handleSubmit = () => {
    if (selectedImages.length === 12) {
      console.log('Image Password:', selectedImages);
    } else {
      alert('Select exactly 12 images.');
    }
  };

  return (
    <div className="App">
      {showContent ? (
        <div>
          <div className="App">
            <div id="background">
              <div className="circle">
                <div className="circle-glow"></div>
                <div className="circle-inner"></div>
              </div>
            </div>
            <div className="App-header">
              <h1>Select Your Passimage</h1>
              <div className="image-container">
                {images.map((imageURL, index) => (
                  <img
                    key={index}
                    src={process.env.PUBLIC_URL + imageURL}
                    alt={`Image ${index + 1}`}
                    className={`image ${selectedImages.includes(imageURL) ? 'selected' : ''}`}
                    onClick={() => toggleImageSelection(imageURL)}
                  />
                ))}
              </div>
              <div>
                <button onClick={handleSubmit} disabled={selectedImages.length !== 12}>
                  Create Passimage
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={handleButtonClick}>Create Passimag</button>
      )}
    </div>
  );
}

export default passImageBack;