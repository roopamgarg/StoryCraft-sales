import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm" style={{ fontWeight: 600 }}>S</span>
            </div>
            <div>
              <div className="text-white" style={{ fontWeight: 600 }}>StoryCraft</div>
              <div className="text-sm text-gray-400">Master storytelling through practice</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:hello@StoryCraft.ai" className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
              <Mail className="h-4 w-4" />
              <span>hello@StoryCraft.ai</span>
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 StoryCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}