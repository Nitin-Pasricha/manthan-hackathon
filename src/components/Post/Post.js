import React from 'react'

import styles from "./Post.module.scss";

function Post() {
    return (
        <div className={styles.post}>
            <div className={styles.image}>
                <img src="https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="post" />
            </div>
            <div className={styles.details}>
                <h3>Nitish sharma</h3>
                <p className={styles.postDesc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic porro totam sed dolores voluptate maxime adipisci voluptatibus ducimus libero, temporibus magnam, nihil ad!
                </p>
                <span className={styles.date}>10-aug-2020</span>
            </div>
        </div>
    )
}

export default Post
