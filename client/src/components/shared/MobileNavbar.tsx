import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/assets/images/logo.svg";

const navItems = [
  { name: "Home", link: "/", hasSubmenu: false },
  { name: "Books", link: "/books", hasSubmenu: false },
  { name: "Trending", link: "/trending", hasSubmenu: false },
  { name: "Best Sell", link: "/bestSell", hasSubmenu: false },
  { name: "All Products", link: "/allProducts", hasSubmenu: false },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenSubMenu(null);
  };

  const handleSubmenuToggle = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <nav className=" bg-primary-bg fixed top-0 right-0 w-full z-50">
      <div className="container mx-auto lg:hidden flex items-center justify-between py-5 px-5">
        {/* Mobile Menu Button */}
        <img src={logo} alt="Logo" />
        <button className="md:hidden" onClick={toggleMenu}>
          {!isOpen && <Menu size={28} />}
        </button>

        {/* Mobile Menu (Sliding Panel) */}
        <div
          className={`fixed  top-2 left-0 h-full w-full shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden `}
        >
          <div className="p-6">
            {/* <img src={logo} alt="Logo" /> */}
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <X size={28} />
            </button>
            <ul className="mt-16 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <div
                    className="flex items-center justify-between cursor-pointer border-b pb-1 border-foreground"
                    onClick={() =>
                      item.hasSubmenu && handleSubmenuToggle(item.name)
                    }
                  >
                    <a
                      className="text-primary-text font-medium text-lg"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer section */}
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/icons/united-kingdom.png"
                  alt="UK"
                  className="w-6"
                />
                <img
                  src="/src/assets/icons/germany.png"
                  alt="Germany"
                  className="w-6"
                />
                <img
                  src="/src/assets/icons/italy.png"
                  alt="Italy"
                  className="w-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
