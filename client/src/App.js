import './App.css';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        {/* <Router>
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/about"} element={<About/>} />
          </Routes>
        </Router> */}
      </header>
    </div>
  );
}

export default App;
