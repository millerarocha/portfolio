import './App.css';

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Card from './components/Card/Card';

import projects from './DB/projects'

function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Portfolio
        title='Portfolio'
        id='portfolio'
      >
        {projects.map((item)=>
          <Card
            item={item}
          />
        )}
      </Portfolio>
      <Portfolio
        title='Other Projects'
        id='others'
      >
      
      </Portfolio>  
      <Footer/>
    </div>
  );
}

export default App;
