import React from 'react';
import './App.css';
import Testimony from './components/testimonials.js'
import Seed from './assets/seed'

class App extends React.Component {  
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <h1>
            Here is what our alumni say about freeCodeCamp:
          </h1>
          {
            Seed.map((item, idx) => {
              return (
                <Testimony 
                key = {idx}
                name = {item.name}
                country = {item.country}
                img= {item.img}
                position = {item.position}
                company = {item.company}
                quote = {item.quote()}
                />
              )
            })
          }
        </div>      
      </div>
    );
  }
}

export default App;