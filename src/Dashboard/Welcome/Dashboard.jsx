import React from "react";
import myImage from "./dash.png"; // Update the path to your image

const ImagePage = () => {
  return (
    <div style={styles.container}>
      <img src={myImage} alt="Description of the image" style={styles.image} />
    </div>
  );
};

// Add some basic styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "white", // Light background color
  },
  image: {
    maxWidth: "100%", // Responsive image
    maxHeight: "100%", // Prevent overflow
  },
};

export default ImagePage;
