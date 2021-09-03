import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';

const Tabel = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{props.header}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{props.data}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default Tabel;