import React, {useState, useEffect} from 'react'

function Client() {

  const [res, setRes] = useState(false);

  fetch('./api/pets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'name',
      'isVaccinated': ''
    })
  })

  .then(res => setRes(true))
   .catch(error => setRes(false))





  return (
    <div>
      
    </div>
  )
}

export default Client

