# GraphQL-ChatApp

FullStack chat application utilizing 

## Built With 

- ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

- ![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Getting Started

### PreRequest
to run this project you will need 
- node version 16 or later
  https://nodejs.org/en/
- npm 

  ```
  npm install npm@latest -g
  ```
  
  ### Installation
 
 1. clone repo
 
     ```
       https://github.com/DariusDeah/GraphQL-ChatApp.git
      ```
 2. install dependecies
 
    ```
    npm install 
    ```
    
 3. set up Config
      - paste the following in a created file called config and change configuration properties 
        - connection string should be your mongodb atlas connection string
        - coookie secrets should be your unique inputs for best security 
        
      ```
      export const DB_CONFIG = {
      connection_string: `your db connection string goes here`,
    };
    
    export const API_CONFIG = {
    PORT: 5000,
    };
    
    export const COOKIE_CONFIG = {
      secret1: "secret",
      secret2: "secret-again",
    };
    
    ```

4. Start Server

  - npm 
  
      ```
      npm run dev
      ```
  - yarn
  
      ```
      yarn run dev
      ```
      
