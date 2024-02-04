// App.js
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About'; // Import the About component
import './App.css';
import FlipCard from './Flipcard'; // Import the new component

async function fetchTextFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (response.ok) {
      return await response.text();
    } else {
      throw new Error(`Failed to fetch text file: ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    return ""; // Return an empty string in case of an error
  }
}

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Slide1.png',
      width: 320,
      height: 212,
      // textFilePath: "sticker_text/sticker1.txt",
      text: "Wie keine andere Partei im Bundestag polarisiert die AfD mit Sprache. Eine der wichtigsten Kommunikationsweisen hierbei ist die kalkulierte Provokation, ein Mittel, um mit hoher Wahrscheinlichkeit heftige öffentliche Reaktionen auszulösen."
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Slide2.png',
      width: 320,
      height: 212,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      alt: "Boats (Jeshu John - designerspics.com)",
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Slide3.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Slide4.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Slide5.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Slide6.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    // ...add more images
  ];

  const handleImageClick = (index) => {
    // If the same image is clicked again, close the details view
    if (selectedImage === index) {
      setSelectedImage(null);
    } else {
      setSelectedImage(index);
    }
  };

  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="content">
              <div className="gallery-container">
                {images.map((img, index) => (
                  <FlipCard key={index} image={img}/>
                ))}
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          {/* ...other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
