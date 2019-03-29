import React, {Component} from "react";
import * as request from "../../commons/request";
import PositionChangesForm from "./PositionChangesForm";

class EditPositionForm extends Component {
  state = {
    object: null
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.fetchPosition(id);
  }

  fetchPosition = id => {
    request.get("/position/" + id).then(object => {
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
      <PositionChangesForm
        initialValues={{...object}}
      />
    );
  }
}

export default EditPositionForm