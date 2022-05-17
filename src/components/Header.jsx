import './styles/App.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

function Header(){
  const aloha = ()  => {
    alert("Never use alert()")
  }
    return (
        <div className="App">
          <h1>
            Simon aka JURET <code><u>ÄLSKAR</u></code> <b>MIN MAMMA.</b>
          </h1>
        <header className="App-header">
        <nav className='Navbar'>
            <ul >
                <li><Link to="/" className='App-link'>Home</Link></li>
                <li><Link to="/betty" className='App-link'>Betty White</Link></li>
                <button onClick={aloha} className='btn'>ALERT</button>
            </ul>
        </nav>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
}

export default Header;