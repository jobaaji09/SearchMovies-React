import React, { Component } from 'react'
import { formatDiagnostic } from 'typescript';

export class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value });
    }

    _handleSumit = (e)=>{
        e.preventDefault();
        alert(this.state.inputMovie);
    }

    render() {
        return (
            <form onSubmit={this._handleSumit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movies to search..." />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                    </button>
                    </div>
                </div>
            </form>
        )
    }
}