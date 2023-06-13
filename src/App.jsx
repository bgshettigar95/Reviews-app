import { useState } from "react";
import data from "./data";
import Reviews from "./components/Reviews";
import { FaBeer } from "react-icons/fa";

const App = () => {
  const [reviews, setReviews] = useState(data);
  return (
    <main>
      <Reviews reviews={reviews} />
    </main>
  );
};
export default App;
