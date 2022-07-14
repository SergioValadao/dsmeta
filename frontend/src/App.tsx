import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
import './components/Header/styles.css'
import '../src/index.css'

import SalesCard from "./components/SalesCard"

function App() {
  return(
    <>
      <Header />
      <main>
        <section id="sales">
            <div className="dsmeta-Container">
              <SalesCard />
            </div>
        </section>
      </main>
    </>
  )

}
export default App
