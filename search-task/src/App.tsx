import { useState } from "react";
import { SearchResults } from "./components/SearchResults/SearchResults";
import "./app.css";

export default function App() {
  const [SearchInfo, setSearchInfo] = useState('');
  const [SearchInfoMain] = useState (SearchInfo);
  console.log(SearchInfo) 
  return (
    <div className="searchForm">
      <form>
          <input
           type="text"
           name='searchForm_User'
           value={SearchInfo}
           onChange={(e) => setSearchInfo(e.target.value)} />
      </form>
      <SearchResults SearchResults:String ={{SearchInfoMain}}/>
    </div>
  );
}
