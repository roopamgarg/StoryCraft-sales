import { BookOpen, DollarSign, Target } from "lucide-react";

export default function ProblemSection() {
  const painPoints = [
    {
      icon: BookOpen,
      title: "Courses Don't Help You Practice",
      description: "Online courses teach theory, but you need hands-on writing practice with real feedback to improve your storytelling skills."
    },
    {
      icon: DollarSign,
      title: "Coaching is Too Expensive",
      description: "Personal writing coaches cost $100+ per hour, making consistent feedback inaccessible for most aspiring storytellers."
    },
    {
      icon: Target,
      title: "No Structured Practice Path",
      description: "Without clear challenges and progress tracking, it's hard to stay motivated and see measurable improvement."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bold Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6" style={{ fontWeight: 700, lineHeight: '1.2' }}>
            Courses don't help you practice.{' '}
            <span className="text-red-600">Coaching is too expensive.</span>{' '}
            <span className="bg-gradient-to-r from-purple-800 to-cyan-600 bg-clip-text text-transparent">
              We fix that.
            </span>
          </h2>
        </div>
        
        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                <point.icon className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl text-gray-900" style={{ fontWeight: 600 }}>
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}