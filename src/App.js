import './App.css';
import LowerHeader from './components/Header/LowerHeader';
import Header from "./containers/Header";
import MainDesktop from "./containers/JoinContainer/MainDesktop"

function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <section className='present'>
        <MainDesktop />
      </section>
    </div>
  );
}

export default App;
