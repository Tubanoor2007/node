import Logo from "./asset/imag.jfif"
import './App.css';
import Header from "./compunect/header.js";


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <image src={Logo}></image>
      </div>
    </>

  );
}

export default App;
