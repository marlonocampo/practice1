import React from "react";
import {RickMorty} from "../models/RickMorty";

export default function Cards({id, name, type, image, species, location}: RickMorty): JSX.Element {
  return (
    <>
      <div className={'flex justify-center items-center'}>
        <div className="m-5 p-1 w-80">
          <div className="prose m-5">
            <h1>{id}. {name}</h1>
            <p>Lazy loading Test, TyspeScript and apiFetching </p>
          </div>
          <div className="justify-center">
            <div className="card bg-base-200 rounded-xl shadow-xl">
              <div className="avatar justify-center m-4">
                <div className="w-44 rounded-full">
                  <img src={image} alt="image of post"/>
                </div>
              </div>
              <div className="card-body shadow-xl">
                <h3 className="card-title">
                  {location.name}
                </h3>
                <p className="card-title ">
                  {species}
                </p>
                <p>{type}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}