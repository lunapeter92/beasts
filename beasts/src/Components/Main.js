import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from '../data/data.json'
import SelectedBeasts from './SelectedBeasts.js';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        selectedBeastTitle: '',
        selectedBeastDescription: '',
        isOpen: false
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

    render(){
        return(
            <div className="main">
             { Data.map((item, idx) => {
                return <HornedBeasts selectBeast={this.renderSelectedBeast} title={item.title} imageUrl={item.image_url} description={item.description} key={idx}/>
              })}

              
                <SelectedBeasts state={this.state.isOpen} close={this.closeModal} title={this.state.selectedBeastTitle} description={this.state.selectedBeastDescription}  />
            
            
           </div>
        )
    }
}

export default Main;