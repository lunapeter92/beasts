import React from 'react';
import HornedBeasts from './HornedBeasts';
import Data from '../data/data.json'


class Main extends React.Component{
    render(){
        return(
            <div className="main">
             { Data.map((item, idx) => {
                return <HornedBeasts title={item.title} imageUrl={item.image_url} description={item.description} key={idx}/>
              })}


            
           </div>
        )
    }
}

export default Main;