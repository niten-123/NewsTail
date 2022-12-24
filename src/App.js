import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import News from "./Component/News";

;

function App() {
  return (
    <>
    <div>
   <BrowserRouter>

    <Navbar/>
   
    <Routes>

<Route exact path="/general" element={<News key="general" pagesize={5}  country="in" catogary="general" bgcolor="primary"/>}/>
<Route exact path="/business" element={<News key="business" pagesize={5} country="in" catogary="business" bgcolor="info"/>}/>
<Route exact path="/technology" element={<News key="technology" pagesize={5} country="in" catogary="technology" bgcolor="light"/>}/>
<Route exact path="/sport" element={<News key="sport" pagesize={5} country="in" catogary="sport" bgcolor="danger"/>}/>
<Route exact path="/science" element={<News key="science" pagesize={5} country="in" catogary="science" bgcolor="success"/>}/>
<Route exact path="/entertainment" element={<News key="entertainment" pagesize={5} country="in" catogary="entertainment" bgcolor="warning"/>}/>


    </Routes>

    
    
    </BrowserRouter>
    </div>
    </>
  );
}


export default App;
