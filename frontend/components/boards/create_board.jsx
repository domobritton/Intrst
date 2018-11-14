import React from "react";

class CreateBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) =>
          <li key={`error-${i}`}>
            {error}
          </li>
        )}
      </ul>
    );
  }

  update(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state).then(this.props.closeModal());
  }

  render() {
    return (
      <div>
        <form
          className="create-board-form"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <div className="create-header">
            <h3>Create Board</h3>
          </div>
          <br />
          <p>
            {this.renderErrors()}
          </p>
          <span class="close-modal" onClick={() => this.props.closeModal()}>
            <i className="fas fa-times" />
          </span>
          <label className="board-title">
            <span>Name</span>
            <input
              type="text"
              required
              value={this.state.title}
              placeholder="Like 'Places to Go' or 'Recipes to Make'"
              onChange={this.update.bind(this)}
            />
          </label>
          <br />
          <br />
          <div className="create-footer">
            <button
              className="board-cancel-btn"
              onClick={() => this.props.closeModal()}
            >
              Cancel
            </button>
            <input className="board-submit-btn" type="submit" value="Create" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBoard;
