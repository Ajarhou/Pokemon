import React from 'react'

const Pagination = ({ next, previous }) => {
  return (
    <div>
        {previous && (
            <button onClick={previous} type="button">previous</button>
        )}
        {next && (<button onClick={next} type="button">next</button>)}

        


    </div>
  )
}

export default Pagination