import React, {Fragment} from 'react';
import MasonryGrid from '../masonry/masonry_grid';
import Tile from '../masonry/masonry_grid_item';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      pins: []
    };

    window.onscroll = () => {
      const {
        loadPins,
        state: {
          hasMore,
          pins
        },
      } = this;

      if (!hasMore) return;

      if (
        window.innerHeight + document.documentElement.scrollTop
        >= document.documentElement.offsetHeight
      ) {
        this.loadPins();
      }
    };
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.pins !== this.props.pins) {
      this.setState({ pins: nextProps.pins });
    }
  }

  componentWillUnmount() {
    this.setState({hasMore: true, pins: []});
  }

  loadPins () {
    let randomNum = Math.floor(Math.random() * 1000);
    let nextPin = `https://source.unsplash.com/random?sig=${randomNum}`;
    this.setState({
      hasMore: (this.state.pins.length < 1000),
      pins: [...this.state.pins, nextPin],
    });
  }

  render() {
    const { hasMore, pins } = this.state;
    let breakPoints = [350, 500, 1150];
    return (
      <div>
        <div id='pinsIndexWrapper'>
          <div id='masonry-container' className='masonry-container'>
            <MasonryGrid breakPoints={breakPoints}>
              {pins.map((image, id) => {
                 return image !== undefined ?
                (
                  <Tile key={id} src={image} />
                ) : '';
              })}
            </MasonryGrid>
          </div>
        </div>
      </div>
    );
  }
}

export default PinsIndex;
