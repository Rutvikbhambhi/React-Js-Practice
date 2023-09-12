import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Employee from './Components/Employee';
import EmpCreate from './EmpCreate';
import EmpDetails from './Components/EmpDetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />} />
          <Route path='/employee/create' element={<EmpCreate />} />
          <Route path='/employee/detail/:empid' element={<EmpDetails />} />
          <Route path='/employee/edit/:empid' element={<EmpDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
