import AllNews from './components/AllNews';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopHeadlines from './components/top-Headlines';
import Footer from './components/footer';
function App() {
  return (
    <> 
       <BrowserRouter> 
    <Header/>
    <div>

      <main className="max-w-7xl mx-auto px-4 mt-24 sm:px-6 lg:px-8 py-8">
      <Routes>
      <Route path="/" element={<AllNews />} />
      <Route path="/top-headlines/:category" element={<TopHeadlines />} />
      </Routes>
      </main>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;