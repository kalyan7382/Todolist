import React from 'react'
import Form from './Form';
import MultiStepForm from './MultiStepForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Form />} />
        
        <Route exact path="/MultiStepForm" element={<MultiStepForm />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
