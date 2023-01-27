import "../assets/index.css"
import { useEffect, useState } from "react"
export function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="m-5 p-1">
                <div className="prose m-5">
                    <h1>Rick and Morty</h1>
                    <p>Lazy loading Test, TyspeScript and apiFetching </p>
                </div>
                <div className="flex">
                    <div className="card bg-base-200 rounded-xl shadow-xl">
                        <figure>
                            <img src="https://rickandmortyapi.com/api/character/avatar/50.jpeg" alt="" />
                        </figure>
                        <div className="card-body shadow-xl">
                            <h3 className="card-title">
                                asdf
                            </h3>
                            <p>descr</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="btn rounded-full">Rick and Morty</button>
                </div>
            </div>
        </>
    )
}