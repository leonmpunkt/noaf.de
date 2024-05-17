// App.js
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React, { useState } from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigationType
} from "react-router-dom";
import About from './About'; // Import the About component
import './App.css';
import FlipCard from './Flipcard'; // Import the new component
import Footer from './Footer'; // Import the Footer component
import Header from './Header'; // Import the Header component
import SubpageMamaSindWirNazis from "./pages/SubpageMamaSindWirNazis";

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
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const images = [
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Nazis.png',
      width: 320,
      height: 212,
      // textFilePath: "sticker_text/sticker1.txt",
      text: "Die AfD nutzt Worte von Nationalsozialisten und Neonazis, aber willpartout nicht rechtsextrem sein. ",
      mehrLink: "/mamasindwirnazis"
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Kartoffel.png',
      width: 320,
      height: 212,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      alt: "Boats (Jeshu John - designerspics.com)",
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Filterblase.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Herzen.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Hetze.png',
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
    },
    {
      src: process.env.PUBLIC_URL + '/images/Sticker/Täter.png',
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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={
          <div className="content">
            <div className="gallery-container">
              {images.map((img, index) => (
                <FlipCard key={index} image={img} mehrLink={img.mehrLink} />
              ))}
            </div>
          </div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/mamasindwirnazis" element={<SubpageMamaSindWirNazis />} />
        {/* ...other routes */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
