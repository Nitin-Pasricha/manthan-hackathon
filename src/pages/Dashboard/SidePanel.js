import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

import pic from "./dp.svg";

const SidePanel = () => {
  return (
    <section className="admin-panel">
      <div className="profile">
        <img className="profile-pic" src={pic} alt="detective" />
        <article>
          <h3>Rosy Fernando</h3>
          <p>Chief Detective</p>
        </article>
      </div>
      <Icons />
    </section>
  );
};

const Icons = () => {
  return (
    <div className="icons">
      <div className="icon">
        <MdDashboard className="ic" />
        <p>Dashboard</p>
      </div>
      <div className="icon" onClick={() => localStorage.clear()}>
        <RiLogoutBoxLine className="ic" />
        <Link to="/">
          <p>Log out</p>
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
