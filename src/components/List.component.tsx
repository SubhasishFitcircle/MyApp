import { Component } from "react";
import { Link } from "react-router-dom";

import { ListItem } from "@material-ui/core";

import ListDataService from "../services/list.service";
import "../App.scss";

type MyState = { list: any[] };

class List extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.retrieveList = this.retrieveList.bind(this);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.retrieveList();
  }

  retrieveList() {
    ListDataService.getAll()
      .then((response) => {
        this.setState({
          list: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="ta-c">
        <h2>List</h2>
        <div className="List-container">
            <div className="list-group">
              {list &&
                list.map((item: any, index: number) => (
                  <Link className="list-item" to={`/details/${item.id}`}>
                    <ListItem divider button key={index}>
                        {item.title}
                    </ListItem>
                  </Link>
                ))}
            </div>
      </div>
      </div>
    );
  }
}

export default List;
