import React, {Component} from 'react';


import  Autosuggest from 'react-autosuggest';
import './autosuggest.css'

const getSuggestionValue = (suggestion) => suggestion.screen_name
const renderSuggestion = (suggestion) => (<span>{suggestion.screen_name}</span>)


export default class Search extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        term:'',
        suggestions: []
    }

    onChange = (event, { newValue, method }) => {
        this.setState({ term: newValue });
    }

    onSuggestionsFetchRequested = ({ value }) => {
        fetch(`${process.env.REACT_APP_API_URL}/app/users/?q=${value}`)
          .then(response => response.json())
          .then(data => this.setState({ suggestions: data }))
    }
    
    onSuggestionsClearRequested = () => {
        this.setState({ suggestions: [] });
    };

    
    render() {

        const { term, suggestions } = this.state;
        const inputProps = {
          placeholder: "Search For Users",
          value: term,
          onChange: this.onChange
        };


        return (
            <div className="input-group">
               
               <Autosuggest 
               suggestions={suggestions}
               onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
               onSuggestionsClearRequested={this.onSuggestionsClearRequested}
               getSuggestionValue={getSuggestionValue}
               renderSuggestion={renderSuggestion}
               inputProps={inputProps} />
                <span className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={()=>this.props.onSearch(this.state.term)} type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </span>
            </div>
        )
    }

}