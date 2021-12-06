import React from "react";
import Post from "../../components/Post/Post";

import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.headerSection}>
        <div className={styles.coverArea}></div>
        <img
          className={styles.profileImage}
          src="https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <div className={styles.information}>
          <h2>Nitish sharma</h2>
          <span> New Mexico</span>
        </div>
      </div>
      <div className={styles.posts}>
        <h2>Posts</h2>
        <hr className={styles.breakLine} />
        <div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export default Profile;
