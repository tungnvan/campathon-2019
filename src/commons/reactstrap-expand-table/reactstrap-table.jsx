import React, { Component } from 'react';
import { Table } from 'reactstrap';
import Row from './row';
import PropTypes from 'prop-types';

class ReactstrapTable extends Component {

    renderRows = () => {
        const { rows, columns } = this.props;
        return !!rows
            ? rows.map((row, index) => (
                <Row
                    key={index}
                    expand={this.props.expandRowFunct}
                    row={row}
                    colSpanSize={!!columns ? columns.length + 1 : 1}
                    columns={columns}
                >
                </Row>
            ))
            : null
    };

    renderHeader = () => {
        const { columns } = this.props;
        return !!columns ? columns.map((e, index) => (<th key={index}>{e.text}</th>)) : null;
    };

    render() {
        return (
            <Table striped bordered >
                <thead>
                    <tr>
                        {this.renderHeader()}
                        <th>Expand</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.renderRows()
                    }
                </tbody>
            </Table>
        )
    }
}


ReactstrapTable.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
    expandRowFunct: PropTypes.func
};

export default ReactstrapTable;