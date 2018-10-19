import React from 'react';

const Tile = ({src, comment}) => {

  return (
    <div className='pin-wrapper'>
      <div className='tile'>
        <img src={src} />
          <div className='save-btn'>
            <i className="fas fa-thumbtack"></i>
            <p>Save</p>
          </div>
        <div className='tile-comment'>
          <span>{comment}</span>
        </div>
      </div>
    </div>
  );
};

export default Tile;
