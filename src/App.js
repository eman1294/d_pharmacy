import Navbar from './components/navbar/Navbar.jsx'
import Header from './components/header/Header.jsx'
import Login from './components/login/Login.jsx'
import Registor from './components/registration/Registor.jsx'
import Footer from './components/footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Login />
      <Registor />
      <Footer />
    </div>
  );
}

export default App;
