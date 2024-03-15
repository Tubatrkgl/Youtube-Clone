import './App.css';
import Feed from './components/feed/Feed';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import "./index.css";

function App() {
  return (
    <div>
   <Navbar/>
   <div className='flex mt-10'>
    <Sidebar/>
    {/* Video render here... */}
    <Feed/>
   </div>
   
    </div>
  );
}

export default App;
