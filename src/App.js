import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex justify-center ">
        <img src={logo} className=" h-15 w-12" alt="logo" />
        <p className="text-black">
          Touch of Class Events
        </p>
        <a

          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        UrMom.com
        </a>
    </div>
  );
}

export default App;
