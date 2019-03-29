import React from "react";
import {Route, Switch} from "react-router";
import MainForm from "./MainForm";
import PersonForm from "./person/PersonForm";
import EditPersonForm from "./person/EditPersonForm";
import AddPersonForm from "./person/AddPersonForm";
import PositionForm from "./position/PositionForm";
import EditPositionForm from "./position/EditPositionForm";
import AddPositionForm from "./position/AddPositionForm";
import PublicationForm from "./publication/PublicationForm";
import EditPublicationForm from "./publication/EditPublicationForm";
import AddPublicationForm from "./publication/AddPublicationForm";
import AuthorForm from "./author/AuthorForm";
import EditAuthorForm from "./author/EditAuthorForm";
import AddAuthorForm from "./author/AddAuthorForm";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainForm}/>
      <Route exact path="/person" component={PersonForm}/>
      <Route exact path="/person/edit/:id" component={EditPersonForm}/>
      <Route exact path="/person/add" component={AddPersonForm}/>
      <Route exact path="/position" component={PositionForm}/>
      <Route exact path="/position/edit/:id" component={EditPositionForm}/>
      <Route exact path="/position/add" component={AddPositionForm}/>
      <Route exact path="/publication" component={PublicationForm}/>
      <Route exact path="/publication/edit/:id" component={EditPublicationForm}/>
      <Route exact path="/publication/add" component={AddPublicationForm}/>
      <Route exact path="/author" component={AuthorForm}/>
      <Route exact path="/author/edit/:id" component={EditAuthorForm}/>
      <Route exact path="/author/add" component={AddAuthorForm}/>
    </Switch>
  );
};
export default AppRouter;
