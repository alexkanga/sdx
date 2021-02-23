import React from 'react';
import { withRouter } from "react-router";

const Footer  = (props) => {
  return props.location.pathname != '/login'?(

    <footer className="main-footer">
    <div className="float-right d-none d-sm-inline">
      Alexandre Kanga
    </div>
    <strong>Copyright &copy; 2021 <a href="#">Portail</a>.</strong> Tous droits réservés.
  </footer>
  ):null;
};

export default withRouter(Footer);
