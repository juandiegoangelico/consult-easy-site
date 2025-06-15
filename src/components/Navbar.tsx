
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const menuItems = [
    { label: "Início", path: "/" },
    { label: "Sobre Nós", path: "/sobre" },
    { label: "Serviços para MEI", path: "/servicos-mei" },
    { label: "Depoimentos", path: "/depoimentos" },
    { label: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-heading font-bold text-jda">JDA Consult</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-jda-accent"
                    : "text-gray-700 hover:text-jda"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-jda hover:bg-jda-light">
              <Link to="/contato">Entre em Contato</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-jda"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 mt-2 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium px-2 py-1 rounded transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-jda-accent bg-gray-100"
                      : "text-gray-700 hover:text-jda hover:bg-gray-50"
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-jda hover:bg-jda-light w-full">
                <Link to="/contato" onClick={closeMenu}>
                  Entre em Contato
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
