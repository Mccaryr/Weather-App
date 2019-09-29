export const addLocation = data => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/locations', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json' 
            }, 
            method: 'POST', 
            body: JSON.stringify(data)   
        })
        .then(resp => resp.json())
        .then(location => dispatch({type: 'ADD_LOCATION', payload: location }))
    }
}