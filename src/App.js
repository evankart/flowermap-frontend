import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddReview from "./components/add-review";
import FlowersList from "./components/flowers-list";
import Map from "./components/map";
import Flower from "./components/flower";
import Login from "./components/login";
import Navbar from "./components/navbar";

function App() {
  let user = "Evan";
  let login;

  return (
    <div className="bg-gray-500 h-screen">
      <Navbar />
      <div className="m-3 bg-panda rounded-lg  mx-auto py-1">
        <Routes>
          <Route path={"/flowers"} element={<FlowersList />} />
          <Route path={"/"} element={<FlowersList />} />

          <Route
            path={"/flowers/:id/review"}
            element={(props) => <AddReview {...props} user={user} />}
          />

          <Route path={"/flowers/:id/"} element={<Flower user={user} />} />

          <Route path={"/login"} element={<Login login={login} />} />

          <Route path={"/map"} element={<Map />} />

          {/* <Route path={"/flower"} element={<Flower />} /> */}
        </Routes>
      </div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </div>
  );
}
export default App;
