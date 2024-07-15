
import About from './About';
import './App.css';
import Contact from './contact';
import Header from './Header';
import ImageEditor from './ImageEditor';
import Progress from './progress';
import Tracker from './Tracker';
import VoiceText from './VoiceText';
import WeatherApp from './WeatherApp';


function App() {
  return (
    <div className="container">
      <Header />
      <About/>
      <section className="projects">
      <h1 className="prohead">Selected Projects</h1>
        <WeatherApp />
        <ImageEditor />
        <VoiceText />
        <Tracker />
        <Progress/>
        <Contact />
      </section>
    </div>
  );
}

export default App;

