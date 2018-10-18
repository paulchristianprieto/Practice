import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";

class SemanticFontSample extends Component {
  render() {
    return (
      <div>
        <Icon>add_circle</Icon>
        <Typography variant="srOnly">Create a user</Typography>
      </div>
    );
  }
}

export default SemanticFontSample;
