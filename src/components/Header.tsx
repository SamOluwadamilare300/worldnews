import { useState } from "react";
import { Link } from 'react-router-dom';
import { ArrowDownCircle } from 'lucide-react';

const Header = () => {
  const [active, setActive] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-auto backdrop-blur-md bg-opacity-80 bg-white/30 rounded-b-lg shadow-lg z-10 flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-900">Global News</h1>

        {/* Navigation Links */}
        <ul className={`flex gap-6 ${active ? "flex-col absolute top-16 left-0 w-full bg-white py-4" : "hidden lg:flex"}`}>
          <li>
            <Link className="no-underline font-semibold text-black hover:text-blue-600 transition-colors" to="/" onClick={() => setActive(false)}>Top Stories</Link>
          </li>
          <li className="relative">
            <button className="no-underline font-semibold flex items-center gap-2 text-black hover:text-blue-600 transition-colors" onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
              Top-Headlines <ArrowDownCircle className={showCategoryDropdown ? "transform rotate-180" : ""} />
            </button>
            {showCategoryDropdown && (
              <ul className="absolute top-full left-0 mt-2 p-2 bg-white border rounded-lg shadow-lg">
                {category.map((element, index) => (
                  <li key={index} onClick={() => setShowCategoryDropdown(false)}>
                    <Link to={`/top-headlines/${element}`} className="block px-4 py-2 text-black hover:text-blue-600 transition-colors">
                      {element}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="lg:hidden" onClick={() => setActive(!active)}>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;