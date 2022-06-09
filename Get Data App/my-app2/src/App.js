
import './App.css';

import React from 'react';
import GetData from './GetData';




class App extends React.Component{
  render(){
    return(
      <div>
        <h3 className='p-3 text-center'>
          Get Data</h3>
        
        <GetData/>
      
        
       
      </div>
    )
  }


}

export default App;
