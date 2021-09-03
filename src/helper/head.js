import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Head = (props) => {
    <TableHead>
        <TableRow>
            <TableCell>{props.header}</TableCell>
        </TableRow>
    </TableHead>
}

export default Head