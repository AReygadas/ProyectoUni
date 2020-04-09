'use strict'

import { graphql, buildSchema } from "graphql"

const {graphql, buildSchema} = require('graphql')

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

graphql(schema, '{hello}').then((data) =>{
    console.log(data)  
})