import { useState } from 'react';
import './App.css';
// import Sidebar from './Sidebar';
import YTSidebar from './YTSidebar';


function App() {

  const [sidebar,setSidebar] = useState(false)
  console.log(sidebar)
  const toggle = (()=>{
    
    setSidebar(!sidebar)
  })

  return (
    <div className="App">
      {/* <Sidebar sidebarToggle={toggle} sidebar={sidebar}/> */}
      <YTSidebar />
    </div>
  );
}

export default App;
