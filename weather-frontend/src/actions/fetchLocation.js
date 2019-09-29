export function fetchLocation() {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/locations')
      .then(resp => resp.json())
      .then(data => console.log(data))
    //   .then(data => dispatch({
    //     type: 'FETCH_LOCATION',
    //     payload: location  
    //   }))
    }
  }
  