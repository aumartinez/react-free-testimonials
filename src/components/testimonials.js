import React from 'react';
import '../css/testimonials.css';

class Testimony extends React.Component {
  render() {
    return (
      <div className='testimony-wrapper'>
        <img 
        src={require(`../${this.props.img}`)}
        className='testimony-img' 
        alt={this.props.name + ' pic'} />
  
        <div className='testimony-content-wrapper'>
          <p className='testimony-name'>
            <span>{this.props.name}</span> in {this.props.country}
          </p>
          <p className='testimony-position'>
            {this.props.position} at <span>{this.props.company}</span>
          </p>
          <p className='testimony-quote'>
            "{this.props.quote}"
          </p>
        </div>
      </div>
    );
  }
}

export default Testimony;