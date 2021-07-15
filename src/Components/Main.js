import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from '../data/data.json'
import SelectedBeasts from './SelectedBeasts.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Main.css';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        selectedBeastTitle: '',
        selectedBeastDescription: '',
        isOpen: false,
        selectedValue: '',
        filter: []
        }
    }

    renderSelectedBeast = (beastTitle, beastDescription) => {
        this.setState({selectedBeastTitle: beastTitle, selectedBeastDescription: beastDescription, isOpen: true});
        
    }

    openModal = () => {
        this.setState({isOpen: true});
    }

    closeModal = () => {
        this.setState({isOpen: false});
    }

    handleChange = (e) =>{
        e.preventDefault();
        let value = e.target.value;
        this.setState({selectedValue: e.target.value});
        console.log(this.state.selectedValue);
    }

    filterBeasts = (e) => {
        e.preventDefault();
        if(this.state.selectedValue !== 'Select'){
            let select = this.state.selectedValue;
        
            let filter = Data.filter(item => {
                console.log(item.horns, parseInt(select))
                if(item.horns === parseInt(select)){
                    return item;

                }
                
            })
            

           console.log(filter)
            this.setState({filter: filter});
        }
        
    }

    render(){
        
        return(
            <div className="main">

                <Form onSubmit={this.filterBeasts}>
                    <Form.Group>
                        <Form.Label>Filter Beasts by Number of Horns</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange}>
                            <option value="Select">Select</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={100}>One Hundred</option>
                        </Form.Control>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
           
           

             { this.state.filter.length !== 0 ? this.state.filter.map((item, idx) => {
                return <HornedBeasts selectBeast={this.renderSelectedBeast} title={item.title} imageUrl={item.image_url} description={item.description} key={idx}/>
              })
              : Data.map((item, idx) => {
                return <HornedBeasts selectBeast={this.renderSelectedBeast} title={item.title} imageUrl={item.image_url} description={item.description} key={idx}/>
              })
            }

              
            <SelectedBeasts state={this.state.isOpen} close={this.closeModal} title={this.state.selectedBeastTitle} description={this.state.selectedBeastDescription}  />
            
            
           </div>
        )
    }
}

export default Main;