import React from 'react';

class WeeklyForm extends React.Component {

    state = {
        city: "",
        country: ""
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value  
        })
      } 

    render(){
    return (
        <form onSubmit={(e)=>this.props.submitHandler(e,this.state)}>
            <input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange}/>
            <input type ="text" name="country" placeholder="Country" value={this.state.country} onChange={this.handleChange}/>
            <input type="submit" value="submit"/>
        </form>
    )
    }
}
export default WeeklyForm;