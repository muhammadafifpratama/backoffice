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
import { url } from "../helper/API_URL"

class Home extends Component {
  state = { data: [], openModal: false }
  async componentDidMount() {
    const product = await Axios.get(url + "categories")
    const promo = await Axios.get(url + "promos")
    // console.log(promo.data.data.promo_service);
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
            {/* <TableCell align="right"><Button>edit</Button></TableCell> */}
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
          {/* <TableCell align="right">actions</TableCell> */}
        </TableRow>
      </TableHead>
    )
  }

  modal = () => {
    return (
      <Modal isOpen={this.state.openModal}>
        <ModalHeader>Add New Category</ModalHeader>
        <ModalBody>
          <Label>
            Name
          </Label>
          <Input type='text' innerRef={(nama) => this.nama = nama} />
          <Label>
            Slug
          </Label>
          <Input type='text' innerRef={(slug) => this.slug = slug} />
          <Label>
            Description
          </Label>
          <Input type='text' innerRef={(desc) => this.desc = desc} />
          <Label>
            Image URL
          </Label>
          <Input type='text' innerRef={(image) => this.image = image} />
          {/* <Label>
            id
          </Label>
          <Input type='text' innerRef={(id) => this.id = id} /> */}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => this.setState({ openModal: false })}>Cancel</Button>
          <Button color="primary" onClick={() => this.add()}>Confirm</Button>
        </ModalFooter>
      </Modal>
    )
  }

  add = () => {
    let name = this.nama.value
    let slug = this.slug.value
    let description = this.desc.value
    let image_path = this.image.value
    let token = localStorage.getItem('token')
    // let id  =  this.id.value
    if (name === '' || slug === '' || description === '' || image_path === '') {
      alert('Fill in all the forms')
    } else {
      Axios.post(url + "category/save/", {
          // id,
          name,
          slug,
          description,
          image_path
      }, {
        headers: {
          'Authorization': `Token ${token}` 
        }
      })
          .catch((err) => {
              console.log(err.response);
          })
          .then((res) => {
              if (res === undefined) {
                  console.log('no response');
              }
              else {
                  alert('Add Successful!')
                  this.setState({openModal: false })
              }
          })
    }
  }

  render() {
    return (
      <div>
        <Table>
          {this.header()}
          {this.data()}
        </Table>
        <Button onClick={() => this.setState({ openModal: true })}>add</Button>
        {this.modal()}
      </div >
    );
  }
}

export default Home;