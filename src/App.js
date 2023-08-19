import './App.css';
import GroupStage from './Components/GroupStages/GroupStage'
import Playoff from './Components/Playoffs/Playoff'
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import {Route, Routes} from "react-router-dom"


function App() {

  const [groups,setGroups] = useState({  
  "A": ["-","-"], "B":["-", "-"], 
  "C":["-", "-"], "D":["-", "-"], 
  "E":["-", "-"], "F":["-", "-"], 
  "G":["-", "-"], "H":["-", "-"]
});

  const [tempGroups,setTempGroups] = useState();

  const [error,setError] = useState(<div></div>); // Is it possible to add in the render an empty value? Yes. You can input null and it will output nothing

  function addgroup (groupname, countries) {
    setTempGroups((prevState) => ({...prevState, [groupname]:countries}));
  }

  function buttonClicked (){
      console.log(tempGroups)
      let flag = true;
      for (let key in tempGroups){
        let value = tempGroups[key];
        if(value.length < 2)
        {
          flag = false;
        }
    }
    if (flag){
      setGroups(tempGroups);
      setError(<div></div>);

    }
    else{
      setError(<div className = "errorMessage">Please Complete Selecting Countries</div>);

    }
  }

  function redirect (pathname) {

    if(pathname === "/")
    {
      return <Home />
    }
    else if(pathname === "/Groupstages")
    {
      return <GroupStage addgroup = {addgroup} buttonClicked = {buttonClicked} error = {error}></GroupStage>

    }
    else{
      return <Playoff Countries = {groups}></Playoff>
    }
  
  }
  let component = redirect(window.location.pathname);

  return (
    <div className="App">

      <Navbar groups = {groups}></Navbar>
      {/* {component} */}
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/Groupstages" element = {<GroupStage addgroup = {addgroup} buttonClicked = {buttonClicked} error = {error}></GroupStage>} />
        <Route path = "/Playoffs" element = {<Playoff Countries = {groups}></Playoff>} />
      </Routes>
    </div>
  );
}

export default App;
