const { ApolloServer,gql } = require('apollo-server');
const {users,ingredients,recipes,transactionsSchema} = require('../schema');

const recipeTypeDefs = gql`

    type ingredientId{
    ingredient_id: Ingredient
    stock_used: Int
    }
    input ingredientInput{
    ingredient_id: ID
    stock_used: Int
    }
    type recipePage{
    count: Int
    page: Int
    max_page: Int
    data: [Recipe]
    }
    enum Category {
        food
        drink
    }
    enum enumRecipe {
    active
    deleted
    unpublished
    }
    enum Publish {
        unpublished
        published
    }

    type recipeSort{
        recipe_name: enumSorting
    }
    input recipeSorting{
        recipe_name: enumSorting
    }
    type Recipe {
    id: ID
    recipe_name: String
    ingredients:[ingredientId]
    price: Int
    status: enumRecipe
    available: Int
    img: String
    description: String
    category: Category
    # sort: recipeSort
    # publish_status: Publish
    }
    type respondDelRecipe{
    message: String
    data: Recipe
    }

type Query {
    getActiveMenu(recipe_name: String,page: Int,limit: Int  input: recipeSorting): recipePage!
    getAllRecipes(recipe_name: String page: Int,limit: Int input: recipeSorting): recipePage!

    getOneRecipe(id:ID!): Recipe
}
type Mutation {
    createRecipe(recipe_name: String! category: Category  img: String description: String price: Int! input:[ingredientInput]) : Recipe!
    updateRecipe(id:ID! recipe_name: String img: String status: enumRecipe description: String price: Int input:[ingredientInput]): Recipe!
    deleteRecipe(id: ID!): respondDelRecipe!
}`

module.exports = {recipeTypeDefs}