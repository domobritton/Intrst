import React from 'react';
import Dropzone from 'react-dropzone';

class CreatePinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comment: '',
      url: '',
      imageUrl: null,
      image: null,
      board_id: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  imagePreview() {
    if (this.state.image === null) {
      return (
        <div className='form-left'>
          <div className='pin-upload-outer'>
            <div className='fake-upload'>
            <i className='fas fa-camera'></i>
            <div className='pin-upload-inner'>
              <p>Drag and drop or click to upload</p>
            </div>
            </div>
            <input
              className='real-upload'
              type='file'
              onChange={this.handleFile.bind(this)} />
            </div>
        </div>
      );
    } else if (this.state.imageUrl){
        return (
          <div className='form-left'>
            <div className='pin-upload-outer'>
              <div className='thumbnail-outer'>
                <img className='img-thumbnail'
                     src={this.state.imageUrl}/>
              </div>
            </div>
          </div>
      );
    } else {
      return null;
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({image: file, imageUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
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

  componentWillUnmount() {
    this.props.clearPinErrors(this.props.errors);
  }


  update(type){
    return e => this.setState({
      [type]: e.currentTarget.value
    });
  }


  handleSubmit(e){
    e.preventDefault();
    debugger;
    let formData = new FormData();
    formData.append('pin[comment]', this.state.comment);
    formData.append('pin[url]', this.state.url);
    formData.append('pin[board_id]', this.state.board_id);
    if (this.state.image) {
      formData.append('pin[image]', this.state.image);
    }
    $.ajax({
      url: 'api/pins',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    }).then(
      (response) => console.log(response.message),
      (response) => {
      console.log(response.responseJSON);
      }
    );
  }

  render() {
    console.log(this.state);
    let submitBtn;
    if (this.state.image === null) {
      submitBtn = 'submit-btn';
    } else {
      submitBtn = 'submit-btn-red';
    }
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

            {this.imagePreview()}
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
              <input className={submitBtn} type="submit" value='Done'/>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePinForm;
