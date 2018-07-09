export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    constructor(title: string
        , description: string
        , ingredients: Ingredient[]
        , instructions: Instruction[]
        , coverPhoto: string) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.coverPhoto = coverPhoto;
    }

    public title: string;
    public description: string;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public coverPhoto: string;
}
