import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import TvShowsHeader from "./components/TvShowsHeader";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <MyNavBar />
        <TvShowsHeader className="bg-black text-light" />
        <MyMain className="flex-grow-1 bg-black text-light" />
        <MyFooter className="mt-auto fs-4" />
      </div>
    </>
  );
}

export default App;
