import React, { useState } from "react";
import ImageUpload from "./Upload";
import ImageData from "./Data";

const App = () => {
  const [imageName, setImageName] = useState("");

  const handleImageUpload = (name: string) => {
    setImageName(name);
  };

  return (
    <div>
      <ImageUpload onImageUpload={handleImageUpload} />
      {imageName ? <ImageData imageName={imageName} /> : null}
    </div>
  );
};

export default App;