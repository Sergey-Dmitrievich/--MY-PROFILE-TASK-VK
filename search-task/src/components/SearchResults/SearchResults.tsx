import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults(props:string | any) {
  const users = () => {
    fetch(`https://dummyjson.com/users/search?q=${props.SearchResults}`)
    .then(response => response.json())
  };
  return (
    <div className="usersList">
        <UserCard UserCard={{users}} />
    </div>
  );
}
