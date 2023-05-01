export interface RickMorty{
    id: number,
    name: string,
    type: string,
    image: string,
    species: string,
    location: Location
}

interface Location {
    name: string
}