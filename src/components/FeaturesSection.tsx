import { Card } from "./ui/card";
import { Brain, Users, Gamepad2, BookOpen, Rocket } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Story Coach",
      description: "Get personalized feedback on plot, character development, pacing, and writing style with our advanced AI coach.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Peer Reviews",
      description: "Exchange feedback with a community of writers. Give and receive constructive critiques to improve together.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Gamepad2,
      title: "Community Challenges",
      description: "Weekly writing challenges with themes, word limits, and genres to push your creative boundaries.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BookOpen,
      title: "Gamified Learning",
      description: "Earn points, unlock achievements, and level up your skills with our engaging progression system.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Rocket,
      title: "Creator & Founder Tracks",
      description: "Specialized learning paths for content creators and entrepreneurs who need compelling storytelling skills.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontWeight: 700 }}>
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Master Storytelling
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines AI technology, community learning, and gamification to accelerate your writing journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3" style={{ fontWeight: 600 }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}