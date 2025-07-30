import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Why is monthly maintenance required?",
    answer: "AI systems need regular optimization to maintain accuracy and performance. Our maintenance ensures your automation adapts to changing business needs, stays updated with the latest AI improvements, and continues working flawlessly as your business grows."
  },
  {
    question: "How is this different from other AI tools?",
    answer: "Unlike generic SaaS platforms, we build custom solutions tailored to your exact workflows. You only pay for what you need, get expert setup and ongoing optimization, and have a dedicated team ensuring your system works perfectly."
  },
  {
    question: "What if I need changes after the build?",
    answer: "That's exactly why our maintenance plans include modification hours. Proactive includes 3 hours/month for changes, Elite includes 6 hours/month. Your business evolves, and your AI should too."
  },
  {
    question: "How quickly can you deploy my system?",
    answer: "Most systems are deployed within 24-48 hours after approval. We handle the strategy session, build your custom solution, integrate with your existing tools, and have you up and running in under a week."
  },
  {
    question: "What happens if I want to cancel?",
    answer: "You own your custom build, but maintenance is required to keep it running optimally. We offer month-to-month contracts with 30-day notice for cancellation. However, most clients see such strong ROI that they upgrade their plans instead."
  },
  {
    question: "Do you integrate with my existing tools?",
    answer: "Yes! We integrate with popular tools like Twilio for communications, Notion for databases, Systeme.io for marketing, major CRMs, calendar systems, and more. If you have a specific tool, we'll make it work together seamlessly."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions from SMB owners about our AI automation approach.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 border">
              <button 
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="text-gray-400 h-5 w-5" />
                ) : (
                  <ChevronDown className="text-gray-400 h-5 w-5" />
                )}
              </button>
              {openFAQ === index && (
                <div className="mt-4 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
