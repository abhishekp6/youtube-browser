import React from "react";
import './Searchbar.css';

class Searchbar extends React.Component {
    state = {term: ''};
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return(
            <div className="searchbar ui search-bar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        placeholder="Search Videos"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Searchbar;