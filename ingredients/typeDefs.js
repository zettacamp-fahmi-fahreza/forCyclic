const { ApolloServer,gql } = require('apollo-server');
const {users,ingredients,recipes,transactionsSchema} = require('../schema');

const ingredientTypeDefs = gql`#graphql
type Ingredient{
    id: ID
    name: String
    stock: Int
    status: Enum
    is_used: Boolean
    }
type ingredientsPage{
    count: Int
    page: Int
    data: [Ingredient]
    max_page: Int
    }
type respondDelIngredient {
    message: String
    data: Ingredient
    }
type Mutation{
    addIngredient(name: String!,stock: Int!): Ingredient!
    updateIngredient(id: ID!,stock: Int name: String) : Ingredient!
    deleteIngredient(id: ID!) : respondDelIngredient
    }
type Query {
    getOneIngredient(id:ID!): Ingredient!
    getAllIngredient(name: String,stock: Int,page:Int, limit: Int): ingredientsPage
    }`

module.exports = {ingredientTypeDefs}