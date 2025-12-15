import './App.css'
import info from './assets/data.json'
import Card from './Card.jsx'
import Navbar from './Navbar.jsx'
function App() {
  console.log("loading data now");
  var  data=JSON.parse(JSON.stringify(info));
  console.log("data loaded");
  return (
    <>
      <Navbar />
      {info.map((element, index)=>(
        <Card key = {index} element={element} />
      ))}
    </>
  )
}

export default App;
