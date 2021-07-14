import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../horned-beast.css';

class HornedBeasts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            timesClicked: 0
        }

    }

    selectBeast = () => {
        this.props.selectBeast(this.props.title, this.props.description)
    }

    favoritedImage = () => {
        this.setState({timesClicked: this.state.timesClicked + 1})
    }

    render(){
        return(
            <Card style={{width: '18rem'}} className="card">
                <Card.Img variant="top" onClick={this.selectBeast}  src={this.props.imageUrl} width="100%" />
                <Card.Body>
                    <Card.Title className="card-title">{this.props.title}</Card.Title>
                    <Card.Text>{this.props.description}</Card.Text>
                    <Button variant="primary" onClick={this.favoritedImage}>Like: {this.state.timesClicked}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;