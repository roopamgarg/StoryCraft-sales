import { Button } from "./ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 700, lineHeight: '1.2' }}>
            Ready to Transform Your{' '}
            <span className="text-cyan-300">
              Storytelling?
            </span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Join our waitlist and be among the first to access personalized AI coaching, community challenges, and proven methods to master storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWuKFgoZYlWA0fehBcLfiE84dDugrCJHavt4K4qF6XtuXB4w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100 px-8 py-4 text-lg">
              <Star className="mr-2 h-5 w-5" />
              Join the Waitlist
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </a>
            {/* <Button size="lg" variant="outline" className="border-cyan-300 text-cyan-200 hover:bg-cyan-50 hover:text-purple-800 px-8 py-4 text-lg">
              Pre-order Beta Access
            </Button> */}
          </div>
          
          <div className="pt-8 border-t border-purple-700">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-purple-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Early bird pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Lifetime community access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}