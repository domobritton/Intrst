import React from 'react';

class Tile extends React.Component {

  render() {
    const {src} = this.props;
    return (
      <div className='tile'>
        <img src={src} />
      </div>
    );
  }
}

export default Tile;
