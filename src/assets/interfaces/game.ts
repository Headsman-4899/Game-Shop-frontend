export interface Game {
    id?: number,
    name: string,
    category: string,
    description: string,
    image: string,
    requirements: string,
    requirements2?: string[]
}