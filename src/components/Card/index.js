import React from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, title, price, onClickFavorite, onClickPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handlePlus = () => {
    onClickPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div onClick={onClickFavorite} className={styles.favorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price}$</b>
        </div>
        <img
          className={styles.plus}
          onClick={handlePlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        ></img>
      </div>
    </div>
  );
}

export default Card;
