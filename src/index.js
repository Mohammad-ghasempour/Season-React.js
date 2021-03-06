import React from "react";
import reactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{


    state ={ latitude: null , errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({latitude: position.coords.latitude})
            },
            err=> {
                this.setState({errorMessage: err.message})
            }
        )    }



    render(){
       
            if (this.state.latitude && !this.state.errorMessage){
                return <SeasonDisplay lat={this.state.latitude} />
            }
             else if (!this.state.latitude && this.state.errorMessage){
                return <div>Error!: {this.state.errorMessage}</div>
            }
     
           else return <Spinner message=" Loading..." />
        
    }
}

reactDom.render(<App />, document.querySelector('#root'));