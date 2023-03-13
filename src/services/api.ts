import axios from "axios"
import { api } from "../models/RickMorty"

const URL = 'https://rickandmortyapi.com/api/character/'

export async function getDatos(): Promise<api> {
    const response: Promise<api> = await axios.get(URL + "?page=19").then(res => res.data.results)
    return await rickmortyAdapter(response)
}

const rickmortyAdapter = async (response: Promise<api>): Promise<api> => {
    return response
}
