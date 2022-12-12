import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import User from "./pages/User";
import Projects from "./pages/Projects";
import Coworkers from "./pages/Coworkers";
import IndividualProject from "./pages/IndividualProject";
import IndividualTask from "./pages/IndividualTask";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
              path="/" 
              element={<Home />} 
              />
              <Route 
              path="/signup" 
              element={<Signup />} 
              />
              <Route 
              path="/user" 
              element={<User />} 
              />
              <Route 
              path="/projects" 
              element={<Projects />} 
              />
              <Route 
              path="/users/:username" 
              element={<User />} 
              />
              <Route 
              path="/users/:username/:coworkers" 
              element={<Coworkers />}
              />
              <Route 
              path="/projects/:projectId"
                element={<IndividualProject />}
              />
              <Route
                path="/projects/:projectId"
                element={<IndividualProject />}
              />
              <Route
                path="/projects/:projectId/:taskID"
                element={<IndividualTask />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      {console.log("Hello There")}
    </ApolloProvider>
  );
}

export default App;
