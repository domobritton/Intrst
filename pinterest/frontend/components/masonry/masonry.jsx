import React from 'react';
import MasonryGrid from './masonry_grid';
import Tile from './masonry_grid_item';

class Masonry extends React.PureComponent{
	render(){
    let breakPoints = [350, 500, 750];
    let images = [];

    for(let i = 0; i < 20; i++){
      let randomNum = Math.floor(Math.random() * 1000);
      images.push('https://source.unsplash.com/random?' + `sig=${randomNum}`);
    }

		return (
			<div className='container'>
				<div id='masonry-container' className='masonry-container'>
					<MasonryGrid breakPoints={breakPoints}>
						{images.map((image, id) => {
							return (
								<Tile src={image} />
							);
						})}
					</MasonryGrid>
				</div>
			</div>
		);
	}
}

export default Masonry;
