import './App.css';
import LowerHeader from './components/LowerHeader';
import Header from "./containers/Header";
import MainDesktop from "./containers/MainDesktop"

function App() {
  return (
    <div className="App">
      <Header />
      <LowerHeader />
      <section className='present'>
        <MainDesktop />
        <MainDesktop />
      </section>
    </div>
  );
}

export default App;
