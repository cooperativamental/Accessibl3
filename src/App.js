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
        alert('La validación falló. Por favor, complete el formulario correctamente.');
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
            <h1>Lets get started</h1>
            <div className="input">
              <input
                type="text"
                required
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="bar"></div>
              <label>Username</label>
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
              <label>Mail</label>
            </div>

            <div className="button-wrapper">
              <button
                className="sing-up"
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
