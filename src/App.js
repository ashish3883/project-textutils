import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textarea from './components/Textform';

function App() {
  return (
    <>
    <Navbar title='TextUtil' aboutText='About Us' Home='Our Home'/>
    <div className="container my-3" >
    <Textarea title='Enter Text Here'/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
