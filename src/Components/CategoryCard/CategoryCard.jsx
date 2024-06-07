import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ title, style ,onClick   }) => {
    console.log(title,"carddddd")
  return (
    <div className={styles.category_card} style={style} onClick={onClick }>
      {title}
    </div>
  );
};

export default CategoryCard;
