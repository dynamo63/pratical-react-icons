import React from 'react';
import PropTypes from 'prop-types';

function TableRowItem({ name, component }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{component}</td>
        </tr>
    );
}

TableRowItem.propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired
}

export default TableRowItem;