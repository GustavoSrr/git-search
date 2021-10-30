import { createContext, useState, FC } from "react";

type User = {
  name: string;
  nickname: string;
  avatar: string;
  followers: number;
  following: number;
};

type SearchState = {
  user: User | undefined
  searchUser: (query: string) => void;
};

const SearchStateDefaultValue: SearchState = {
  user: undefined,
  searchUser: () => {},
};

export const SearchContext = createContext<SearchState>(SearchStateDefaultValue);

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>()

  const searchUser = async (query: string) => {
    const res = await fetch(`https://api.github.com/users/${query}`);
    const result = await res.json();

    setUser({
      name: result.login,
      nickname: result.name,
      avatar: result.avatar_url,
      followers: result.followers,
      following: result.following
    })

    console.log(user);
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
