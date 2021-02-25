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
                        <h1 className="m-0">Posts</h1>
                      </div>
                      <div className="col-sm-6">
                        <Breadcrumb />
                      </div>
                    </div>
                  </div>
                </div>

                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header">
                                    <h3 className="box-title">Toutes les catégories</h3>

                                    <Link to='/categories/add' className="btn btn-primary pull-right">Ajouter <i className="fa fa-plus"></i></Link>
                                </div>

                                <div className="box-body">
                                    <Spinner show={this.props.categories.list_spinner}/>

                                    <SuccessAlert msg={this.props.categories.success_message}/>
                                    <ErrorAlert msg={this.props.categories.error_message}/>

                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Title</th>
                                                <th>Slug</th>
                                                <th width="15%">Actions</th>
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
                        </div>
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
