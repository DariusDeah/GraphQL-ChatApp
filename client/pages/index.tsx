import type { NextPage } from "next";
import Nav from "../components/Nav/Nav";
import SearchBar from "../components/SearchBar/SearchBar";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div
        style={{
          marginTop: "6rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </div>
      <h1>THe</h1>
    </div>
  );
};

export default Home;
