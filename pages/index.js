import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';
import {gql} from 'apollo-boost';
import ListProducts from './components/ListProducts';
import SearchProducts from './components/SearchProducts';
import {useQuery} from '@apollo/react-hooks';

const GET_PRODUCTS = gql` 
  query {
    shop {
      id
      name
      description
      products(first: 36) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        } 
        edges {
          node {
            id
            title
            vendor
            options {
              name
              values
            }
            variants(first: 5) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
            images(first: 1) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  altText
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  }
` 

export default function Index() { 
  const {loading, error, data} = useQuery(GET_PRODUCTS);
  const [orderDir, setOrderDir] = useState('asc');
  const [orderBy, setOrderBy] = useState('title');
  const [queryText, setQueryText] = useState('');
  let pdtsFiltered = [];
  let order;
  
  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
    
  if (error) {
    return (
      <p>Error</p>
    );
  }
  
  if(orderDir === 'asc'){
    order = 1;
  } else {
    order = -1;
  }

  function changeOrder(order, dir){
    setOrderBy(order);
    setOrderDir(dir);
  }

  function searchPdts(query){
    setQueryText(query);
  }

  pdtsFiltered = data.shop.products.edges.sort((a, b) => {
    if(a.node[orderBy] < b.node[orderBy]){
      return -1 * order;
    } else {
      return 1 * order;
    }
  })
  .filter(eachItem => {
    return (
      eachItem.node.title.toLowerCase().includes(queryText.toLowerCase()) ||
      eachItem.node.vendor.toLowerCase().includes(queryText.toLowerCase()) 
    );
  });  

  return (
    <div className="App">
      <header className="App__header">
        <div className="App__title">
          <h1>{data.shop.name}: Filter App - Version 3.0</h1>
        </div>
      </header>
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SearchProducts 
                  orderBy={orderBy} 
                  orderDir={orderDir}
                  changeOrder={changeOrder}
                  searchPdts={searchPdts}
                />

                <div className="Product-wrapper">
                  { 
                    pdtsFiltered.map(product => 
                      <ListProducts 
                        key={product.node.id.toString()} 
                        product={product.node} 
                      />
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="container d-flex text-white py-2">
        <p>
          All contents &copy; 2021 -
          <a href="#">Image Direct</a> - All rights reserved.
        </p>
      </footer>
    </div>  
  );
}

 


// JSON - Script
// "dev": "cross-env NODE_ENV=development nodemon ./server/index.js --watch ./server/index.js",
//     "build": "NEXT_TELEMETRY_DISABLED=1 next build",
//     "start": "cross-env NODE_ENV=production node ./server/index.js"