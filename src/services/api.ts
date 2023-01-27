import axios from "axios"
interface rickmorty {
    id: number,
    name: string,
    gender: string,
    image: string
}

const URL = 'https://rickandmortyapi.com/api/character/'

export function RickAndMorty(): Promise<rickmorty[]> {
    return axios.get(URL + "50").then(res => res.json())
}