import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { Menu, X } from "lucide-react";
import logo from "../assets/cowlogo.jpg";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuItems = (
    <>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-600 block py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        About Us
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-600 block py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact
      </Link>
      <Link
        to="faq"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-600 block py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        FAQ
      </Link>
      <Link
        to="testimonial"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-600 block py-2"
        onClick={() => setMobileMenuOpen(false)}
      >
        Testimonial
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 hover:bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          <img src={logo} alt="Cow-horn" className="h-10 w-10 rounded-full" />
          <span className="text-xl font-bold text-amber-600">Cow Horn</span>
        </div>

        <nav className="hidden md:flex space-x-5 text-sm text-amber-600 font-bold">
          {menuItems}
        </nav>

      
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <>
              <SignInButton mode="modal">
                <button className="text-sm text-amber-600 border border-amber-600 px-4 py-1 rounded hover:bg-blue-50 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm bg-amber-600 text-white px-4 py-1 rounded hover:bg-amber-700 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {mobileMenuOpen ? <X  size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

       {/* Mobile Menu */}
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 text-amber-600 text-sm font-bold">
          {menuItems}
          <div className="flex flex-col space-y-2">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="w-full text-left text-amber-600 border border-amber-600 px-4 py-1 rounded hover:bg-blue-50 transition">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full text-left bg-amber-600 text-white px-4 py-1 rounded hover:bg-amber-700 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
