import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose Your Maintenance Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All custom builds include mandatory monthly maintenance to ensure peak performance and continuous optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Essential Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Essential</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$149<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600">Perfect for basic AI systems</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">1 AI agent review per month</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">24/7 uptime monitoring</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Bug resolution & fixes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Email support</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Monthly performance report</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
              Choose Essential
            </Button>
          </div>
          
          {/* Proactive Plan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">Most Popular</span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Proactive</h3>
              <div className="text-4xl font-bold text-primary mb-2">$249<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600">For growing businesses</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Up to 3 hours/month for edits</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Flow changes & optimizations</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">AI retraining & improvements</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Priority support (24hr response)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Detailed analytics & insights</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Everything in Essential</span>
              </li>
            </ul>
            
            <Button className="w-full bg-primary text-white hover:bg-primary/90">
              Choose Proactive
            </Button>
          </div>
          
          {/* Elite Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 relative">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$399<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600">For advanced operations</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Up to 6 hours/month for changes</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">New campaign development</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Multi-agent logic updates</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">VIP support (same-day response)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Monthly strategy calls</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-success mt-1">✓</span>
                <span className="text-gray-700">Everything in Proactive</span>
              </li>
            </ul>
            
            <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
              Choose Elite
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">All plans include uptime monitoring, bug fixes, and monthly reporting</p>
          <Button 
            onClick={scrollToQuote}
            size="lg"
            className="bg-success text-white hover:bg-success/90 text-lg px-8 py-4"
          >
            Get Custom Quote for Your Build
          </Button>
        </div>
      </div>
    </section>
  );
}
