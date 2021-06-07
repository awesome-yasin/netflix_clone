import React, { useState } from 'react';
import Data from "./data";
import './cards.css'
import './App.css'
import StarIcon from '@material-ui/icons/Star';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import EventIcon from '@material-ui/icons/Event';
import GetAppIcon from '@material-ui/icons/GetApp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const ProductChild = ({ title, desc, img, likes, category }) => {

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>

      <div class="wrapper">
        <div class="cards">
          <figure class="card">
            <img src={img} className="img" />
            <p className="card_rating"><StarIcon className="star" />{likes}</p>
            <figcaption><PlayCircleFilledIcon className="play" /></figcaption>
          </figure>

        </div>
        <p className='name' onClick={onOpenModal}>{title} </p>
        <Modal open={open} onClose={onCloseModal} center className="model" styles={{ modal: { background: "#000", border: "1px solid #fff" }, closeIcon: { background: "#fff" }, overlay: { background: "#000" } }}>
          <div className="modal-main">
            <div className="modal-row1 left">
              <div className="modal-img">
                <img src={img} className="modal-img" />
              </div>
            </div>
            <div className="modal-title modal-row2 right">
              <h2 className="modal-title">{title}</h2>
              <EventIcon className="cal" /> <p className='modal-cat'>{category}</p>
              <p className='modal-desc'>{desc}</p>
            </div>
            <div className="buttons">
              <button className="but1"><PlayArrowIcon className="download" />Watch Now</button>
              <button className="but2"><GetAppIcon className="download" />Download</button>
            </div>
          </div>
        </Modal>

        <a className='category'>{category}</a>
      </div>
    </>
  )
}

const Products = () => {
  const products = Data.map(product => (
    <ProductChild desc={product.desc} title={product.title} img={product.img} likes={product.likes} category={product.category} />
  ));
  return (
    <>
      {products}
    </>
  )
};

export default Products;