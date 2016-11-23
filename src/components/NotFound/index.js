import React from 'react'

const NotFound = ({ location }) => (
  <div>
    <h2>Stai asa!</h2>
    <p>Pagina {location.pathname} nu e de pe situl nostru. Poate la alt minister.</p>
  </div>
)

export default NotFound
