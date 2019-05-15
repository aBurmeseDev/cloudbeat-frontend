import React, { Component } from "react";

class Search extends Component {
  state = {
    query: ""
  };
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.changeHandler}
        />
        <button
          onClick={() => {
            this.props.search(this.state.query);
          }}
        >
          Search
        </button>
      </div>
    );
  }
}

export default Search;