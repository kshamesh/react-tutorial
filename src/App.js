import React, { Component } from 'react';
import Table from './table'

class App extends Component {

    state = {
        roles: [
            {
                name: 'Charlie',
                job: 'Carpenter',
            },
            {
                name: 'Mac',
                job: 'Plumber',
            }
        ]
    };

    removeRole = (index) => {
        const { roles } = this.state

        this.setState({
            roles: roles.filter((role, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const { roles } = this.state
        return (
            <div className="container">
                <Table roles={roles} removeRole={this.removeRole} />
            </div>
        )
    }
}

export default App;

