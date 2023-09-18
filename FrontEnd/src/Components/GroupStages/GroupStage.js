import "./GroupStage.css";
import Group from "./Group";
import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';

function GroupStage (props){

    // const navigate = useNavigate();
    
    const group = [
        { name: "A" },
        { name: "B" },
        { name: "C" },
        { name: "D" },
        { name: "E" },
        { name: "F" },
        { name: "G" },
        { name: "H" }
      ];


    function addCountries (selected, group_name) {
        props.addgroup(group_name,selected);
    }
    

    return (
        <div>
            <div className = "button-container">
                <div className = "groupstage-container">
                    {group.map((data, idx)=>( // Is it okay to set key as an index? Or shoudl this be different?
                    <Group key = {idx} groupName = {data.name} className = "groupstage-item" addCountries = {(selected) => {addCountries(selected,data.name)}}></Group>
                    ))}
                    {/* <Group groupName = "A" className = "groupstage-item" addCountries = {(selected) => {addCountries(selected,"A")}}></Group> */}
                </div>
                <button onClick = {() => {props.buttonClicked()}}>Click Me</button>
            </div>
            {props.error}
        </div>
    )

}

export default GroupStage;