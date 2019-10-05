import React from 'react'
import { fetchLocations } from '../actions/fetchLocations'
import {connect} from 'react-redux'

class Index extends React.Component {
// const Index = (props) => {
    componentDidMount() {
        this.props.fetchLocations()
      }
    
    render() {
        debugger;
    return (
        <div>
            <h1>Saved Locations</h1>
        {this.props.locations.map(location => 
        <li key={location.id}>
        {location.city}, {location.country}
        </li>)}
        </div>
    )
}
}


function mapStateToProps(state) {
   return {locations: state.locations} 
}

export default connect(mapStateToProps, {fetchLocations})(Index) 


