import React, {Component} from 'react';

import Spinner from '../../shared/Spinner';
export default class Search extends Component {

    constructor(props) {
        super(props)
        this.termChanged = this.termChanged.bind(this);
    }

    state = {
        term:''
    }

    termChanged(e) {
       this.setState({term: e.target.value})
    }

    render() {
        return (
            <div className="input-group">
                <input className="form-control py-2" type="search" placeholder="search" onChange={this.termChanged}/>
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={()=>this.props.onSearch(this.state.term)} type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        )
    }

}