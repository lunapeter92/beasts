import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component{
    render(){
        return(
            <div className="main">
            <HornedBeasts title="Mike W" imageUrl="https://www.publicdomainpictures.net/pictures/270000/velka/monster-with-one-eye.jpg" description="Crazy Mike" />
            <HornedBeasts title="Sully" imageUrl="https://cdn.pixabay.com/photo/2016/01/10/14/14/monster-1131847_960_720.png" description="Funny Sully" />
            <HornedBeasts title="Dwight" imageUrl="https://cdn.pixabay.com/photo/2016/03/22/17/28/transparent-background-1273346_960_720.png" description="Creepy Dwight" />
           </div>
        )
    }
}

export default Main;