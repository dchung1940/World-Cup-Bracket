import "./Country.css"

function Country(props){

    let path = '/WorldCupImages_2/' + props.countryName +'.png';

    return(
        <div className = "countrybox-container">
            <div className = "countrybox-item-1"><img  src= {process.env.PUBLIC_URL + path} alt={props.countryName}/></div>
            <div className = "countrybox-item-2">{props.countryName}</div>
        </div>
    )
}

export default Country;