import { Card } from "./ui/card";
import { Quote } from "lucide-react";

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "StoryCraft helped me improve my writing in just 4 weeks. The AI feedback is incredibly detailed and the community challenges keep me motivated.",
      author: "Sarah Chen",
      role: "Content Creator",
      avatar: "SC"
    },
    {
      quote: "As a startup founder, I needed to tell our story better. The Creator Track gave me exactly the storytelling skills I was missing.",
      author: "Marcus Johnson",
      role: "Tech Entrepreneur", 
      avatar: "MJ"
    },
    {
      quote: "The peer review system is fantastic. I've connected with amazing writers and my stories have never been stronger.",
      author: "Emily Rodriguez",
      role: "Novelist",
      avatar: "ER"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontWeight: 700 }}>
            Writers Love{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              StoryCraft
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Join 1,200+ writers who are already improving their storytelling skills
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white shadow-lg border-0 relative">
              <Quote className="h-8 w-8 text-purple-300 mb-4" />
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm" style={{ fontWeight: 600 }}>{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="text-gray-900" style={{ fontWeight: 600 }}>{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}