import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import SeriesList from "./components/seriesList/SeriesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SeriesList />
      <Footer />
    </div>
  );
}

export default App;
