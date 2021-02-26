import React from 'react';
import Breadcrumb from '../../partials/Breadcrumb';
import {connect} from 'react-redux';
import { listTags, setTagDefaults } from '../../../store/actions/TagActions';
import Spinner from '../../partials/Spinner';
import { Link } from 'react-router-dom';
import Row from './Row';
import Pagination from '../../partials/Pagination';
import SuccessAlert from '../../partials/SuccessAlert';
import ErrorAlert from '../../partials/ErrorAlert';

class Index extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        this.props.setTagDefaults();

        this.props.listTags(1);
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


     <div className="card">
       <div className="card-header">
         <h3 className="card-title"><Link to='tags/add' className="btn btn-primary pull-right">Ajouter <i className="fa fa-plus"></i></Link></h3>

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
       <Spinner show={this.props.tag.list_spinner}/>

       <SuccessAlert msg={this.props.tag.success_message}/>
       <ErrorAlert msg={this.props.tag.error_message}/>
         <table className="table table-striped projects">
             <thead>
                 <tr>

                     <th  style={{width: 1 + '%'}}>
                         #
                     </th>
                     <th style={{width: 40 + '%'}}>
                         Titre
                     </th>
                     
                    <th style={{width: 25 + '%'}}></th>
                 </tr>
             </thead>
             <tbody>
             {
                 this.props.tag.tags.data?(
                     this.props.tag.tags.data.map(item => <Row key={item.id} tag={item} />)
                 ) : null
             }


             </tbody>
         </table>
       </div>

       <Pagination data={this.props.tag.tags} onclick={this.props.listTags.bind(this)} />

     </div>


   </section>


            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        tag: state.tag
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        listTags: (page) => dispatch(listTags(page)),
        setTagDefaults: () => dispatch(setTagDefaults())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
