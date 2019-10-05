export function fetchLocations() {
    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/locations')
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        return resp 
    })
      .then(data => dispatch({
        type: 'FETCH_LOCATIONS',
        payload: data  
      }))
    }
  }
  