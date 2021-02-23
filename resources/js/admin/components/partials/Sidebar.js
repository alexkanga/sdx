import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

const Sidebar = (props) => {

    return props.location.pathname != '/login'?(
  <aside className="main-sidebar sidebar-dark-primary elevation-4">

    <a to="index3.html" className="brand-link">
      <img src={process.env.MIX_APP_URL + 'assets/admin/dist/img/AdminLTELogo.png'} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
      <span className="brand-text font-weight-light">Backend</span>
    </a>


    <div className="sidebar">

      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src={process.env.MIX_APP_URL + 'assets/admin/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <Link to="#" className="d-block">{localStorage.getItem("user.name")}</Link>
        </div>
      </div>


      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>


      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-th"></i>
              <p>
                First App
                <i className="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="/" className={props.location.pathname=='/'?'nav-link active':'nav-link'}>
                <i className="nav-icon fas fa-tachometer-alt text-danger"></i>
                <p>
                  Dashboard
                  <span className="right badge badge-danger">20</span>
                </p>
              </Link>
            </li>

              <li className="nav-item">
                <Link to="/posts" className={props.location.pathname=='/posts'?'nav-link active':'nav-link'} >
                  <i className="nav-icon fas fa-edit"></i>
                  <p>
                    Posts
                    <span className="right badge badge-danger">20</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className={props.location.pathname=='/categories'?'nav-link active':'nav-link'}>
                  <i className="nav-icon fas fa-list"></i>
                  <p>
                    Categories
                    <span className="right badge badge-danger">5</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tags" className={props.location.pathname=='/tags'?'nav-link active':'nav-link'}>
                  <i className="nav-icon fas fa-tags"></i>
                  <p>
                    Tags
                    <span className="right badge badge-danger">5</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/comments" className={props.location.pathname=='/comments'?'nav-link active':'nav-link'}>
                  <i className="nav-icon fas fa-comments"></i>
                  <p>
                    Commentaires
                    <span className="right badge badge-danger">105</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users" className={props.location.pathname=='/users'?'nav-link active':'nav-link'}>
                  <i className="nav-icon fas fa-users"></i>
                  <p>
                    Utilisateurs
                    <span className="right badge badge-danger">3</span>
                  </p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-file"></i>
              <p>
                Documentation

              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <i className="nav-icon fas fa-sign-out-alt"></i>
              <p>
                Déconnexion

              </p>
            </Link>
          </li>
        </ul>
      </nav>

    </div>

  </aside>

    ):null;
};

export default withRouter(Sidebar);
