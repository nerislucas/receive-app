export interface Ingredient {
    ingredient: string;
    measure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recipe {
    constructor(id: number
        , title: string
        , description: string
        , feedsMany: number
        , preparationTime: number
        , ingredients: Ingredient[]
        , instructions: Instruction[]
        , coverPhoto: string
        , keywords: string[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.feedsMany = feedsMany;
        this.preparationTime = preparationTime;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.coverPhoto = coverPhoto;
        this.keywords = keywords;
    }

    public id: number;
    public title: string;
    public description: string;
    public feedsMany: number;
    public preparationTime: number;
    public ingredients: Ingredient[];
    public instructions: Instruction[];
    public coverPhoto: string;
    public keywords: string[];

    public static recipeFromJson(obj: any): Recipe {
        return JSON.parse(JSON.stringify(obj)) as Recipe;
    }

    public static getEmptyRecipe(): Recipe {
        return new this(-1, '', '', undefined, undefined, null, null, '', null);
    }
}
