import React, { useState } from "react";
import NavComponent from "./NavComponent";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {

        const formData = new FormData();
        formData.append('file',file);

        try{
            const response = await fetch("http://localhost:3001/upload",{
                method: 'POST',
                body: formData
            });
            if (response.ok){
                console.log("File Uploaded")

            }else{
                console.log("File not uploaded error")
            }
        }catch (error){
            console.log(error)
        }
    }else{
        console.log("file not seleted")
    }
  };
  return (
    <>
      <NavComponent />
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload File</button>
      </form>
    </>
  );
};

export default FileUpload;
