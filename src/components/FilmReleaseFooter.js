import React from 'react';

function FilmReleaseFooter() {
  return (
    <button onClick = {() => {window.open("https://www.imdb.com/calendar/?region=gb")}}>View more upcoming releases</button>
  )
}

export default FilmReleaseFooter;