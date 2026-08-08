import { useState, useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import UserCard from "./UserCard";

function GitHubProjects() {
  const [people, setPeople] = useState([]);

  //fetch api. axios
  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
        headers: {
          Authorization: `Bearer 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`,
          Accept: "application/vnd.github+json",
        },
      });
      setPeople(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("people", people);

  useEffect(() => {
    getUserData();
  }, []);

  //lifecycle method. github project.
  return (
    <div>
      <h1>GitHub Projects</h1>
      <TopNav setPeople={setPeople} />
      <div
        style={{ backgroundColor: "black", width: "100%", height: "1px" }}
      ></div>
      <InfoSection people={people} />
      {people.map((person) => (
        <UserCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default GitHubProjects;
