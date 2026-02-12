import { Button } from "../components/ui/button";
export const Navbar = () => {
  return (
    <nav className=" text-white px-8 py-6 w-full ">
      <div className="max-width-7xl mx-auto flex justify-between items-center">
        <div className="ml-20">
            <ul className="flex items-center gap-7 text-sm font-medium h-20">
            <li className="flex items-center w-full h-10  font-bold gap-1">
                <p className="w-7 h-7 font-bold rounded-full bg-white text-black flex items-center justify-center">A</p>
                <a href="#">Transform</a>
            </li>
            <li className="px-4 py-2 hover:border-t border-zinc-700 hover:bg-zinc-900 shadow-md rounded">
                <a href="#" className="font-medium ">Campaigns</a>
            </li>
            <li className="px-4 py-2 hover:border-t border-zinc-700 hover:bg-zinc-900 shadow-md rounded">
                <a href="#" className="font-medium">Audience</a>
            </li>
            <li className="px-4 py-2 hover:border-t border-zinc-700 hover:bg-zinc-900 shadow-md rounded">
                <a href="#" className="font-medium">
                Contact
                </a>
            </li>
            </ul>
        </div>

        <div>
            <div className="flex gap-10 w-full items-center">
                <span className="font-medium cursor-pointer">Register</span>
                 <Button className="bg-blue-600 font-bold cursor-pointer">
                  Book a demo
                 </Button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;