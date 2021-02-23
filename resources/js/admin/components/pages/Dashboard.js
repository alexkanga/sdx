import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import { Link } from 'react-router-dom';

class Dashboard extends Component
{
    constructor(props)
    {
       super(props);
        document.body.classList.remove("login-page");
        document.body.classList.add("sidebar-mini");
        document.body.classList.add("layout-fixed");
    }

    render() {
        return (
          <div className="content-wrapper">

  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
          <Breadcrumb />
        </div>
      </div>
    </div>
  </div>

  <section className="content">
    <div className="container-fluid">

      <div className="row">
        <div className="col-lg-3 col-6">

          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>

              <p>Posts</p>
            </div>
            <div className="icon">
              <i className="ion ion-document"></i>
            </div>
            <Link to="/posts" className="small-box-footer">Détails <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">

          <div className="small-box bg-success">
            <div className="inner">
              <h3>53<sup style={{fontSize: 20 + 'px'}}>%</sup></h3>

              <p>Categories</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars"></i>
            </div>
            <Link to="/categories" className="small-box-footer">Détails <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">

          <div className="small-box bg-warning">
            <div className="inner">
              <h3>84</h3>

              <p>Tags</p>
            </div>
            <div className="icon">
              <i className="ion ion-pricetags"></i>
            </div>
            <Link to="/tags" className="small-box-footer">Détails <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">

          <div className="small-box bg-primary">
            <div className="inner">
              <h3>44</h3>

              <p>Commentaires</p>
            </div>
            <div className="icon">
              <i className="ion ion-chatboxes"></i>
            </div>
            <Link to="/comments" className="small-box-footer">Détails <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>



        <div className="col-lg-3 col-6">

          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>

              <p>Utilisateurs</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add"></i>
            </div>
            <Link to="/users" className="small-box-footer">Détails <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>

        <div className="col-lg-3 col-6">

          <div className="small-box bg-secondary">
            <div className="inner">
              <h3>44</h3>

              <p>Documentation</p>
            </div>
            <div className="icon">
              <i className="ion ion-filing"></i>
            </div>
            <Link to="/comments" className="small-box-footer">Détails <i className="fas fa-arrow-circle-right"></i></Link>
          </div>
        </div>

      </div>

    </div>
  </section>

</div>
        )
    }
}

export default Dashboard;
