import React, { Component } from 'react';
// import React from 'react';
import { connect } from 'react-redux';
import Breadcrumb from '../../partials/Breadcrumb';
import { listCategories, setCategoryDefaults } from '../../../store/actions/CategoryActions';
import Spinner from '../../partials/Spinner';
import Row from './Row';
import { Link } from 'react-router-dom';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

// class Index extends React.Component
class Index extends Component
{
    constructor(props)
    {
        super(props);
        //document.body.classList.remove("login-page");
        //document.body.classList.add("skin-green");
    }

    componentDidMount() {
        this.props.setCategoryDefaults();

        this.props.listCategories(1);
    }

    render()
    {
        return (
          <div className="content-wrapper">
                <div className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-2">
                      <div className="col-sm-6">
                        <h1 className="m-0">Catégories</h1>
                      </div>
                      <div className="col-sm-6">
                        <Breadcrumb />
                      </div>
                    </div>
                  </div>
                </div>


                <section className="content">


     <div className="card">
       <div className="card-header">
         <h3 className="card-title"><Link to='/categories/add' className="btn btn-primary pull-right">Ajouter <i className="fa fa-plus"></i></Link></h3>

         <div className="card-tools">
           <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
             <i className="fas fa-minus"></i>
           </button>
           <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
             <i className="fas fa-times"></i>
           </button>
         </div>
       </div>

       <div className="card-body p-0">
       <Spinner show={this.props.categories.list_spinner}/>

       <SuccessAlert msg={this.props.categories.success_message}/>
       <ErrorAlert msg={this.props.categories.error_message}/>
         <table className="table table-striped projects">
             <thead>
                 <tr>

                     <th  style={{width: 1 + '%'}}>
                         #
                     </th>
                     <th style={{width: 40 + '%'}}>
                         Titre
                     </th>
                     <th style={{width: 30 + '%'}}>
                         Slug
                     </th>
                    <th style={{width: 25 + '%'}}></th>
                 </tr>
             </thead>
             <tbody>
             {
                 this.props.categories.categories.data?(
                     this.props.categories.categories.data.map(item => <Row key={item.id} category={item} />)
                 ):null
             }



             </tbody>
         </table>
       </div>

       <Pagination data={this.props.categories.categories} onclick={this.props.listCategories.bind(this)} />

     </div>


   </section>


            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        listCategories: (page) => dispatch(listCategories(page)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
