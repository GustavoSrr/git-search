import { createContext, useState, FC } from "react";

type User = {
  login: string;
  nickname: string;
  bio?: string;
  avatar: string;
  followers: number;
  following: number;
  location?: string;
  company?: string;
  email?: string;
  twitter?: string;
  blog?: string;
};

type SearchState = {
  user: User | undefined;
  searchUser: (query: string) => void;
};

export const SearchContext = createContext<SearchState>({} as SearchState);

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>()

  const searchUser = async (query: string) => {
    const res = await fetch(`https://api.github.com/users/${query}`);
    const result = await res.json();

    setUser({
      login: result.login,
      nickname: result.name,
      bio: result.bio,
      avatar: result.avatar_url,
      followers: result.followers,
      following: result.following,
      location: result.location,
      company: result.company,
      email: result.email,
      twitter: result.twitter_username,
      blog: result.blog
    })
  };

  return (
    <SearchContext.Provider
      value={{
        user,
        searchUser
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default UserProvider;
