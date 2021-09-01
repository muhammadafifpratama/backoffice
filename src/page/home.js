import React, { Component } from 'react';
import Axios from 'axios'
import Tes from "../component/list"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';

class Home extends Component {
  state = { data: [], openModal: false}
  async componentDidMount() {
    const product = await Axios.get("https://api.temandapur.com/api/v1/categories/")
    //console.log(product.data.data.product_service);
    this.setState({ data: product.data.data.product_service })
  }

  renderproduk = () => {
    return (
      <Tes></Tes>
    )
  }

  data = () => {
    return this.state.data.map((val) => {
      return (
        <TableBody>
          <TableRow key={val.id}>
            <TableCell align="right">{val.id}</TableCell>
            <TableCell align="right">{val.name}</TableCell>
            <TableCell align="right">{val.created_date}</TableCell>
            <TableCell align="right">{val.description}</TableCell>
            <TableCell align="right">{val.image_path}</TableCell>
          </TableRow>
        </TableBody>
      )
    })
  }

  header = () => {
    return (
      <TableHead>
        <TableRow>
          <TableCell align="right">id</TableCell>
          <TableCell>nama kategori</TableCell>
          <TableCell align="right">tanggal dibuat</TableCell>
          <TableCell align="right">Description</TableCell>
          <TableCell align="right">filepath</TableCell>
        </TableRow>
      </TableHead>
    )
  }

  add = () => {
    return (
      <Modal isOpen={this.state.openModal}>
      <ModalHeader>Add New Category</ModalHeader>
      <ModalBody>
          <Label>
              Name
          </Label>
          <Input type='text' innerRef={(nama) => this.nama = nama} />
          <Label>
              Description
          </Label>
          <Input type='text' innerRef={(desc) => this.desc = desc} />
          <Label>
              Image URL
          </Label>
          <Input type='text' innerRef={(image) => this.image = image} />
      </ModalBody>
      <ModalFooter>
          <Button color="secondary" onClick={() => this.setState({ openModal: false })}>Cancel</Button>
          <Button color="primary" onClick={() => console.log(this.nama.value + this.desc.value + this.image.value)}>Confirm</Button>
      </ModalFooter>
  </Modal>
    )
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        {this.add()}
        <Table>
            {this.header()}
            {this.data()}
        </Table>
        <Button onClick={() => this.setState({ openModal: true })}>add</Button>
      </div >
    );
  }
}

export default Home;