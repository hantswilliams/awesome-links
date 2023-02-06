import React, { useState } from "react";

type Props = {
  onImageUpload: (name: string) => void;
};

const ImageUpload = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(event.target.files?.[0]);
    if (event.target.files) {
      props.onImageUpload(event.target.files[0].name);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default ImageUpload;