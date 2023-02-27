import LowerHeader from './components/Header/LowerHeader';
import ExtrasContainer from './containers/ExtrasSection/ExtrasContainer';
import Header from "./containers/Header";
import MainDesktop from "./containers/JoinContainer/MainDesktop";
import StartedSection from './containers/StartedContainer/StartedSection';
import CashContainer from './containers/CashContainer/CashContainer';
import QuestionContainer from './containers/QuestionsContainer/QuestionContainer';
import './App.css';
import StarTermsContainer from './containers/StarTermsContainer/StarTermsContainer';
import Footer from "./containers/Footer.jsx"
import MainMobile from './containers/JoinContainer/MainMobile';



function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <section className='present'>
        <div className='mb-[72px] md:mb-[128px]'>
          <MainDesktop />
          <MainMobile />
        </div>
        <StartedSection />
        <ExtrasContainer />
        <CashContainer />
        <QuestionContainer />
        <StarTermsContainer />
        <Footer />
      </section>
    </div>
  );
}

export default App;
