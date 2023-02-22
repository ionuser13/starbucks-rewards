import LowerHeader from './components/Header/LowerHeader';
import ExtrasContainer from './containers/ExtrasSection/ExtrasContainer';
import Header from "./containers/Header";
import MainDesktop from "./containers/JoinContainer/MainDesktop";
import StartedSection from './containers/StartedContainer/StartedSection';
import CashContainer from './containers/CashContainer/CashContainer';
import StarCodesContainer from './containers/StarCodesContainer/StarCodesContainer';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <section className='present'>
        <MainDesktop />
        <StartedSection />
        <ExtrasContainer />
        <CashContainer />
        <StarCodesContainer />
      </section>
    </div>
  );
}

export default App;
