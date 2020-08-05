import React from 'react';
import './ResultList.css'
import Results from '../Results/Results';

class ResultList extends React.Component {
    render() {
        return (
            <div className="result-list">
                {
                    this.props.results.map(result => {
                        return <Results result={result} />
                    })
                }
            </div>
        )
    }
}
export default ResultList;