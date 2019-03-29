import React, {Component} from "react";
import * as request from "../../commons/request";
import AuthorChangesForm from "./AuthorChangesForm";

class EditAuthorForm extends Component {
  state = {
    object: null
  };

  componentDidMount() {
    const {id} = this.props.match.params;
    this.fetchAuthor(id);
  }

  fetchAuthor = id => {
    request.get("/author/" + id).then(object => {
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
      <AuthorChangesForm
        initialValues={{...object, personDto: object.personDto.surname, publicationDto: object.publicationDto.content}}
      />
    );
  }
}

export default EditAuthorForm