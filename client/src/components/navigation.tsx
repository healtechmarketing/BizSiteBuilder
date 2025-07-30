import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🤖</span>
            <span className="text-xl font-bold text-gray-900">AI Automation Pro</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-primary font-medium transition-colors"
            >
              FAQ
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('quote-form')}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Get Your Quote
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-600 hover:text-primary font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block text-gray-600 hover:text-primary font-medium"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="block text-gray-600 hover:text-primary font-medium"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block text-gray-600 hover:text-primary font-medium"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
