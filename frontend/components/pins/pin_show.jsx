import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { PinPage, Wrapper, BackBtn, Arrow, ButtonP, SaveDiv, Header, Image, Save} from './show_style';

class PinShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      url: "",
      imageUrl: null,
      image: null
    }
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.id);
    // window.scroll(150, 150);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.fetchPin(nextProps.match.params.id);
    }
    this.setState({imageUrl: this.props.pin.imageUrl})
  }

  render() {
    const { pin } = this.props;
    if (pin) {
      let val;
      if (pin.authorId === this.props.currentUser.id) {
        val = (
          <div className="pencil">
            <i class="fas fa-pencil-alt" />
          </div>
        );
      } else {
        val = "";
      }

      return <PinPage>
          <Wrapper>
            <BackBtn onClick={() => this.props.history.goBack()}>
              <Arrow className="fas fa-chevron-left" />
              <ButtonP>Back</ButtonP>
            </BackBtn>
            <SaveDiv>
              <div className="center-div-inner">
                <Header>
                </Header>
                <div className="pin-comment">
                  {this.props.pin.comment}
                </div>
                <div>
                  <Image src={this.props.pin.imageUrl} />
                </div>
                <div className="user-image">
                  <img src={this.props.pin.authorImage} />
                </div>
                <div className="author" />
              </div>
            </SaveDiv>
          </Wrapper>
        </PinPage>;
    } else {
      return null;
    }
  }
}

export default PinShow;
