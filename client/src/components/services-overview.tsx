import { Button } from "@/components/ui/button";

export default function ServicesOverview() {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How It Works: Build Once, Maintain Forever
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our two-part model gives you custom AI automation without the traditional complexity or cost.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* One-Time Build */}
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">One-Time AI Build & Setup</h3>
                <p className="text-primary font-medium">Starting at $500</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Each solution is scoped, designed, and deployed based on your business model, workflows, and customer interaction needs.
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-gray-900">What's Included:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">Strategy session & needs analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">AI agent scripting + GPT-4o/Whisper tuning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">Twilio, Notion, Systeme.io integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">End-to-end workflow automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">24–48 hour deployment</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h5 className="font-semibold text-gray-900 mb-3">Pricing Tiers:</h5>
              <div className="space-y-2 text-sm text-gray-600">
                <div><strong>$500:</strong> Basic systems (call answering + booking)</div>
                <div><strong>$1,000-$2,000:</strong> Mid-tier (multi-agent, calendar sync)</div>
                <div><strong>$3,000+:</strong> Full-stack (multi-location, CRM logic)</div>
              </div>
            </div>
          </div>
          
          {/* Monthly Maintenance */}
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">🔧</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Monthly Maintenance Plans</h3>
                <p className="text-success font-medium">$149 - $399/month</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Required maintenance ensures your AI agents stay accurate, workflows remain current, 
              and your system adapts as your business grows.
            </p>
            
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-gray-900">Benefits:</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">Ongoing AI performance optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">Seasonal & promotional flow customization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">Proactive support & updates</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">Monthly reporting & insights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-success mt-1">✓</span>
                  <span className="text-gray-700">System uptime monitoring</span>
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={scrollToPricing}
              className="w-full bg-success text-white hover:bg-success/90"
            >
              View Maintenance Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
