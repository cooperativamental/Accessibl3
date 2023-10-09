/* import React, { useState } from 'react';
import './App.css';

function App() {
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

export default App; */

import React, { useState } from 'react';
import './App.css';

function App() {
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

  const handleSubmit = () => {
    if (selectedImages.length === 12) {
      console.log('Image Password:', selectedImages);
    } else {
      alert('Select exactly 12 images.');
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Select Your PassImages </h1>
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
            Confirm PassImage
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
