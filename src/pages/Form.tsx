import React, { ChangeEvent, useState } from 'react';
import { Container, Grid, Box, TextField,MenuItem } from "@mui/material";
import '../App.css';
import img from '../Sasi.jpg';

import e from 'express';

const FileUploadComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };
  

  const handleFileUpload = () => {
    if (selectedFile) {
      // You can process the uploaded file here, such as uploading it to a server
      console.log('File uploaded:', selectedFile);
      // Reset the file input
      setSelectedFile(null);
    }
  };
  
  
  

  return (
    <div>
    <div>
      <h6>Upload img of father</h6>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
    <div>
      <h6>Upload img of mother</h6>
      <input type="file" onChange={handleFileChange}/>
      <button onClick={handleFileUpload}>Upload</button>
    </div>
    <div>
      <h6>Upload img of student</h6>
      <input type="file" onChange={handleFileChange}/>
      <button onClick={handleFileUpload}>Upload</button>
    </div>
    </div>
    
    
  );
};

function Form() {
  const [studentName, setStudentName] = useState<string>('');
  const [fatherName, setfatherName] = useState<string>('');
  const [motherName, setmotherName] = useState<string>('');
  const [occupation, setoccupation] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [moccupation, setmoccupation] = useState<string>('');
  const [bloodgrp, setbloodgrp] = useState<string>('');
  const [gender, setgender] = useState<string>('');
  
  const [nationality, setnationality] = useState<string>('');
  const [religion, setreligion] = useState<string>('');
  const [caste, setcaste] = useState<string>('');
  const [subcaste, setsubcaste] = useState<string>('');
  const [studentAadharNumber, setStudentAadharNumber] = useState<string>('');
  const [fatherAadharNumber, setfatherAadharNumber] = useState<string>('');
  const [motherAadharNumber, setmotherAadharNumber] = useState<string>('');
  const [abcid, setabcid] = useState<string>('');
  const [parentnumber, setparentnumber] = useState<string>('');
  const [studentnumber, setstudentnumber] = useState<string>('');
  const [studentemailid, setstudentemailid] = useState<string>('');
  const [dno, setdno] = useState<string>('');
  const [street, setstreet] = useState<string>('');
  const [village, setvillage] = useState<string>('');
  const [mandal, setmandal] = useState<string>('');
  const [branch, setbranch] = useState<string>('');
  const [area, setarea] = useState<string>('');
  
  
  
  
  
  const [pincode, setpincode] = useState<string>('');
  
  const[qualifyingexamination,setqualifyingexamination]=useState<string>('')
  const[marks,setmarks]=useState<string>('')
  const [allotmentorder, setAllotmentOrder] = useState<string>('');
  const [rankcard, setrankcard] = useState<string>('');
  const [certificatessc, setcertificatessc] = useState<string>('');
  const [certificateinterorequivalent, setcertificateinterorequivalent] = useState<string>('');
  const [studyconduct, setstudyconduct] = useState<string>('');
  const [transfercertificate,settransfercertificate] = useState<string>('');
  const [castesubmit,setcastesubmit] = useState<string>('');
  const [studentparentaadharcards,setstudentparentaadharcards] = useState<string>('');
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);
  const togglePreviewMode = () => {
    setIsPreviewMode(!isPreviewMode);
  };
  

  
  
  
  
  




  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputRegex = /^[A-Za-z]*$/;
    const inputValue =event.target.value;
    if (inputRegex.test(event.target.value) || event.target.value === '') {
      setStudentName(event.target.value);
    }
  };
  const handleChangeAadharNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const inputRegex = /^[0-9]*$/;
    const inputValue = event.target.value;
    if (inputRegex.test(inputValue) && inputValue.length <= 12) {
      setStudentAadharNumber(inputValue);
    }
  };
  const handleMobileNumber = (event: ChangeEvent<HTMLInputElement>) => {
    const inputRegex = /^[0-9]*$/;
    const inputValue = event.target.value;
    if (inputRegex.test(inputValue) && inputValue.length <= 5) {
      setstudentnumber(inputValue);
    }
  };
  
  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value); 
  };

  
 

  
  
  
  return (
    <div className="bg-color">
      <Container className="form-wrapper">
        <Grid container spacing={1}>
          <Grid item xs={8} sm={8} lg={8} md={5}>
            
            <img src={img} alt="My Image" className='Navigation_image' />
          </Grid>
          <Grid item xs={12} sm={12} lg={16} md={6}>
            <form>
              <Box component="section" sx={{ p: 2, color:'#1d395d' }}>
                <h1 className="centered">I/II B.tech Admission Form-Category-A(Convenor/Spot)</h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <h5>Branch</h5>
                    <TextField fullWidth 
                    select
                    value={branch}
                    onChange={(e)=>{
                       setbranch(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select One</MenuItem>
      <MenuItem value="AIML">AIML</MenuItem>
      <MenuItem value="CE">CE</MenuItem>
      <MenuItem value="CSE">CSE</MenuItem>
      <MenuItem value="CST">CST</MenuItem>
      <MenuItem value="ECE">ECE</MenuItem>
      <MenuItem value="EEE">EEE</MenuItem>
      <MenuItem value="ECT">ECT</MenuItem>
      <MenuItem value="IT">IT</MenuItem>
      <MenuItem value="ME">ME</MenuItem>
      <MenuItem value="CSD">CSD</MenuItem>
      <MenuItem value="CSM">CSM</MenuItem>
      <MenuItem value="CIC">CIC</MenuItem>
      
    </TextField>
     
                    
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <h5>Academic Year</h5>
                    <TextField fullWidth 
                    select
                    value={branch}
                    onChange={(e)=>{
                       setbranch(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select One</MenuItem>
      <MenuItem value="2021">2021</MenuItem>
      <MenuItem value="2022">2022</MenuItem>
      <MenuItem value="2023">2023</MenuItem>
      <MenuItem value="2024">2024</MenuItem>
      <MenuItem value="2025">2025</MenuItem>
      
    </TextField>
     
                  
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <h5>Admission Date</h5>
                    <TextField fullWidth />
                  </Grid>
                </Grid>
              </Box>
                <Box><FileUploadComponent></FileUploadComponent></Box>
              
              
              <Box sx={{ p: 2, color:'#1d395d' }}>
                <h5>STUDENTS PARTICULARS:As per SSC records(PLEASE FILL IN BLOCK LETTERS)</h5>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <h5>Student's Name</h5>
                    <TextField 
                      fullWidth 
                      value={studentName} 
                      onChange={handleChangeName} 
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <h5>Father's/Guardian's Name</h5>
                    <TextField 
                      fullWidth
                      
                      value={fatherName}
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed'}} 
                      
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setfatherName(e.target.value);
                         }
                      }}
                    />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <h5>Occupation</h5>
                    <TextField 
                      fullWidth 
                      value={occupation} 
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setoccupation(e.target.value);
                         }
                      }} 
                    />
      
                    </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                    <h5>Mother's Name</h5>
                    <TextField 
                      fullWidth 
                      value={motherName} 
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setmotherName(e.target.value);
                         }
                      }} 
                    />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <h5>Occupation</h5>
                    <TextField 
                      fullWidth 
                      value={moccupation}
                      
                    
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setmoccupation(e.target.value);
                         }
                      }} 
                    />
                    
                    </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                      <Grid item xs={12} sm={2}>
                      <h5>D.O.B</h5>
                      <TextField ></TextField>

                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <h5>Gender</h5>
                      <TextField fullWidth 
                    select
                    value={gender}
                    onChange={(e)=>{
                       setgender(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="FEMALE">FEMALE</MenuItem>
      <MenuItem value="MALE">MALE</MenuItem>
     
    </TextField>
                      
                    </Grid>
                    <Grid item xs={12} sm={1}>
                      <h5>Blood Group</h5>
                      <TextField fullWidth 
                    select
                    value={bloodgrp}
                    onChange={(e)=>{
                       setbloodgrp(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="A+VE">A+VE</MenuItem>
      <MenuItem value="A-VE">A-VE</MenuItem>
      <MenuItem value="B+VE">B+VE</MenuItem>
      <MenuItem value="AB+VE">AB+VE</MenuItem>
      <MenuItem value="O+VE">O+VE</MenuItem>
      <MenuItem value="O-VE">O-VE</MenuItem>
      <MenuItem value="OTHERS">OTHERS</MenuItem>
     
    </TextField>
                       
       
                      

                    </Grid>

                  <Grid item xs={12} sm={2}>
                    <h5>Nationality</h5>
                    <TextField 
                      fullWidth 
                      value={nationality} 
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setnationality(e.target.value);
                         }
                      }} 
                    />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Religion</h5>
                    <TextField 
                      fullWidth 
                      value={religion} 
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setreligion(e.target.value);
                         }
                      }} 
                    />
                    </Grid>
                    
                    
                    <Grid item xs={12} sm={2}>
                      <h5>Caste</h5>
                      <TextField fullWidth value={caste}  inputProps={{pattern:'^[A-Za-z]*$',title:'Only alphabets allowed'}}
                       onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setcaste(e.target.value);
                         }
                      }} />

                    </Grid>
                    <Grid item xs={12} sm={2}>
                      <h5>Sub-caste</h5>
                      <TextField fullWidth value={subcaste}  inputProps={{pattern:'^[A-Za-z]*$',title:'Only alphabets allowed'}}
                       onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setsubcaste(e.target.value);
                         }
                      }} />


                    </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                  <Grid item xs={12} sm={3}>
                    <h5>Student Aadhar No</h5>
                    <TextField 
              fullWidth 
              value={studentAadharNumber} 
              onChange={handleChangeAadharNumber} 
              inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 12', maxLength: 12 }} 
            />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <h5>Father Aadhar No</h5>
                    <TextField 
              fullWidth 
              value={fatherAadharNumber} 
              
              inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 12', maxLength: 12 }}
              onChange={(e)=>{
                const inputRegex = /^[0-9]*$/;
                 if (inputRegex.test(e.target.value)) {
                   setfatherAadharNumber(e.target.value);
                 }
              }} /> 
               
            
                    
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <h5>Mother Aadhar No</h5>
                    <TextField 
              fullWidth 
              value={motherAadharNumber} 
               
              inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 12', maxLength: 12 }} 
              onChange={(e)=>{
                const inputRegex = /^[0-9]*$/;
                 if (inputRegex.test(e.target.value)) {
                   setmotherAadharNumber(e.target.value);
                 }
              }}
            />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <h5>ABC ID No</h5>
                    <TextField 
              fullWidth 
              value={abcid} 
              
              inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 12', maxLength: 12 }} 
              onChange={(e)=>{
                const inputRegex = /^[0-9]*$/;
                 if (inputRegex.test(e.target.value)) {
                   setabcid(e.target.value);
                 }
              }}
            />
                    
                    </Grid>
                    </Grid>
                    <Box sx={{ p: 2, color:'#1d395d' }}></Box>
                    <h5>ADDRESS FOR COMMUINCATION</h5>
                    <Grid container spacing={1}>
                   
                    <Grid item xs={12} sm={2}>
                    <h5>Student Email-Id</h5>
                    <TextField 
                      fullWidth 
                      value={studentemailid} 
                       
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setstudentemailid(e.target.value);
                         }
                      }} />
                    
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>D.No/H.No</h5>
                    <TextField 
                      fullWidth 
                      value={dno} 
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setdno(e.target.value);
                         }
                      }} />
                    
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Street</h5>
                    <TextField 
                      fullWidth 
                      value={street} 
                     
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setstreet(e.target.value);
                         }
                      }} />
                    
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Village-Town</h5>
                    <TextField 
                      fullWidth 
                      value={village} 
                       
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setvillage(e.target.value);
                         }
                      }} />
                    
                    
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Mandal</h5>
                    <TextField 
                      fullWidth 
                      value={mandal} 
                      
                      inputProps={{ pattern: '^[A-Za-z]*$', title: 'Only alphabets allowed' }} 
                      onChange={(e)=>{
                        const inputRegex = /^[A-Za-z]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setmandal(e.target.value);
                         }
                      }} />

                    
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>District</h5>
                    <TextField fullWidth 
                    select
                    value={selectedOption}
                    onChange={(e)=>{
                       setbloodgrp(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="Alluri Sitarama Raju">Alluri Sitarama Raju</MenuItem>
      <MenuItem value="Anakapalli">Anakapalli</MenuItem>
      <MenuItem value="Ananthapuramu">Ananthapuramu</MenuItem>
      <MenuItem value="Annamayya">Annamayya</MenuItem>
      <MenuItem value="Baptla">Baptla</MenuItem>
      <MenuItem value="Chitoor">Chitoor</MenuItem>
      <MenuItem value="Dr B.R Ambedkar Konaseema">Dr B.R Ambedkar Konaseema</MenuItem>
      <MenuItem value="East Godavari">East Godavari</MenuItem>
      <MenuItem value="Eluru">Eluru</MenuItem>
      <MenuItem value="Guntur">Guntur</MenuItem>
      <MenuItem value="Kakinada">Kakinada</MenuItem>
      <MenuItem value="Krishna">Krishna</MenuItem>
      <MenuItem value="Kurnool">Kurnool</MenuItem>
      <MenuItem value="Nandyal">Nandyal</MenuItem>
      <MenuItem value="N.T.R">N.T.R</MenuItem>
      <MenuItem value="Palnadu">Palnadu</MenuItem>
      <MenuItem value="Parvathipuram Manyam">Parvathipuram Manyam</MenuItem>
      <MenuItem value="Prakasam">Prakasam</MenuItem>
      <MenuItem value="Sri Potti Sriramulu">Sri Potti Sriramulu</MenuItem>
      <MenuItem value="Nellore">Nellore</MenuItem>
      <MenuItem value="Sri Sathya Sai">Sri Satya Sai</MenuItem>
      <MenuItem value="Srikakulam">Srikakulam</MenuItem>
      <MenuItem value="Tirupati">Tirupati</MenuItem>
      <MenuItem value="Visakhapatnam">Visakhapatnam</MenuItem>
      <MenuItem value="Vizianagaram">Vizianagaram</MenuItem>
      <MenuItem value="West Godavari">West Godavari</MenuItem>
      <MenuItem value="Y.S.R">Y.S.R</MenuItem>
     
     
    </TextField>
                   
                    
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>PinCode</h5>
                    <TextField fullWidth 
              value={pincode} 
             
              inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 5', maxLength: 5 }} 
              onChange={(e)=>{
                const inputRegex = /^[0-9]*$/;
                 if (inputRegex.test(e.target.value)) {
                   setpincode(e.target.value);
                 }
              }} />
            
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Parent Mobile No</h5>
                    <TextField fullWidth 
              value={parentnumber} 
              inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 10', maxLength: 10 }} 
              onChange={(e)=>{
                const inputRegex = /^[0-9]*$/;
                 if (inputRegex.test(e.target.value)) {
                   setparentnumber(e.target.value);
                 }
              }} /> 
              
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Student Mobile No</h5>
                    <TextField
                    fullWidth
                    value={studentnumber}
                    inputProps={{ pattern: '^[0-9]*$', title: 'Only numbers allowed, length <= 10', maxLength: 10 }} 
                    onChange={(e)=>{
                        const inputRegex = /^[0-9]*$/;
                         if (inputRegex.test(e.target.value)) {
                           setstudentnumber(e.target.value);
                         }
                      }} />
                       
                    </Grid>
                    <Grid item xs={12} sm={2}>
                    <h5>Area</h5>
                    <TextField fullWidth 
                    select
                    value={area}
                    onChange={(e)=>{
                       setarea(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="LOCAL">LOCAL</MenuItem>
      <MenuItem value="NON-LOCAL">NON-LOCAL</MenuItem>
      </TextField>
                    
                    </Grid>
                    </Grid>
                    <Box sx={{ p: 2, color:'#1d395d' }}></Box>
                    <h5>PARTICULARS OF THE CERTIFICATE SUBMITTED</h5>
                    <div className="container">
                    <div className="dropdown-container">
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                    <h5>Allotment Order,Joining Report</h5>
                    <TextField fullWidth 
                    select
                    value={allotmentorder}
                    onChange={(e)=>{
                       setAllotmentOrder(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
                    
      
      <Grid item xs={12} sm={2}>
      <h5>Rank Card,Hall Ticket(EAPCET/ECET)</h5>
      <TextField fullWidth 
                    select
                    value={rankcard}
                    onChange={(e)=>{
                       setrankcard(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
                    
       
      <Grid item xs={12} sm={2}>
      <h5>SSC Certificate or Equivalent</h5>
      <TextField fullWidth 
                    select
                    value={certificatessc}
                    onChange={(e)=>{
                       setcertificatessc(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
       
      <Grid item xs={11} sm={3}>
      <h5>Certificates of the qualifying examination(Inter/Diploma)</h5>
      <TextField fullWidth 
                    select
                    value={certificateinterorequivalent}
                    onChange={(e)=>{
                       setcertificateinterorequivalent(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      
                     
                      
      </Grid>
      
      

      <Grid item xs={11} sm={3}>
      <h5>Study & Conduct Certificates(Previous 7 years)</h5>
      <TextField fullWidth 
                    select
                    value={studyconduct}
                    onChange={(e)=>{
                       setstudyconduct(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
      </Grid>
      
      
      <Grid container spacing={2}>

      <Grid item xs={12} sm={3}>
       
      
      <h5>Transfer Certificate</h5>
      <TextField fullWidth 
                    select
                    value={transfercertificate}
                    onChange={(e)=>{
                       settransfercertificate(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
      <Grid item xs={12} sm={3}>
       
      <h5>Caste(EWS,BC,SC & ST only)</h5>
      <TextField fullWidth 
                    select
                    value={castesubmit}
                    onChange={(e)=>{
                       setcastesubmit(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
      <Grid item xs={12} sm={3}>
      <h5>Student & Parent, Aadhar Cards</h5>
      <TextField fullWidth 
                    select
                    value={studentparentaadharcards}
                    onChange={(e)=>{
                       setstudentparentaadharcards(e.target.value); 
                    }}
                    label="Select Option"
                   variant="outlined">
    
      <MenuItem value="">Select</MenuItem>
      <MenuItem value="YES">YES</MenuItem>
      <MenuItem value="NO">NO</MenuItem>
      </TextField>
      </Grid>
      </Grid>
      </div>
      </div>

      
                    
                    
                    
                    
                    
                    
                    
                    



                    
                    
                    

                    
                    
              </Box>
              <button type="submit">Submit</button>
              
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
  };
  export default Form;