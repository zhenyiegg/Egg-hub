
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                🥚 EggHub
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Features
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Pricing
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-sm rounded-lg mt-2 border border-orange-100">
                <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                  Features
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                  Pricing
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                  About
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium">
                  Contact
                </a>
                <div className="pt-4 pb-2 space-y-2">
                  <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20 lg:py-32">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="mr-2">🎉</span>
            Welcome to the future of egg management
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Ultimate
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent block">
              EggHub
            </span>
            Experience
          </h1>

          {/* Hero Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover, manage, and optimize your egg collection like never before. 
            Join thousands of egg enthusiasts who trust EggHub for their daily needs.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-orange-100">
            <p className="text-sm text-gray-500 mb-6">Trusted by egg enthusiasts worldwide</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🥚</span>
                <span className="font-semibold">1M+ Eggs</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👥</span>
                <span className="font-semibold">50K+ Users</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
