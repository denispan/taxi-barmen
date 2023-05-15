import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Form />
        <Map />
      </main>
    </div>
  );
}

export default App;
