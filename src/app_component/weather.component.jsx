import React from 'react';

const Weather = (props) => {
  return (
    <div className="container">
      <div className="cards pt-4">
            <h1>{props.city}</h1>
          <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`}/>
          </h5>
        
            {props.temp_celsius ? (<h1 className="py-2">{props.temp_celsius}&deg;</h1>) : null}
            {/** To show min and max temp */}

              {minmaxTemp(props.temp_min, props.temp_max)}

            <h4 className="py-3">{props.description}</h4>
        </div>
    </div>
  );
};


function minmaxTemp(min,max){
  if(min && max) {
  return(
    <h3>
      <sapn className="px-4">{min}&deg;</sapn>
      <sapn className="px-4">{max}&deg;</sapn>
    </h3>
  );
  }
}

export default Weather;
