import "../assets/index.css"
import React, {lazy, useEffect, useState, Suspense} from "react"
import {RickMorty} from "../models/RickMorty";
import {getDatos} from "../services/api"

const Cards = lazy(() => import('./Cards'));

export function App(): JSX.Element {
  const [datos, setDatos] = useState<RickMorty[]>([]);
  const [error, setError] = useState({});

  useEffect(() => {
    getDatos()
      .then((res: RickMorty[]) => {
        setDatos(res)
      })
      .catch(error => console.log(error))
    console.log(datos)
  }, [])

  return (
    <>
      <div className={'grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}>
        <Suspense fallback={<div>..loading</div>}>
          {datos.map((dato: RickMorty) => {
            return <Cards key={dato.id} {...dato} />
          })}
        </Suspense>
      </div>
      <div className="flex justify-center">
        <button className="btn rounded-full">Rick and Morty</button>
      </div>
    </>
  )
}
