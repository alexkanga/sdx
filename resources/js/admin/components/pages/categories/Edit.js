import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// partials
import Breadcrumb from '../../partials/Breadcrumb';
import CategoryForm from './CategoryForm';

// actions
import { showCategory, editCategory,
    setCategoryDefaults, handleCategoryTitle } from '../../../store/actions/CategoryActions';

class Edit extends Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        this.props.setCategoryDefaults();

        this.props.showCategory(this.props.match.params.id);
    }

    handleChange(e) {
        e.preventDefault();

        this.props.handleTitleChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;

        this.props.editCategory(this.props.categories.category.title,
            this.props.match.params.id, function () {

                // reset title
                self.props.handleTitleChange('');

                // redirect
                setTimeout(() => self.props.history.push('/categories'), 2000);
            });
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
                  <form role="form" method="post" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                    <div className="card card-primary">
                    <div className="card-header">
                    <h3 className="card-title">Editer une categorie #{ this.props.match.params.id }</h3>

                    <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    <i className="fas fa-minus"></i>
                    </button>
                    </div>
                    </div>

                        <div className="card-body">

                          <CategoryForm categories={this.props.categories} onchange={this.handleChange}/>

                        </div>

                    </div>

                    </div>

                  </div>
                    <div className="row">
                    <div className="col-12">

                    <button type="submit" className="btn btn-success ">Valider</button>
                    <Link to='/categories' className="btn btn-warning float-right">Annuler</Link>
                    </div>
                    </div>
                    </form>
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
        showCategory: (id) => dispatch(showCategory(id)),
        handleTitleChange: (title) => dispatch(handleCategoryTitle(title)),
        editCategory: (title, id, cb) => dispatch(editCategory(title, id, cb)),
        setCategoryDefaults: () => dispatch(setCategoryDefaults())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
