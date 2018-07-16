import React, { Component, PropTypes } from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(this.textInput.current.value)
   // this.props.onChange(e.target.value);
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="input-group col-md-12">
            <input className="form-control py-2" type="search" placeholder="search" ref={this.textInput}/>
            <span className="input-group-append">
              <button className="btn btn-outline-secondary" onClick={this.handleClick} type="button">
                  <i className="fa fa-search"></i>
              </button>
            </span>
          </div>

          <div className="row margin-up">
            <div className="col-sm jumbotron">
              One of two columns
            </div>
            <div className="col-sm">
              One of two columns
            </div>
          </div>
        </div>
      </div>
    );
  }
};
