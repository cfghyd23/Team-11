 import React, { useState , useEffect} from 'react';
 import img2 from './img2.jpg';

 import { jsPDF } from 'jspdf';
 import './certification.css';
 const Certificate = () => {
  const [name, setName] = useState('');
 const [days, setDays] = useState(0);
 const [funds, setFunds] = useState(0);

  const handleDownload = () => {
     if (days >= 10 && funds >=1000) {
       if (name.trim() !== '') {
         const doc = new jsPDF();
         doc.setFontSize(24);
         doc.text(`Certificate of completing Internship`, 105, 40, { align: 'center' });
        doc.setFontSize(18);
        doc.text(`This is to certify that Mr.`, 105, 60, { align: 'center' });
         doc.setFontSize(24);
         doc.text(`has successfully completed the 10 day internship`,105,100,{align: 'center'});
         doc.text(`${name}`, 105, 80, { align: 'center' });
         doc.save('certificate.pdf');
       } else {
         alert('Please enter your name.');
       }
     } else {
       alert('You do not meet the criteria for downloading the certificate.');
     }
   };

   


   return (
    
    <div className='middle'style={{backgroundImage: `url(${img2})`, backgroundSize: 'cover',
    backgroundPosition: 'center',}}>
      <h1 className="blinking"  >Certificate Page</h1>
      <div className="centered-form2">
        <div className="form-group2">
           <label htmlFor="name">Your Name:</label>
           <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group2">
           <label htmlFor="days">Number of days Attended:</label>
           <input
             type="number"
             id="days"
            value={days}
             onChange={(e) => setDays(parseInt(e.target.value))}
           />
        </div>
         <div className="form-group2">
          <label htmlFor="funds">Funds:</label>
           <input
            type="number"
            id="funds"
            value={funds}
            onChange={(e) => setFunds(parseInt(e.target.value))}
          />
        </div>
        <button onClick={handleDownload}>Download Certificate</button>
      </div>
     </div>
     
     
   );
 };


export default Certificate;
