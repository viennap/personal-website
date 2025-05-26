import { NavLink } from "react-router-dom";
import pixelCat from '../assets/pixel_cat.png';

function Navbar() {
  return (
    <div className = "flex flex-row mt-10 p-20 mb-10">
        <div className = "fixed left-[30%]">
            <img src={pixelCat} alt="Pixel Cat" className="w-20 h-auto mt-8" />
        </div>
        <nav className="fixed right-[30%] flex flex-col space-y-1 text-sm">
            {["Home", "About", "Work", "Projects", "Travel"].map((label) => {
                const path = label === "Home" ? "/" : `/${label.toLowerCase()}`;
                return (
                <NavLink
                    key={label}
                    to={path}
                    className={({ isActive }) =>
                    `hover:underline transition text-right ${
                        isActive ? "font-semibold" : "text-gray-500"
                    }`
                    }
                >
                    {label}
                </NavLink>
                );
            })}
        </nav>
    </div>
  );
}

export default Navbar;
