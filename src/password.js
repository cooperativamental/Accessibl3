

import React, { useState } from 'react';
import './App.css';
import'./password'

function App() {
  const [selectedImages, setSelectedImages] = useState([]);

  const images = [
    '/images/cachorros.jpg',
    '/images/capibara.jpg',
    '/images/cerdo.jpg',
    '/images/cuerpospin.jpg',
    '/images/llama.jpg',
    '/images/orangutan.avif',
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
        <div className="image-container">

          <div class="sing-in-panel">
            <form>
              <h1>Sign In to your Dashboard</h1>
              <div class="input">
                <input type="text" required id="name" />
                <div class="bar"></div>
                <label>Username</label>
              </div>
             
              <div class="button-wrapper">
            
              <button class="button-transparent sing-up" type="submit" onclick="window.location.href='password.js'">Generate my PassImage</button>
               
                
              </div>
            </form>
            {/*   {images.map((imageURL, index) => (
            <img
              key={index}
              src={process.env.PUBLIC_URL + imageURL}
              alt={`Image ${index + 1}`}
              className={`image ${selectedImages.includes(imageURL) ? 'selected' : ''}`}
              onClick={() => toggleImageSelection(imageURL)}
            />
          ))} */}
          </div>
          <div>
            <button onClick={handleSubmit} disabled={selectedImages.length !== 12}>
              Submit
            </button>
          </div>
        </div>
    </div>
    </div>
      );
}

      export default App;
