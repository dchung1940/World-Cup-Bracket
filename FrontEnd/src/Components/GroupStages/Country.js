import './Country.css'


function Country(props) {

  let path = '/WorldCupImages/Group' + props.groupName + '/' + props.countryName +'.png'

  let name = "";

  if (props.selected === 0)
  {
    name = "";
  }
  else if (props.selected === 1)
  {
    name = "first";
  }
  else{
    name = "second";
  }

//Ask David about this issue regarding all css components being called?
//All the css files are combined during compilation. Therefore, it doesn't matter if the files are different. Need to use different classnames for CSS.

  return (
    <div className = {"countrybox-container_ " + name} onClick = {props.clickHandler}>
      <div className = "countrybox-item-1"><img  src= {process.env.PUBLIC_URL + path} alt={props.countryName}/></div>
      <div className = "countrybox-item-2">{props.countryName}</div>
    </div>
  );
}
export default Country;
