import React from 'react';
import MasonryGrid from './masonry_grid';
import Tile from './masonry_grid_item';

class Masonry extends React.Component{
	render(){
    let breakPoints = [350, 500, 750];
    let images = [];
    const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643, 633, 231, 1113, 954, 634, 890, 431, 901];
    for(let i = 0; i < imgId.length; i++){
      const ih = 200 + Math.floor(Math.random()*10)*15;
      images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
    }
		return (
			<div className="container">
				<div className="masonry-container">
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
