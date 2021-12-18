import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Show from './pages/Show';
import Episode from './pages/Episode';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Show} exact />
          <Route
            path="/Episode/:id"
            component={Episode}
            key={document.location.href}
          />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
