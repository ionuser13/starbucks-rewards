import './App.css';
import Header from "./containers/Header";
import MainDesktop from "./containers/MainDesktop"

function App() {
  return (
    <div className="App">
      <Header />
      <section className='present'>
        <MainDesktop />
      </section>
    </div>
  );
}

export default App;
