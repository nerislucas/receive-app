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
        , feedsMany: number
        , preparationTime: number
        , ingredients: Ingredient[]
        , instructions: Instruction[]
        , coverPhoto: string) {
        this.title = title;
        this.description = description;
        this.feedsMany = feedsMany;
        this.preparationTime = preparationTime;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.coverPhoto = coverPhoto;
    }

    public title: string;
    public description: string;
    public feedsMany: number;
    public preparationTime: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public coverPhoto: string;

    public static getEmptyRecipe(): Recipe {
        return new this('', '', undefined, undefined, null, null, '');
    }
}
