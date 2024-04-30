import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './Component/LandingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<LandingPage/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
