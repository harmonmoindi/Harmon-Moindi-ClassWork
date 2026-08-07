import { useState } from "react";
import axios from "axios";

function TopNav(props) {
  const { setPeople } = props;
  const [search, setSearch] = useState("");

  const onSearch = async () => {
    try {
      const trimmedString = search.trim();
      if (trimmedString === "" || trimmedString.length < 3) {
        return;
      }
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/search/users",
        headers: {
          Authorization: `Bearer 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`,
          Accept: "application/vnd.github+json",
        },
        params: {
          q: trimmedString,
        },
      });
      setPeople(response.data.items);
    } catch (e) {
      console.error("Search failed:", e);
    }
  };

  return (
    <div className="" style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: "40px" }}
        src="data:image/png;base64,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"
      />
      <input
        style={{ width: "50vw", marginLeft: "1em" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default TopNav;
