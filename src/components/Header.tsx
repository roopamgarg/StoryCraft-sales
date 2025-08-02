import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-800 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl text-gray-900" style={{ fontWeight: 600 }}>StoryCraft</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-800 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-800 transition-colors">How it Works</a>
            <a href="#faq" className="text-gray-600 hover:text-purple-800 transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            {/* <Button variant="ghost" className="text-gray-600 hover:text-purple-800">
              Sign In
            </Button> */}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWuKFgoZYlWA0fehBcLfiE84dDugrCJHavt4K4qF6XtuXB4w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button className="bg-purple-800 hover:bg-purple-900 text-white">
              Join Waitlist
            </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}