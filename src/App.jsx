import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
