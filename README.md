# Pizza House 

 Pizza House is a dummy application that I practiced my frontend skills in React.ts and learned Chakra UI in restaurant app concept.
 
## App Features

    * The user account doesn't needed. This is super fast restaurant application that doesn't need for user authentication or payment processes.
    * Payments are going to be made when order arrived client's address. The pizza menu can change, so there data must be loaded from an API. 
    * Clients can order multiple pizzas, therefore, there will be cart transactions. Order process just need to client's name, phone number and current address.
    * Clients can type their address or provide their GPS location, can mark their orders as "priority" for an additional 20% of the cart price.
    * Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
    * Orders will have their unique id as generated by app. Clients will be able to control their order.

   ### After The BETA

    * Users will be able to sign up and get authenticated.
    * "" will be able to use online payment systems such as Google Pay etc.
    * "" will be able to get discount by scanning QR codes or special loyalty algorithm.

## Page Categories and Route Map

1. Landing and Home Page -> /
2. Menu -> /menu
3. Cart -> /cart
4. Orders -> /order
 * Create Order -> order/new
 * User Info -> /order/user
 * Control Order -> /order/:id

## State Management

1. Landing and Home Page -> Global UI, no accounts, stored in app
2. Menu -> Remote State, fetched from API
3. Cart -> Global UI, no need for API, just stored in app
4. Order -> Global Remote, fetched and submitted to API


## Technology Stack

- UI: Chakra UI,
- State Management: Redux Toolkit
- Routing: React Router,
- Bundler: Vite,
- Framework: React
- Language: TypeScript
- Package Manager: pnpm
