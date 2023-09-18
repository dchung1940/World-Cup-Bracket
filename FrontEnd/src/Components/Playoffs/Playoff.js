import "./Playoff.css"
import CountryBlock from "./CountryBlock"
import {useLocation} from 'react-router-dom';
import {useState} from 'react';


function Playoff(props){
    const groups = useLocation().state;

    const [quarterfinal_1,setQuarterfinal_1] = useState("-");
    const [quarterfinal_2,setQuarterfinal_2] = useState("-");
    const [quarterfinal_3,setQuarterfinal_3] = useState("-");
    const [quarterfinal_4,setQuarterfinal_4] = useState("-");
    const [quarterfinal_5,setQuarterfinal_5] = useState("-");
    const [quarterfinal_6,setQuarterfinal_6] = useState("-");
    const [quarterfinal_7,setQuarterfinal_7] = useState("-");
    const [quarterfinal_8,setQuarterfinal_8] = useState("-");

    const [semifinal_1,setSemifinal_1] = useState("-");
    const [semifinal_2,setSemifinal_2] = useState("-");
    const [semifinal_3,setSemifinal_3] = useState("-");
    const [semifinal_4,setSemifinal_4] = useState("-");

    const [final_1,setFinal_1] = useState("-");
    const [final_2,setFinal_2] = useState("-");

    function clickHandler1(country){
        setQuarterfinal_1(country);
    }

    function clickHandler2(country){
        setQuarterfinal_2(country);
    }
    
    function clickHandler3(country){
        setQuarterfinal_3(country);
    }

    function clickHandler4(country){
        setQuarterfinal_4(country);
    }

    function clickHandler5(country){
        setQuarterfinal_5(country);
    }

    function clickHandler6(country){
        setQuarterfinal_6(country);
    }

    function clickHandler7(country){
        setQuarterfinal_7(country);
    }

    function clickHandler8(country){
        setQuarterfinal_8(country);
    }


    function clickHandler9(country){
        setSemifinal_1(country);
    }

    function clickHandler10(country){
        setSemifinal_2(country);
    }

    function clickHandler11(country){
        setSemifinal_3(country);
    }

    function clickHandler12(country){
        setSemifinal_4(country);
    }


    function clickHandler13(country){
        setFinal_1(country);
    }

    function clickHandler14(country){
        setFinal_2(country);
    }


    return (
        // <h1>{props.Countries["group1"]}</h1>
        <div className = "playoff-sixth-box">
            <div className = "playoff-fifth-box">
                <div className = "playoff-fourth-box">
                    <div className = "playoff-third-box">
                        <div className = "playoff-second-box">
                            <div className = "playoff-first-box">
                                <CountryBlock country_1 = {groups["A"][0]} country_2 = {groups["B"][1]} clickHandler = {clickHandler1}></CountryBlock>
                                <CountryBlock country_1 = {groups["C"][0]} country_2 = {groups["D"][1]} clickHandler = {clickHandler2}></CountryBlock>
                            </div>

                                <CountryBlock country_1 = {quarterfinal_1} country_2 = {quarterfinal_2} clickHandler = {clickHandler9}></CountryBlock>
                        </div>

                        <div className = "playoff-second-box">
                            <div className = "playoff-first-box">
                                <CountryBlock country_1 = {groups["E"][0]} country_2 = {groups["F"][1]} clickHandler = {clickHandler3}></CountryBlock>
                                <CountryBlock country_1 = {groups["G"][0]} country_2 = {groups["H"][1]} clickHandler = {clickHandler4}></CountryBlock>
                            </div>
                            {console.log(quarterfinal_3)}
                            <CountryBlock country_1 = {quarterfinal_3} country_2 = {quarterfinal_4} clickHandler = {clickHandler10}></CountryBlock>
                        </div>
                    </div>
                    
                    <CountryBlock country_1 = {semifinal_1} country_2 = {semifinal_2} clickHandler = {clickHandler13}></CountryBlock>
                </div>

                <div className = "playoff-fourth-box">
                    <div className = "playoff-third-box">
                        <div className = "playoff-second-box">
                            <div className = "playoff-first-box">
                                <CountryBlock country_1 = {groups["B"][0]} country_2 = {groups["A"][1]} clickHandler = {clickHandler5}></CountryBlock>
                                <CountryBlock country_1 = {groups["D"][0]} country_2 = {groups["C"][1]} clickHandler = {clickHandler6}></CountryBlock>
                            </div>
                            <CountryBlock country_1 = {quarterfinal_5} country_2 = {quarterfinal_6} clickHandler = {clickHandler11}></CountryBlock>
                        </div>

                        <div className = "playoff-second-box">
                            <div className = "playoff-first-box">
                                <CountryBlock country_1 = {groups["F"][0]} country_2 = {groups["E"][1]} clickHandler = {clickHandler7}></CountryBlock>
                                <CountryBlock country_1 = {groups["H"][0]} country_2 = {groups["G"][1]} clickHandler = {clickHandler8}></CountryBlock>
                            </div>
                            <CountryBlock country_1 = {quarterfinal_7} country_2 = {quarterfinal_8} clickHandler = {clickHandler12}></CountryBlock>
                        </div>
                    </div>
                    <CountryBlock country_1 = {semifinal_3} country_2 = {semifinal_4} clickHandler = {clickHandler14}></CountryBlock>
                </div>
            </div>
            <CountryBlock country_1 = {final_1} country_2 = {final_2}></CountryBlock>
        </div>
    ) 
}

export default Playoff;