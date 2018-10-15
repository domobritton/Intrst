import React from 'react';
import Masonry from 'react-masonry-component';
import {  Link, withRouter } from 'react-router-dom';
// import PinsUser from '../pins/pins_user';
import  { Redirect } from 'react-router-dom';


class BoardIndexComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }


  componentDidMount(){
    this.setState({ loading: false });
    this.props.fetchBoards();
    this.props.fetchBoardsPins();
  }



  componentDidUpdate(prevProps,prevState){
    if (prevProps.boards.length !== this.props.boards.length){
      this.props.fetchBoards();
      this.props.fetchBoardsPins();
    }
  }

  render(){
      let boardHash = {};

      this.props.boards.forEach((board) => {
        let boardPins = this.props.boardPins.filter(pin => pin.pin.board_id === board.id);
        boardHash[board.id] = boardPins;
      });

      const masonryOptions = {
       fitWidth: true,
       transitionDuration: 0
     };

     return (
       this.state.loading ?
       <div className='spinner'></div> :
       <div className='user-profile-items'>
         <Masonry
           elementType={'div'}
           disableImagesLoaded={false}
           className='profile-boards-container'
           options={masonryOptions}
           >
          <div className='board-item-container'
            onClick={() => this.props.openModal({modal: 'CreateBoard'} )}>
            <i id='add-board' className='fa fa-plus' aria-hidden='true'></i>
          </div>

           { this.props.boards.map( (board, idx) => {
             return (
               <div key={idx}>
                 <Link
                   className='board-index-item-container'
                   style={{textDecoration: 'none'}} to={`${this.props.currentUser.id}/boards/${board.id}/pins`}
                   key={idx}>
                   <div className='board-title'>
                     {board.title}
                   </div>
                   <Masonry
                     elementType={'div'}
                     disableImagesLoaded={false}
                     options={masonryOptions}
                     >
                    { Object.values(boardHash[board.id]).slice(0, 8).map( (pin,id) => {
                       return (
                         <div key={id}>
                           <img className='pins-in-board-thumbnail-pic' key={id} src={pin.pin.imageUrl}></img>
                         </div>
                       );
                     })
                   }
                   </Masonry>
                 </Link>
              </div>
             );
             }
           )}
         </Masonry>
     </div>
   );
  }
}

export default withRouter(BoardIndexComponent);
