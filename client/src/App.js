import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Route> 
        <div>
        <SavedList list={this.state.savedList} />
        <Route exact path='/'component={MovieList}/>
        <Route exact path='/movies/2:id'component={Movie} />
        <Route exact path='/movies/3:id'component={Movie} />
        <div> Replace this Div with your Routes </div>
        </div>
      </Route>
    );

     
     
  }
}
