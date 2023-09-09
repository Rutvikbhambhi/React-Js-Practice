import React from 'react';
import Employee from './Components/Employee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
