import React from "react";
import Masonry from "react-masonry-component";
import { Link, withRouter } from "react-router-dom";

class BoardIndexComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    this.props.fetchBoards();
    this.props.fetchBoardsPins();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.boards.length !== this.props.boards.length) {
      this.props.fetchBoards();
      this.props.fetchBoardsPins();
    }
  }

  render() {
    let boardHash = {};
    const { boards, boardPins, currentUser } = this.props;
    boards.forEach(board => {
      let boardPin = boardPins.filter(pin => pin.pin.board_id === board.id);
      boardHash[board.id] = boardPin;
    });

    const masonryOptions = {
      fitWidth: true,
      transitionDuration: 0
    };

    return this.state.loading
      ? <div className="loading">
          <div className="loading-circle" />
        </div>
      : <div className="user-profile-items">
          <Masonry
            elementType={"div"}
            disableImagesLoaded={false}
            className="profile-boards-container"
            options={masonryOptions}
          >
            <div className="board-item-outer">
              <div
                className="board-item-container"
                onClick={() => this.props.openModal({ modal: "CreateBoard" })}
              >
                <div className="plus-outer">
                  <i className="fa fa-plus" aria-hidden="true" />
                </div>
              </div>
              <div className="container-footer">
                <p>Create board</p>
              </div>
            </div>

            {boards.map((board, idx) => {
              return (
                <div className="board-containers" key={idx}>
                  <Link
                    className="board-index-item-container"
                    style={{ textDecoration: "none" }}
                    to={`${currentUser.id}/boards/${board.id}/pins`}
                    key={idx}
                  >
                    <div className="thumbnail-box">
                      <Masonry
                        elementType={"div"}
                        disableImagesLoaded={false}
                        options={masonryOptions}
                      >
                        {Object.values(boardHash[board.id])
                          .slice(0, 8)
                          .map((pin, id) => {
                            return (
                              <div key={id}>
                                <img
                                  className="pins-in-board-thumbnail-pic"
                                  key={id}
                                  src={pin.pin.imageUrl}
                                />
                              </div>
                            );
                          })}
                      </Masonry>
                    </div>
                    <div className="board-title">
                      <p>
                        {board.title}
                      </p>
                      <span>
                        <i className="fas fa-pencil-alt" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Masonry>
        </div>;
  }
}

export default withRouter(BoardIndexComponent);
