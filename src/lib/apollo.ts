import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
  cache: new InMemoryCache(),
});


export const GET_ALL_DATA = gql`
  query {
    userPicture
    favoriteBooks {
      id
      name
      cover
      author {
        name
      }
    }
    favoriteAuthors {
      id
      name
      picture
      booksCount
    }
    allBooks {
      id
      name
      author {
        id
        name
      }
      cover
      category
    }
  }
`;

export const GET_BOOK_DATA = (bookId: string | undefined) => gql`
query {
userPicture
book(id: "${bookId}") {
name
author {
name
}
cover
description
isFavorite
}
}
`;