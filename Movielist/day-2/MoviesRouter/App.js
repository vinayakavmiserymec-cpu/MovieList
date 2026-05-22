import './App.css'
import { MoviesList } from './components/MoviesList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieForm } from './components/MovieForm';

function App() {
  
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movies/:id" element={<MovieForm />} />
      </Routes>
    </BrowserRouter>
  
}

export default App;
