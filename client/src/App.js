import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
    <div className='app'>
        <Navbar />
        <Header/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
