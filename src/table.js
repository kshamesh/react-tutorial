import React, { Component } from 'react'
import TableBody from './tablebody'
import TableHeader from './tableheader'

class Table extends Component {
    render() {
        const { roles, removeRole } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody roles={roles} removeRole={removeRole} />
            </table>
        )
    }
}
export default Table