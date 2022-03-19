import './App.css';

import Header from './components/header';
import Navigation from './components/nav';
import AboutMe from './components/about-me';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';

function App() {
  return ([
  
    <Header></Header>,
    <Navigation></Navigation>,
    <main>
      <AboutMe></AboutMe>
      <Contact></Contact>
      <Resume></Resume>
      <Portfolio></Portfolio>
    </main>,
    <footer>Footer element</footer>
  
  ]);
}

export default App;
