import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Product from './components/Product';
import SearchProducts from './components/SearchProducts';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

const query = gql`
  query query {
    shop {
    name
    description
    products(first: 12) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          options {
            name
            values
          }
          variants(first: 12) {
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

`; 

const Index = () => {    
  const { loading:shopLoading, error:shopError, data:shopData } = useQuery(query);
  const [orderBy, setOrderBy] = useState('productName');//shopData.shop.products.edges.node.title
  const [orderDir, setOrderDir] = useState('asc');
  const [queryText, setQueryText] = useState('');
  const [hidden, setHidden] = useState(true);
  // const [arrayProducts, setMyProducts] = useState([]);
  let order, filteredPdts = [];
  
  // Is shop undefined by console? Why? (Sometimes happen sometimes not)
  // console.log("Obj Shop: " + shopData.shop); 
  
  // Edges = is an array of objects ?
  // console.log("Obj Edges: " + shopData.shop.products.edges);

  filteredPdts.push(shopData.shop.products.edges);
  
  console.log("Obj products: " + filteredPdts);

  // filteredPdts = arrayProducts;

  //My Old code below

  // filteredPdts = filteredPdts.sort((a, b) => {
  //     if(a[orderBy].toLowerCase() <
  //       b[orderBy].toLowerCase()
  //       ){
  //         return -1 * order;
  //       } else {
  //         return 1 * order;
  //       }
  //   })
    // .filter(eachItem => {
    //   return (
    //     eachItem['title']
    //     .toLowerCase()
    //     .includes(queryText.toLowerCase()) ||
    //     eachItem['vendor']
    //     .toLowerCase()
    //     .includes(queryText.toLowerCase()) ||
    //     eachItem['price']
    //     .toLowerCase()
    //     .includes(queryText.toLowerCase())
    //   )
    // })
    //;

  if(orderDir === 'asc'){
    order = 1;
  } else {
    order = -1;
  }

  if (shopLoading) {
    return <p>Loading...</p>;
  }  
  if (shopError) {
    return <p>{shopError.message}</p>;
  }

  function changeOrder(order, dir) {
    setOrderBy(order);
    setOrderDir(dir);
  }

  function searchPdts() {
    setQueryText(queryText);
  }

  function handleOpenCloseDropdown() {
    setHidden(!hidden);
  }

  

  return (
    <div className="App">
      <header className="App__header">
        <div className="App__title">
          <h1>{shopData.shop.name}: Filter App - Version 3.0</h1>
          <h2>{shopData.shop.description}</h2>
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
                  handleOpenCloseDropdown={handleOpenCloseDropdown}
                  hidden={hidden}
                />

                <div className="Product-wrapper">
                  { 
                    shopData.shop.products.edges.map(product => 
                      <Product 
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
          All contents &copy; 2020 -
          <a href="#">Image Direct</a> - All rights reserved.
        </p>
      </footer>
    </div>  
  );
}
 
export default Index;
