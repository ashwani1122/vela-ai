import { Button } from "../components/ui/button";
import { MyButton } from "./Button";

export const Navbar = () => {
  return (
    /* Glassmorphism effect with backdrop-blur */
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-md text-white bg-zinc-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <a href="#" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            TRANSFORM<span className="text-blue-500">.</span>
          </a>
        </div>

        {/* CENTER LINKS (Hidden on small screens, flex on large) */}
        <ul className="hidden md:flex items-center gap-2 bg-zinc-900/50 border border-white/5 px-2 py-1.5 rounded-full">
          <NavItem href="#product">Product</NavItem>
          <NavItem href="#problem">Problem</NavItem>
          <NavItem href="#time">Time saved</NavItem>
          <NavItem href="#works">How it works?</NavItem>
          <NavItem href="#faq">FAQ</NavItem>
        </ul>

        {/* RIGHT ACTIONS */}
        <div className="flex gap-6 items-center">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Register
          </a>
          <MyButton placeholder="Book a demo"/>
        </div>
      </div>
    </nav>
  );
};

// Sub-component for clean mapping and hover states
const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="px-4 py-2 text-sm font-medium text-zinc-400 rounded-full hover:text-white hover:bg-white/5 transition-all duration-200"
    >
      {children}
    </a>
  </li>
);

export default Navbar;