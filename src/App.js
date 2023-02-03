import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Edit from './Component/Edit';
import Table from './Component/Table';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Addstudent from './Component/Addstudent';

function App() {
  
  return (
    <>
<Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/editStudent' element={
      
    <Edit/>
   
    }>
    </Route>
      <Route path='/table' element={
        
            <Table />
        
      }/>
     
    <Route path='/addStudent' element={
       
          <Addstudent/>
      
      }/>
    </Routes>
    </>
  );
}

export default App;