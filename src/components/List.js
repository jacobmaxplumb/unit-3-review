import React from 'react';
import axios from 'axios';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/list-items').then(res => {
            this.setState({items: res.data})
        });
    }

    render() {
        return (
            <div>
                <h1>List</h1>
                {this.state.items.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        )
    }
}

export default List;