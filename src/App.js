import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav.component';
import Hero from './components/Hero/Hero.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
