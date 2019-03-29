import React, {Component} from "react";
import * as request from "../../commons/request";
import PublicationChangesForm from "./PublicationChangesForm";

class EditPublicationForm extends Component {
  state = {
    object: null
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.fetchPublication(id);
  }

  fetchPublication = id => {
    request.get("/publication/" + id).then(object => {
      this.setState({object});
    });
  };

  render() {
    const {object} = this.state;
    if (!object) {
      return null;
    }
    console.log(4444, object);
    return (
      <PublicationChangesForm
        initialValues={{...object}}
      />
    );
  }
}

export default EditPublicationForm