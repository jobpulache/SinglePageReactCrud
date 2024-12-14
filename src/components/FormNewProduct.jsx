import { Link, Form as MainForm } from 'react-router-dom'

import Form from 'react-bootstrap/Form';

import Modal from './Modal'
import classes from '../assets/css/NewProduct.module.css'

export default function FormNewProduct() {
  return (
    <Modal>
      <MainForm method="post" className={classes.form}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre del Producto:</Form.Label>
          <Form.Control name="title" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción del producto:</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} />
        </Form.Group>
        <div className={classes.actions}>
          <div className={classes.back}>
            <Link className="nav-link" to='..'>
              Cancel
            </Link>
          </div>
          <button>Submit</button>
        </div>
      </MainForm>
    </Modal>
  )
}