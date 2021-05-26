import { Component } from "react";
import { Link, RouteComponentProps } from "react-router-dom";

import { ListItem, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Image from "../download.jpeg";

import ListDataService from "../services/list.service";
import "../App.scss";

type MyState = { data: any };

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

class Details extends Component<Props, MyState> {
  constructor(props: any) {
    super(props);
    this.retrieveData = this.retrieveData.bind(this);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.retrieveData(this.props.match.params.id);
  }

  retrieveData(id: string) {
    ListDataService.get(id)
      .then((response) => {
        this.setState({
          data: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  ListItemLink() {
    return <ListItem button component="a" {...this.props} />;
  }
  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="back-button-wrapper">
          <Button
            variant="contained"
            color="primary"
            startIcon={<ArrowBackIcon />}
            component={Link}
            to="/list"
          >
            Back
          </Button>
        </div>
        <div className="Deatils-header">
          <h1>Details</h1>
        </div>
        <div className="item-container">
          <div className="item-wrapper">
            <div className="image-container">
              <img alt="item" src={Image} />
            </div>
            <div className="info-container">
            <h2>User Id : {data.userId}</h2>
            <strong>Title : {data.title}</strong>
            <p>Details : {data.body}</p>

            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Details;
