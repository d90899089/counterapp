import React, { useState, useEffect } from 'react';

function SaveData() {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [existingAadhaarNumbers, setexistingAadhaarNumbers] = useState([]);

  useEffect(() => {
    const existingData = localStorage.getItem('data.json');
    if (existingData) {
      const parsedData = JSON.parse(existingData);
      if (parsedData.aadhaarNumbers) {
        setexistingAadhaarNumbers(parsedData.aadhaarNumbers);
      }
    }
  }, []);

  const saveDataToFile = () => {
    if (existingAadhaarNumbers.includes(aadhaarNumber)) {
      alert('aadhaar number already exists.');
      return;
    }

    const updatedaadhaarNumbers = [...existingAadhaarNumbers, aadhaarNumber];
    const data = {
      aadhaarNumbers: updatedaadhaarNumbers
    };
    const jsonData = JSON.stringify(data);

    localStorage.setItem('data.json', jsonData);

    setexistingAadhaarNumbers(updatedaadhaarNumbers);

    console.log('Data saved to Local Storage');
  };

  return (
    <div>
      <label htmlFor="aadhaarNumber">aadhaar Number:</label>
      <input
        id="aadhaarNumber"
        type="text"
        value={aadhaarNumber}
        onChange={(e) => setAadhaarNumber(e.target.value)}
      />
      <button onClick={saveDataToFile}>Save Data</button>
    </div>
  );
}

export default SaveData;

//   // Function to add a new Aadhaar number
//   addNewAadhaarNumber = (aadhaarNumber) => {

//     const { existingAadhaarNumbers } = this.state;

//     const updatedAadhaarNumbers = [...existingAadhaarNumbers, aadhaarNumber];

//     this.setState({ existingAadhaarNumbers: updatedAadhaarNumbers });
    
//     const jsonData = JSON.stringify({ aadhaarNumbers: updatedAadhaarNumbers });
//     localStorage.setItem('data.json', jsonData);
//     console.log('New Aadhaar number added:', aadhaarNumber);
//   };