import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import BookList from "./Books/BookList";
import { books } from "./Books/Bookdata";
import BookCard from "./Books/BookCard";
const App = () => {
  return (
  <> 
  <Header logo="ELIAS BEKELE"/> 
  <main>
    <div className="boxes"> 
    {books.map(book => (
      <BookCard key={books.id} {...book} // Instead of making every componet here it is easy to use spread operator. 
      />
    ))}
    <BookList />
    </div>
  </main> 
<Footer year={2025}/>
  </> 
  );
};
export default App;
 
