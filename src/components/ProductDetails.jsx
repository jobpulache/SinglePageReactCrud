import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal'
import classes from '../assets/css/ProductDetails.module.css'

export default function ProductDetails() {
  const product = useLoaderData();
  
  if (!product) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>      
        <p className={classes.author}>ID: {product.id}</p>
        <p className={classes.text}>Title: {product.title}</p>
        <p className={classes.text}>Description: {product.description}</p>
      </main>
    </Modal>
  );
  
}