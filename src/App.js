import './App.css';
import LowerHeader from './components/Header/LowerHeader';
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
      </section>
    </div>
  );
}

export default App;
