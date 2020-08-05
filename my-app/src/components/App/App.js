import React from 'react';
import './App.css';
import Search from '../Search/Search';
import ResultList from '../ResultList/ResultList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            results: []
        }
        this.searchDatamuse = this.searchDatamuse.bind(this);
    }
    

    async searchDatamuse(searchObject) {
        const query = searchObject.searchOption + searchObject.word
        await fetch(query, {
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            this.setState({ results: jsonResponse })
        })

    }

    render() {
        return (
            <div className="App" >
                <h1>
                    POC with Datamuse API
                </h1>
                <Search searchDatamuse={this.searchDatamuse}/>
                <ResultList results={this.state.results} />
            </div>
        )
    }
}

export default App;