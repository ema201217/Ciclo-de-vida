import React from "react";
import fetch from "node-fetch";
import { MovieList } from "./MovieList";

export default class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      moviesList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/movies")
      .then((res) => res.json())
      .then((movies) => {
        console.log(movies);
        return this.setState({ moviesList: movies.data });
      })
      .catch((err) => alert(err));
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          All the movies in the Database
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                  </tr>
                </tfoot>
                <tbody>
					{
						this.state.moviesList.map((movie,index)=>(
							<MovieList {...movie} key={index}/>
						))
					}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
