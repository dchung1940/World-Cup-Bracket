import './Group.css'
import Country from './Country'
import Card from './Card'
import React, { useEffect, useState } from 'react';


function Group(props){    
    let [country_one, country_two, country_three, country_four] = country_logic(props.groupName);

    const [selected,setSelected] = useState([]);

    // 0 is not selected, 1 is first place selected, 2 is second place selected
    const [select_one, setSelect_one] = useState(0); 
    const [select_two, setSelect_two] = useState(0);
    const [select_three, setSelect_three] = useState(0);
    const [select_four, setSelect_four] = useState(0);
    
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(false); // flag to distiguish whether the first place has been chosen




    function clickHandler(country_name){
        if(country_one === country_name){
            if (select_one == 0 && counter < 2)
            {
                if(flag == false){

                    setSelect_one(1); 
                    setFlag(true);
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([country_name,...prevState]) )
                }
                
                else if (flag == true){
    
                    setSelect_one(2); 
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([...prevState,country_name]) )
    
                }
            }
            else if (select_one == 1)
            {
                setSelect_one(0);
                setFlag(false);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
            else if (select_one == 2){
                //when select_one = 2
                setSelect_one(0);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
        }
        else if(country_two === country_name){
            if (select_two == 0 && counter < 2)
            {
                if(flag == false){

                    setSelect_two(1); 
                    setFlag(true);
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([country_name,...prevState]) )
                }
                
                else if (flag == true){
    
                    setSelect_two(2); 
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([...prevState,country_name]) )
    
                }
            }
            else if (select_two == 1)
            {
                setSelect_two(0);
                setFlag(false);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
            else if (select_two == 2){
                //when select_two = 2
                setSelect_two(0);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
        }
        else if(country_three === country_name){
            if (select_three == 0 && counter < 2)
            {
                if(flag == false){

                    setSelect_three(1); 
                    setFlag(true);
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([country_name,...prevState]) )
                }
                
                else if (flag == true){
    
                    setSelect_three(2); 
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([...prevState,country_name]) )
    
                }
            }
            else if (select_three == 1)
            {
                setSelect_three(0);
                setFlag(false);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
            else if (select_three == 2){
                //when select_three = 2
                setSelect_three(0);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
        }
        else if(country_four === country_name){
            if (select_four == 0 && counter < 2)
            {
                if(flag == false){

                    setSelect_four(1); 
                    setFlag(true);
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([country_name,...prevState]) )
                }
                
                else if (flag == true){
    
                    setSelect_four(2); 
                    setCounter(counter+1);
                    setSelected ( (prevState) => ([...prevState,country_name]) )
    
                }
            }
            else if (select_four == 1)
            {
                setSelect_four(0);
                setFlag(false);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
            else if (select_four == 2){
                //when select_four = 2
                setSelect_four(0);
                setCounter((prevState) => {return prevState-1});
                setSelected((prevState) => (prevState.filter(item => item !== country_name)));
            }
        }
    }

    useEffect(() => { //Ask David
        props.addCountries(selected);
    },[selected]);        


    
    return (
        // <div className = {props.className}>
          <div className = {props.className}> 
                <Card className = "groupbox-container">
                    <div className = "groupbox-item-1">
                        <h2>Group {props.groupName}</h2>
                    </div>
                    <div className = "groupbox-item-2">
                        <Country groupName = {props.groupName} countryName = {country_one} selected = {select_one } clickHandler = { () => {clickHandler(country_one)}}></Country>
                        <Country groupName = {props.groupName} countryName = {country_two} selected = {select_two}  clickHandler = { () => {clickHandler(country_two)}}></Country>
                        <Country groupName = {props.groupName} countryName = {country_three} selected = {select_three}  clickHandler = { () => {clickHandler(country_three)}} ></Country>
                        <Country groupName = {props.groupName} countryName = {country_four} selected = {select_four } clickHandler = { () => {clickHandler(country_four)}} ></Country>
                    </div>
                </Card>
                        </div>

            // </div>

    )
}

const country_logic = (groupName) => 
{
    let country_one = "";
    let country_two = "";
    let country_three = "";
    let country_four = "";

    if (groupName == 'A'){
        country_one = "Ecuador";
        country_two = "Netherlands";
        country_three = "Qatar";
        country_four = "Senegal";

    }
    else if (groupName == 'B'){
        country_one = "England";
        country_two = "Iran";
        country_three = "USA";
        country_four = "Wales";

    }
    else if (groupName == 'C'){
        country_one = "Argentina";
        country_two = "Mexico";
        country_three = "Poland";
        country_four = "Saudi Arabia";

    }
    else if (groupName == 'D'){
        country_one = "Australia";
        country_two = "Denmark";
        country_three = "France";
        country_four = "Tunisia";

    }
    else if (groupName == 'E'){
        country_one = "Costa Rica";
        country_two = "Germany";
        country_three = "Japan";
        country_four = "Spain";

    }
    else if (groupName == 'F'){
        country_one = "Belgium";
        country_two = "Canada";
        country_three = "Croatia";
        country_four = "Morocco";

    }
    else if (groupName == 'G'){
        country_one = "Brazil";
        country_two = "Cameroon";
        country_three = "Serbia";
        country_four = "Switzerland";

    }
    else {
        country_one = "Ghana";
        country_two = "Portugal";
        country_three = "South Korea";
        country_four = "Uruguay";
    }
    
    return [country_one, country_two, country_three, country_four];
}


export default Group;