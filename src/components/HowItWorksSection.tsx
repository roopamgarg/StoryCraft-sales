import { PenTool, MessageSquare, TrendingUp } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: PenTool,
      title: "Practice",
      description: "Choose from weekly challenges, genre prompts, or create your own story. Write at your own pace with guided exercises.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Get instant AI-powered feedback on structure, character development, and style. Plus community reviews from fellow writers.",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Level Up",
      description: "Track your progress, earn achievements, and unlock advanced challenges. Watch your storytelling skills grow systematically.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontWeight: 700 }}>
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple 3-step process to transform your storytelling abilities
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3">
            <div className="h-0.5 bg-gradient-to-r from-purple-500 via-cyan-500 to-orange-500"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm text-gray-600" style={{ fontWeight: 600 }}>{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl text-gray-900 mb-4" style={{ fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}