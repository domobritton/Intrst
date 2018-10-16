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
        >= document.documentElement.offsetHeight - 1000
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
    let breakPoints = [500, 700, 1150];
    return (
      <div>
        <div id='pinsIndexWrapper'>
          <div className='feed-masonry-container'>
            <MasonryGrid breakPoints={breakPoints}>

              {pins.map((pin, id) => {
                 return pin.imageUrl !== undefined ?
                (
                  <div
                    className='pin-show'
                    onClick={
                        () => this.props.history.push(`/pin/${pin.id}`)}>
                    <div className='show-modal'>
                      <div
                        className='pin-save'
                        onClick={(e) => {e.preventDefault(); this.props.openModal({modal: 'SavePin', pin: pin});}}>
                        <div>
                          <Tile key={id} src={pin.imageUrl} comment={pin.comment} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) :
                <div
                  className='pin-show'
                  onClick={
                      () => this.props.history.push(`/pin/${id}`)}>
                  <div className='show-modal'>
                    <div
                      className='pin-save'
                      onClick={(e) => {e.preventDefault(); this.props.openModal({modal: 'SavePin', pin: pin});}}>
                      <div>
                        <Tile key={id} src={pin} comment={''}/>;
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </MasonryGrid>
          </div>
        </div>
      </div>
    );
  }
}

export default PinsIndex;
