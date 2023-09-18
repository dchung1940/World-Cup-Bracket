import "./CountryBlock.css"
import Country from "./Country"

function CountryBlock(props) {

    let country1 = props.country_1;
    let country2 = props.country_2;

    return (
        <div className = "countryBlock-box">
            <div onClick = {() => {props.clickHandler(country1)}}>
                <Country className = "countryBlock-item-1" countryName = {country1}></Country>
            </div>
            <div onClick = {() => {props.clickHandler(country2)}}>
            <Country className = "countryBlock-item-2" countryName = {country2}></Country>
            </div>
        </div>
    )
}

export default CountryBlock;