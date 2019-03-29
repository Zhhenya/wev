import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import EventNote from "@material-ui/icons/EventNote";
import Person from "@material-ui/icons/Person";
import Description from "@material-ui/icons/Description";
import {Link} from "react-router-dom";


const LinkToPerson = props => (
  <Link to="/person" {...props} />
);
const LinkToPublication = props => (
  <Link to="/publication" {...props} />
);
const LinkToPosition = props => (
  <Link to="/position" {...props} />
);
const LinkToAuthor = props => (
  <Link to="/author" {...props} />
);


const MainForm = () => {
  return(
    <React.Fragment>
      <List>
        <ListItem button component={LinkToPerson}>
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary={"Преподаватели"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={LinkToPublication}>
          <ListItemIcon>
            <EventNote />
          </ListItemIcon>
          <ListItemText primary={"Публикации"} />
        </ListItem>
        <ListItem button component={LinkToPosition}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary={"Список должностей"} />
        </ListItem>
        <ListItem button component={LinkToAuthor}>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary={"Список авторов и их публикаций"} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default MainForm;
