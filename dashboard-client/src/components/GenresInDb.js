import React, { Component } from "react";
import Genre from "./Genre";
import fetch from "node-fetch";

export default class GenresInDb extends Component {
  constructor() {
    super();
    this.state = {
      genresList: [],
      fondoCaja: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/genres")
      .then((res) => res.json())
      .then((genres) => {
        console.log(genres);
        return this.setState({ genresList: genres.data });
      })
      .catch((err) => alert(err));
  }

  render() {
    const agregarFondoCaja = (e) => {
      this.setState({ fondoCaja: "bg-secondary" });
    };
     const quitarFondoCaja = () => {
         this.setState({ fondoCaja: ""})
     }

    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6
                className="m-0 font-weight-bold text-gray-800"
                onMouseOver={agregarFondoCaja}
                onMouseOut={quitarFondoCaja}
              >
                Genres in Data Base
              </h6>
            </div>
            <div className={`card-body ${this.state.fondoCaja}`}>
              <div className="row">
                {this.state.genresList.map((genre, index) => (
                  <Genre {...genre} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
