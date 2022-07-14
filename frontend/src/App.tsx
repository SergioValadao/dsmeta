import NotificationButton from "./components/NotificationButton"
import icon from '../src/assets/img/notification-icon.svg'
import Header from "./components/Header"
import './components/Header/styles.css'

function App() {
  return(
    <>
      <Header />
      <div className="btn">
          <div className="div-btn">
            <img src={icon} alt="vector.svg"/>          
          </div>
      </div>
      
    </>
  )

}
export default App
