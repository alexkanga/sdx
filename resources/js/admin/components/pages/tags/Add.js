import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

// partials
import Breadcrumb from '../../partials/Breadcrumb';
import TagForm from './TagForm';

// actions
import {addTag, setTagDefaults, handleTagTitle} from '../../../store/actions/TagActions';


class Add extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        this.props.setTagDefaults();

        this.props.handleTitleChange('');
    }

    handleChange(e) {
        e.preventDefault();

        this.props.handleTitleChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let self = this;

        this.props.addTag(this.props.tag.tag.title, function () {

            // reset title
            self.props.handleTitleChange('');

            // redirect
            setTimeout(() => self.props.history.push('/tags'), 2000);
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
                    <h1 className="m-0">Tags</h1>
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
              <h3 className="card-title">Ajouter un tag</h3>

              <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i className="fas fa-minus"></i>
              </button>
              </div>
              </div>

                  <div className="card-body">


                    <TagForm tag={this.props.tag} onchange={this.handleChange}/>
                  </div>

              </div>

              </div>

            </div>
              <div className="row">
              <div className="col-12">
              <button type="submit" className="btn btn-success ">Valider</button>
              <Link to='/tags' className="btn btn-warning float-right">Annuler</Link>
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
      tag: state.tag
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        setTagDefaults: () => dispatch(setTagDefaults()),
        handleTitleChange: (title) => dispatch(handleTagTitle(title)),
        addTag: (title, cb) => dispatch(addTag(title, cb))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
