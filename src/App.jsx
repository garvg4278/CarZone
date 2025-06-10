import './App.css'
import Header from './Header.jsx'

function App() {
  

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="image-container">
          <img 
            src="https://assets.gqindia.com/photos/6644932501e2ecdaa5138025/master/w_1600%2Cc_limit/Bugatti-Divo.jpg" 
            alt="Bugatti Divo"
            className="main-image"
          />
          <div className="image-text">
            <h1>GET YOUR DREAM CAR AT A DREAM PRICE</h1>
            <h2>The largest inventory of cars in Northern India</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
