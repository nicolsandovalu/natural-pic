import { BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { FavoritesProvider } from './components/FavoritesContext';
import Favorites from './pages/Favorites';

function App() {
  return (
    <div className="App">
      <FavoritesProvider>
      <Router>
        <Nav />
        <AppRoutes />
      </Router>
      </FavoritesProvider>
    </div>
  );
}

export default App;
