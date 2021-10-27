import Header from './Components/Header'
import Footer from './Components/Footer'
import Ex from './Components/Ex'
import './bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className='py-3'> 
        <Ex/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
