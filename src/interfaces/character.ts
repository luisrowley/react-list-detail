export interface Character {
    id: number;
    name: string;
    thumbnail?: string;
    age?: number;
    height?: number;
    weight?: number;
    professions?: string[];
    friends?: string[];
}