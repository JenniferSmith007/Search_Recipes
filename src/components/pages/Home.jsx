import { Navbar } from "../Navbar";
import {RecipesList} from '../RecipesList'
// import { Search } from "../features/Search";
export const Home = () => {
  let logo = 'Recip-Easy'
  


  return (
    <div className="home_page">
      <Navbar />
    <h1>{logo}</h1>
    {/* <Search /> */}
   <RecipesList />
   
    </div>
  );
};




     
      