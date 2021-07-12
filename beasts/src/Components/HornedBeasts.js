import React from 'react';

class HornedBeasts extends React.Component {
    render(){
        return(
            <div className="horned-beast">
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl}></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;