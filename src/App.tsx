import { useEffect, useState } from 'react'
import './App.css'

interface spaceship {
  "id": string,
  "spaceshipName": string,
  "captain": string,
  "crew": number,
  "size": number,
  "world": string
}

function App() {

  const [spaceships, setSpaceships] = useState<spaceship[]>([]);

  useEffect(() => {
    fetch("https://urchin-app-3-3y6an.ondigitalocean.app/spaceships")
    .then(res => res.json())
    .then(data => setSpaceships(data));
  }, [])

  return (
    <>
     <h1>Hello Spaceships</h1>
     {spaceships.map((spaceship: spaceship) => (
      <div key={spaceship.id}>{spaceship.spaceshipName}</div>
     ))}
    </>
  )
}

export default App
