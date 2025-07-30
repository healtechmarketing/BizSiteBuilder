import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import PricingSection from "@/components/pricing-section";
import CaseStudies from "@/components/case-studies";
import QuoteForm from "@/components/quote-form";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Problem/Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tired of Expensive Software That Doesn't Fit?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional AI platforms force you to pay for features you'll never use. 
              We build only what your business needs, then keep it running perfectly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">✕</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Generic SaaS Platforms</h3>
                    <p className="text-gray-600">Monthly fees for features you don't need. Complex setup. Generic workflows that don't match your business.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">✕</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">DIY Solutions</h3>
                    <p className="text-gray-600">Hours of setup time. Constant maintenance. Break when you need them most.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-xl">✕</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Expensive Agencies</h3>
                    <p className="text-gray-600">$10k+ upfront costs. Long development cycles. No ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-success">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-success text-2xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-gray-700">Custom-built for your exact workflows</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-gray-700">Low upfront cost ($500-$3000)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-gray-700">24-48 hour deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-gray-700">Expert monthly maintenance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-success text-lg">✓</span>
                    <span className="text-gray-700">Continuous optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <PricingSection />
      <CaseStudies />
      <QuoteForm />
      <FAQSection />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate What Matters?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of SMBs who've transformed their operations with custom AI automation. 
            <strong> Simple, scalable, smart.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📊 Get Custom Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
              📞 Schedule Strategy Call
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold">24-48hr</div>
              <div className="text-sm opacity-75">Deployment</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$500+</div>
              <div className="text-sm opacity-75">Starting Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold">127%</div>
              <div className="text-sm opacity-75">Avg ROI Increase</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
