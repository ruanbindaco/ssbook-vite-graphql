export interface FavoriteBooksProps {
  id: string;
  cover: string;
  name: string;
  author: {
    name: string;
  };
}

export interface FavoriteAuthorsProps {
  id: string;
  picture: string;
  name: string;
  booksCount: number;
}

export interface AllBooksProps {
  author: {
    id: string;
    name: string;
  };
  category: string;
  cover: string;
  id: string;
  name: string;
}

export interface HomeProps {
  favoriteBooks: FavoriteBooksProps[];
  allBooks: AllBooksProps[];
  allAuthors: any;
  favoriteAuthors: FavoriteAuthorsProps[];
  userPicture: string;
}

export interface HomeQueryProps {
  data: HomeProps | undefined;
  isLoading: boolean;
}

export type BookInfoProps = {
  id: string;
  name: string;
  author: {
    name: string;
  };
  cover: string;
  description: string;
  isFavorite: boolean;
};
