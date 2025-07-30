import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ No Software Packages • Only Custom Solutions
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Custom AI that works <span className="text-primary">your way</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Low-cost build, high-impact automation, and expert care every month. 
              <strong> Why pay for features you don't use?</strong> We automate what matters, nothing more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToQuote}
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4"
              >
                📊 Get Custom Quote
              </Button>
              <Button 
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary text-lg px-8 py-4"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-success mr-2">⏰</span>
                24-48hr deployment
              </div>
              <div className="flex items-center">
                <span className="text-success mr-2">🔧</span>
                Expert maintenance
              </div>
              <div className="flex items-center">
                <span className="text-success mr-2">📈</span>
                Built to scale
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="AI automation dashboard interface" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-success">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">500+ Calls</div>
                  <div className="text-sm text-gray-500">Automated monthly</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-primary">📊</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">89% ROI</div>
                  <div className="text-sm text-gray-500">Average increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
