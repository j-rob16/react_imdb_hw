import React from "react";

function FilmReleaseItem({name, url}) {

  return (
    <>
      <h3><a href={url}>{name}</a></h3>  
    </>
  )
}

export default FilmReleaseItem;