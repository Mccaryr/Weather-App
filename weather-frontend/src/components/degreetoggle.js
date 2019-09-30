import React from 'react'

const DegreeToggle = (props) => {

    return(
        <div>
          <p>Temp in Celsius: {Math.round((props.tomorrowsTemp - 32) *0.55)}°C</p>  
        </div>
    )
}

export default DegreeToggle 