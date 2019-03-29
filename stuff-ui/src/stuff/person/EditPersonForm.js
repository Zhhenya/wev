import {Component} from "react";
import PersonChangesForm from "./PersonChangesForm";
import React from "react";
import * as request from "../../commons/request";

class EditPersonForm extends Component {
  state = {
    object: null
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.fetchObject(id);
  }

  fetchObject = id => {
    request.get("/person/" + id).then(object => {
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
      <PersonChangesForm
        initialValues={{...object, positionDto: object.positionDto}}
      />
    );
  }
}

export default EditPersonForm