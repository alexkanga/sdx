import React, { Component } from 'react';
import Breadcrumb from '../../partials/Breadcrumb';
import { Link } from 'react-router-dom';

class Index extends Component
{
    constructor(props)
    {
       super(props);
        //document.body.classList.remove("login-page");
        //document.body.classList.add("skin-green");
    }

    render() {
        return (
          <div className="content-wrapper">

  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Utilisateurs</h1>
        </div>
        <div className="col-sm-6">
          <Breadcrumb />
        </div>
      </div>
    </div>
  </div>
  <section className="content">Liste
  </section>


</div>
        )
    }
}

export default Index;
