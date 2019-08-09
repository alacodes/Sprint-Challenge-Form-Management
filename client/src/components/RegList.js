import React from 'react';
import axios from 'axios';

class RegList extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/restricted/data')
            .then(results => {
                this.setState({
                    items: results.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return(
            <div className='item-container'>
                <h1>Items</h1>
                {this.state.items.map((user) => {
                    return <p key={user.name} data-testid='items'>{user.name}</p>
                })}
            </div>
        )
    }
}
export default RegList;