import ApolloClient from "apollo-boost";
import { InMemoryCache } from '@apollo/client';

export const createClient = (shop, accessToken) => {
  return new ApolloClient({
    uri: `https://${shop}/admin/api/2020-10/graphql.json`,
    cache: new InMemoryCache(),
    request: operation => {
      operation.setContext({
        headers: {
          "X-Shopify-Access-Token": accessToken,
          "User-Agent": `shopify-app-node ${
            process.env.npm_package_version
          } | Shopify App CLI`
        }
      });
    }
  });
}


// export async function getStaticProps(){
  
//   const { data } = await createClient.query({
//     query: gql`
//       query Shop {
//         shop {
//           id
//           name
//           description
//         }
//       }
//     ` 
//   });

//   console.log("data: ", data);

//   return {
//     props: {
//       dataShop: []
//     }
//   }
// }

// export default function getProps({DataLaunches}){
//   console.log("DataLaunches array: ", DataLaunches);
//   return DataLaunches;//Array vazio
// }
