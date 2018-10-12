import React from 'react';

class Tile extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps === this.props) {
      return false;
    }
    return true;
  }

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
