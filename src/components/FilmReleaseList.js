import React from 'react';
import FilmReleaseItem from './FilmReleaseItem';

function FilmReleaseList({films}) {

  const filmNodes = films.map(film => (
    <FilmReleaseItem
      key={film.id}
      name={film.name}
      url={film.url}
    />
  ))

  return (
    <>
      {filmNodes}
    </>
  );
}

export default FilmReleaseList;