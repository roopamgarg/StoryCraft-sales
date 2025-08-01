import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How does the AI storytelling coach work?",
      answer: "Our AI coach analyzes your writing across multiple dimensions including plot structure, character development, pacing, dialogue, and writing style. It provides specific, actionable feedback and suggests improvements tailored to your skill level and writing goals."
    },
    {
      question: "What's included in the beta pre-order?",
      answer: "Beta pre-order includes full access to the platform, AI coaching, community challenges, peer reviews, progress tracking, and lifetime access to the community. You'll also get early bird pricing and priority support during the beta phase."
    },
    {
      question: "Can I write in different genres and formats?",
      answer: "Absolutely! StoryCraft supports various formats including short stories, novel chapters, screenplays, and business narratives. Our AI coach is trained across multiple genres from fantasy and sci-fi to business storytelling and personal narratives."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4" style={{ fontWeight: 700 }}>
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about StoryCraft
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <span className="text-left text-lg text-gray-900" style={{ fontWeight: 600 }}>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}