import React, {useState} from 'react'

function Client() {

  const [res, setRes] = useState(false);
  const [load, setLoad] = useState(true);

  setLoad(false)

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
  .then(() => setLoad(true))
   .catch(error => setRes(false))





  return (
    <div>
      
    </div>
  )
}

export default Client

