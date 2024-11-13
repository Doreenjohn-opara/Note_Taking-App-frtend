import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './pages/authPage';
import AddNote from './pages/AddNotes';
import EditNote from './pages/EditNotes';
import ViewNote from './pages/ViewNotes';
import Dashboard from './pages/Dashboard';


const App: React.FC = () => {

  return (
    <>
      {/* <Dashboard /> */}
      <Router>
      <div className="app">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} /> 
          <Route path="/view-note/:id" element={<ViewNote />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App;
