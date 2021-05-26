import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "../App.scss";


export default function ButtonAppBar() {

  return (
    <div className="Header-root">
      <AppBar position="static">
        <Toolbar>
          <Typography className="Header-name" variant="h6">
            <img alt="Coverfox.com" src="https://assets.coverfox.com/static/global/img/logos/cf-dark-orange-h31.7b0379299356.svg"/>
          </Typography>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}
