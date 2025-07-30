import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  const scrollToQuote = () => {
    const element = document.getElementById('quote-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our custom AI automation solutions have transformed operations and boosted ROI for SMBs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                alt="Mike Chen, Local HVAC contractor" 
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                <p className="text-gray-600">Local HVAC Contractor</p>
              </div>
            </div>
            
            <blockquote className="text-gray-700 mb-6 italic">
              "Our AI phone system handles 80% of appointment bookings automatically. 
              I'm not missing calls anymore, and my conversion rate went up 45%."
            </blockquote>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Build Cost:</span>
                <span className="font-semibold">$1,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Plan:</span>
                <span className="font-semibold">Proactive ($249)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">ROI Increase:</span>
                <span className="font-semibold text-success">+127%</span>
              </div>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                alt="Sarah Williams, Dental Practice owner" 
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">Sarah Williams</h4>
                <p className="text-gray-600">Dental Practice</p>
              </div>
            </div>
            
            <blockquote className="text-gray-700 mb-6 italic">
              "The AI handles appointment reminders, rescheduling, and patient intake. 
              My staff can focus on patient care instead of admin work."
            </blockquote>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Build Cost:</span>
                <span className="font-semibold">$2,400</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Plan:</span>
                <span className="font-semibold">Elite ($399)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Time Saved:</span>
                <span className="font-semibold text-success">15 hrs/week</span>
              </div>
            </div>
          </div>
          
          {/* Case Study 3 */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                alt="David Park, Marketing Agency owner" 
                className="w-16 h-16 rounded-full object-cover mr-4" 
              />
              <div>
                <h4 className="font-semibold text-gray-900">David Park</h4>
                <p className="text-gray-600">Marketing Agency</p>
              </div>
            </div>
            
            <blockquote className="text-gray-700 mb-6 italic">
              "Started with a simple lead qualification system at $800. 
              Now it handles our entire client onboarding process."
            </blockquote>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Build Cost:</span>
                <span className="font-semibold">$800</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Plan:</span>
                <span className="font-semibold">Proactive ($249)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lead Quality:</span>
                <span className="font-semibold text-success">+200%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToQuote}
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4"
          >
            Get Your Success Story Started
          </Button>
        </div>
      </div>
    </section>
  );
}
