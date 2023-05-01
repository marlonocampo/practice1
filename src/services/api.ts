import axios from "axios"
import {RickMorty} from "../models/RickMorty"

const URL = 'https://rickandmortyapi.com/api/character/'

export function getDatos(): Promise<RickMorty[]> {
    return axios.get(URL + "?page=5").then(res => res.data.results);
}
