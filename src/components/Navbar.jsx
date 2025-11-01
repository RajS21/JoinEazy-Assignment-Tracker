import { Link } from "react-router-dom";

// Top navigation bar for switching between pages
function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* App title / logo */}
      <Link to="/" className="text-xl font-semibold hover:text-gray-200 transition-colors">
        📘 JoinEazy
      </Link>

      {/* Navigation links */}
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/student" className="hover:underline">
          Student
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
