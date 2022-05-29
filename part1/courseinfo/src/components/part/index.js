import React from 'react';

const Part = ({part, exercises, ...rest}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

export default Part;
