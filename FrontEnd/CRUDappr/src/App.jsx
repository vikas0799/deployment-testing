import React from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      alldata: [],
      singledata: {
        title: "",
        author: ""
      }
    };
    this.getLists = this.getLists.bind(this);
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this);
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getLists() {
    this.setState({ loading: true }, () => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
    });
  }

  handleChange(event) {
    var title = this.state.singledata.title;
    var author = this.state.singledata.author;
    if (event.target.name === "title") title = event.target.value;
    else author = event.target.value;

    this.setState({
      singledata: {
        title: title,
        author: author
      }
    });
  }

  createList() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    }).then(
      this.setState({
        singledata: {
          title: "",
          author: ""
        }
      })
    );
  }

  getList(event, id) {
    this.setState(
      {
        singledata: {
          title: "Loading...",
          author: "Loading..."
        }
      },
      () => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
          .then(res => res.json())
          .then(result => {
            this.setState({
              singledata: {
                title: result.title,
                author: result.author ? result.author : ""
              }
            });
          });
      }
    );
  }

  updateList(event, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.singledata)
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            title: "",
            author: ""
          }
        });
        this.getLists();
      });
  }

  deleteList(event, id) {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(result => {
        this.setState({
          singledata: {
            title: "",
            author: ""
          }
        });
        this.getLists();
      });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <Lists
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getList={this.getList}
        updateList={this.updateList}
        deleteList={this.deleteList}
        handleChange={this.handleChange}
      />
    );
    return (
      <div className="container">
        <span className="title-bar">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.getLists}
          >
            Get Lists
          </button>
          <CreateList
            singledata={this.state.singledata}
            createList={this.createList}
            handleChange={this.handleChange}
          />
        </span>
        <br />
        {listTable}
      </div>
    );
  }
}

export default App;
