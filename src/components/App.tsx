import "../assets/index.css"
import { useEffect, useState } from "react"
export function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className="m-5 p-1">
                <div className="prose">
                    <h1>Rick and Morty</h1>
                    <p>Lazy loading Test, TyspeScript and apiFetching </p>
                </div>
                <div className="flex justify-center">
                    <button className="btn rounded-full">Rick and Morty</button>
                </div>
            </div>
        </>
    )
}