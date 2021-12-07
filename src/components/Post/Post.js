import React from "react";

import styles from "./Post.module.scss";

function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.image}>
        <img src={props.image} alt="post" />
      </div>
      <div className={styles.details}>
        <h3>{props.title}</h3>
        <p className={styles.postDesc}>{props.desc}</p>
        <span className={styles.date}>{props.date}</span>
      </div>
    </div>
  );
}

export default Post;
