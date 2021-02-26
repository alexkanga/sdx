import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTag } from '../../../store/actions/TagActions';

class Row extends React.Component {

    constructor(props)
    {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        e.preventDefault();

        if(confirm("Voulez-vous vraiment supprimer?")) {
            this.props.deleteTag(this.props.tag.id);
        }
    }

    render()
    {
        return (

            <tr>
                <td>
                    {this.props.tag.id}
                </td>
                <td>
                    {this.props.tag.title}
                </td>


                <td className="float-right">

                    <Link to={'/tags/edit/' + this.props.tag.id} className="btn btn-info btn-sm">
                        <i className="fas fa-pencil-alt">
                        </i>
                        Editer
                    </Link>

                    <a href="#" className="btn btn-danger btn-sm" onClick={this.handleDelete}>
                        <i className="fas fa-trash">
                        </i>
                        Supprimer
                    </a>

                </td>
            </tr>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTag: (id) => dispatch(deleteTag(id))
    }
};

export default connect(null, mapDispatchToProps)(Row);
