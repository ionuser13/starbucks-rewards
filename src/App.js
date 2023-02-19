import './App.css';
import LowerHeader from './components/Header/LowerHeader';
import ExtrasContainer from './containers/ExtrasSection/ExtrasContainer';
import Header from "./containers/Header";
import MainDesktop from "./containers/JoinContainer/MainDesktop";
import StartedSection from './containers/StartedContainer/StartedSection';

function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <section className='present'>
        <MainDesktop />
        <StartedSection />
        <ExtrasContainer />
      </section>
    </div>
  );
}

export default App;
