import React, { Component } from "react";
class MovieReview extends Component {
  render() {
    let movieMappingUser = {};
    let i = 0;
    let profiles = this.props.profiles;
    profiles.forEach((element) => {
      i++; //Just for checking the number of times  the loop is running.
      const movieID = element.favoriteMovieID;
      if (movieMappingUser[element.favoriteMovieID]) {
        movieMappingUser[element.favoriteMovieID].push(element.userID);
      } else {
        movieMappingUser[element.favoriteMovieID] = [element.userID];
      }
    });
    return (
      <div>
        {console.log("MOVIE", movieMappingUser)}
        {console.log("i", i)}
      </div>
    );
  }
}
export default MovieReview;
