import { SiZapier, SiOpenai, SiGoogle } from "react-icons/si";

const automationPlatforms = [
  {
    name: "n8n",
    logo: "https://n8n.io/favicon.ico",
    description: "Open-source workflow automation"
  },
  {
    name: "Zapier",
    icon: SiZapier,
    description: "Connect your apps and automate workflows"
  },
  {
    name: "Power Automate",
    logo: "https://powerautomate.microsoft.com/favicon.ico",
    description: "Microsoft automation platform"
  },
  {
    name: "Make.com",
    logo: "https://www.make.com/favicon.ico",
    description: "Visual automation platform"
  }
];

const llmProviders = [
  {
    name: "ChatGPT",
    icon: SiOpenai,
    description: "GPT-4o, GPT-4 Turbo"
  },
  {
    name: "Claude",
    logo: "https://claude.ai/favicon.ico",
    description: "Anthropic's AI assistant"
  },
  {
    name: "Grok",
    logo: "https://grok.x.ai/favicon.ico",
    description: "xAI's conversational AI"
  },
  {
    name: "DeepSeek",
    logo: "https://www.deepseek.com/favicon.ico",
    description: "Advanced reasoning models"
  },
  {
    name: "Gemini",
    icon: SiGoogle,
    description: "Google's multimodal AI"
  }
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Integrates with Your Favorite Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with the platforms and AI models you prefer. Tell us your stack, 
            and we'll build your automation to work seamlessly with it.
          </p>
        </div>

        {/* Automation Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Automation Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {automationPlatforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    {platform.icon ? (
                      <platform.icon className="w-12 h-12 text-gray-700" />
                    ) : (
                      <img 
                        src={platform.logo} 
                        alt={`${platform.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold text-xs">${platform.name}</div>`;
                          }
                        }}
                      />
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{platform.name}</h4>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LLM Providers */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            AI Language Models
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {llmProviders.map((provider, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    {provider.icon ? (
                      <provider.icon className="w-12 h-12 text-gray-700" />
                    ) : (
                      <img 
                        src={provider.logo} 
                        alt={`${provider.name} logo`}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold text-xs">${provider.name}</div>`;
                          }
                        }}
                      />
                    )}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{provider.name}</h4>
                  <p className="text-sm text-gray-600">{provider.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Don't See Your Platform?
            </h4>
            <p className="text-gray-600 mb-6">
              We integrate with virtually any platform that has an API. Just tell us what you use, 
              and we'll make it work with your custom AI automation.
            </p>
            <button 
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Discuss Your Integration Needs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}