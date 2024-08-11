import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Houses from './Offer/Houses/Houses';
import Offices from './Offer/Offices/Offices';
import AfterRenovation from './Offer/AfterRenovation/AfterRenovation';
import Windows from './Offer/Windows/Windows';
import Garages from './Offer/Garages/Garages';
import Outside from './Offer/Outside/Outside';
import Furniture from './Offer/Furniture/Furniture';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/houses" element={<Houses />} />
                <Route path="/offices" element={<Offices />} />
                <Route path="/afterrenovation" element={<AfterRenovation />} />
                <Route path="/windows" element={<Windows />} />
                <Route path="/garages" element={<Garages />} />
                <Route path="/outside" element={<Outside />} />
                <Route path="/furniture" element={<Furniture />} />
            </Routes>
        </Router>
  );
}

export default App;
