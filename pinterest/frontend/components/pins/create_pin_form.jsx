import React from 'react';

class CreatePinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      url: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  picturethumbnail(){
    if (this.state.image_url === '') {
      return (
        <div className="dropzone-text-container">
          <i class="fa fa-camera" aria-hidden="true"></i>
          <p>Drop an image or click to select a file to upload.</p>
        </div>
      );
      } else {
        return (
          <div className="picturethumbnail">
            <p>Image upload successful.Click done</p>
            <img width="150" height="150" className="imgthumbnail" src={this.state.image_url}/>
          </div>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  update(type){
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

  }

  render() {
    return (
      <div className='create-pin-page'>
        <form
          className='create-pin-form'
          onSubmit={this.handleSubmit}>
          <div className='create-pin-header'>
            <h1>Create Pin</h1>
          <br/>
          {this.renderErrors()}
            <div className='close'>
              <span
                className="close-modal"
                onClick={() => this.props.closeModal()}>
                <i className='fas fa-times'></i>
              </span>
            </div>
          </div>
          <div className='form-left'>
            <button className='pin-upload-outer'>
              <i className='fas fa-camera'></i>
              <div className='pin-upload-inner'>
                <p>Drag and drop or click to upload</p>
              </div>
            </button>
            </div>
            <div className='form-right'>
              <label><div className='label'>Website</div></label>
            <input
              className='website'
              type='text'
              value={this.state.url}
              placeholder="Add the URL this Pin links to" onChange={this.update('url')}/>
            <label><div className='label'>Description</div></label>
            <textarea
              className='description'
              type='text'
              value={this.state.description}
              placeholder="Say more about this Pin" onChange={this.update('description')}>
            </textarea>
            </div>
          <div className='create-pin-footer'>
            <div className='done-btn'>
              <input className='submit-btn' type="submit" value='Done'/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePinForm;
