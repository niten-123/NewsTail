import {  Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from 'react-top-loading-bar'
;
import { useState } from "react";

const App=()=> {
  const [progress,setProgress]=useState(0)

  const setprogress=(progress)=>{
    setProgress(progress)
  }

  return (
    <>
    <div>
   <BrowserRouter>
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
    <Routes>
<Route exact path="/general" element={<News  setprogress={setprogress} key="general" pagesize={5}  country="in"catogary="general"/>}/>
<Route exact path="/business" element={<News  setprogress={setprogress} key="business" pagesize={5} country="in"  catogary="business" />}/>
<Route exact path="/technology" element={<News  setprogress={setprogress} key="technology" pagesize={5} country="in" catogary="technology"/>}/>
<Route exact path="/sport" element={<News  setprogress={setprogress} key="sport" pagesize={5} country="in"  catogary="sports" />}/>
<Route exact path="/science" element={<News  setprogress={setprogress} key="science" pagesize={5} country="in" catogary="science" />}/>
<Route exact path="/entertainment" element={<News  setprogress={setprogress} key="entertainment" pagesize={5} country="in"  catogary="entertainment"/>}/>
<Route exact path="/health" element={<News  setprogress={setprogress} key="health" pagesize={5} country="in"  catogary="health"/>}/>
 </Routes>
 </BrowserRouter>
    </div>
    </>
  );
}


export default App;
