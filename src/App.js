import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import "./index.css";

function App() {
  return (
    <div>
   <Navbar/>
   <div className='flex'>
    <Sidebar/>
    Video render here...
   </div>
   
    </div>
  );
}

export default App;
