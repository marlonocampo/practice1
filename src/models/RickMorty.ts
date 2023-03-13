interface RickMorty{
    id: number,
    name: string,
    description: string,
    imageUrl: string
}

export interface api{
    results : RickMorty[]
}