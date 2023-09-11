import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Nav from './components/Nav/Nav.component';
import Hero from './components/Hero/Hero.component';
import Album from './components/Album/Album.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
        <Album />
      </main>
    </div>
  );
}

export default App;
