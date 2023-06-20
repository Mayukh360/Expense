const sequelize = require('../database/database');

const Sequelize =require('sequelize');

const Product= sequelize.define('product',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey:true
    },
    expense: Sequelize.STRING,
 
    price:{
        type:Sequelize.DOUBLE,
        allowNull:false
      },
      category: {
        type:Sequelize.STRING,
      allowNull:false
      },
   
  })
  
  module.exports=Product;