/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Dashboard from './Components/Dashboard.jsx'
import Courses from './Components/Courses.jsx'
import Notes from './Components/Notes.jsx'
import PDFs from './Components/PDFs.jsx'

const Index = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} /> {/* Route for Courses */}
      <Route path="/notes" element={<Notes />} />     {/* Route for Notes */}
      <Route path="/pdfs" element={<PDFs/>} />       {/* Route for PDFs */}
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
