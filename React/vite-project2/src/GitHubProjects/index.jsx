import { useState, useEffect } from "react";
import axios from "axios";

function GitHubProjects() {
  const [people, setPeople] = useState([]);

  //fetch api. axios
  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
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
    </div>
  );
}

export default GitHubProjects;
