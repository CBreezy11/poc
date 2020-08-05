import React from 'react';
import './Results.css'

class Results extends React.Component {
    render() {
        return (
        <div className='word-result'>
            <h3>
                {this.props.result.word}
            </h3>
        </div>
        )
    }
}

export default Results;