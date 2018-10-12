import React from 'react';
import { withRouter } from 'react-router';
import Masonry from '../masonry/masonry';

class PinsIndex extends React.Component {

  render() {
    return (
      <div className='pinsIndexWrapper'>
        <Masonry />
      </div>
    );
  }
}

export default withRouter(PinsIndex);
