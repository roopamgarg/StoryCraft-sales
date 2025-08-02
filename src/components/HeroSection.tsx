import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Star,
  Target,
  Users,
  Trophy,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Headphones,
  Mic,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1
                className="text-5xl lg:text-6xl tracking-tight text-gray-900"
                style={{ fontWeight: 700, lineHeight: "1.1" }}
              >
                Master{" "}
                <span className="bg-gradient-to-r from-purple-800 to-cyan-600 bg-clip-text text-transparent">
                  Storytelling
                </span>{" "}
                Through Practice
              </h1>
              <p
                className="text-xl text-gray-600 max-w-lg"
                style={{ lineHeight: "1.6" }}
              >
                Record your stories, get AI-powered feedback on
                vocal delivery, pacing, and emotion. Perfect
                your storytelling voice with personalized
                coaching.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfWuKFgoZYlWA0fehBcLfiE84dDugrCJHavt4K4qF6XtuXB4w/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-purple-800 hover:bg-purple-900 text-white px-8 py-4 text-lg"

              >
                Join the waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-cyan-500 text-cyan-700 hover:bg-cyan-50 px-8 py-4 text-lg"
              >
                Pre-order beta access
              </Button> */}
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-purple-100 rounded-full border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-xs text-purple-700">
                        🎙️
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  500+ voice stories recorded today
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Audio Storytelling Dashboard Mockup */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5" />
                    <h3
                      className="text-lg"
                      style={{ fontWeight: 600 }}
                    >
                      Audio Story Studio
                    </h3>
                  </div>
                  <Badge className="bg-green-400 text-green-900">
                    Recording
                  </Badge>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Main Audio Recording Interface */}
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-purple-900"
                        style={{ fontWeight: 600 }}
                      >
                        Character Voice Practice
                      </span>
                      <Badge className="bg-purple-500 text-white">
                        Session 3/5
                      </Badge>
                    </div>

                    {/* Recording Button & Timer */}
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                        <Mic className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-left">
                        <div
                          className="text-2xl text-gray-900"
                          style={{ fontWeight: 700 }}
                        >
                          02:34
                        </div>
                        <div className="text-sm text-gray-500">
                          Recording time
                        </div>
                      </div>
                    </div>

                    {/* Live Waveform */}
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-end justify-center space-x-1 h-12 mb-2">
                        {[
                          8, 12, 6, 15, 10, 18, 14, 9, 16, 11,
                          7, 13, 19, 5, 12, 8, 15, 6, 10, 18,
                          14, 9, 16, 11, 7, 13, 8, 14,
                        ].map((height, i) => (
                          <div
                            key={i}
                            className={`w-1 rounded-full transition-all duration-150 ${
                              i > 20
                                ? "bg-gradient-to-t from-red-400 to-red-600 animate-pulse"
                                : i > 15
                                  ? "bg-gradient-to-t from-purple-400 to-purple-600"
                                  : "bg-gray-300"
                            }`}
                            style={{ height: `${height}px` }}
                          ></div>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        Live audio visualization
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Real-time AI Feedback */}
                <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Zap className="h-5 w-5 text-green-600" />
                    <span
                      className="text-green-900"
                      style={{ fontWeight: 600 }}
                    >
                      Live AI Feedback
                    </span>
                  </div>

                  <div className="space-y-3">
                    {/* Voice Analysis Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white rounded p-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">
                            Pace
                          </span>
                          <span className="text-xs text-green-600">
                            Good
                          </span>
                        </div>
                        <Progress value={75} className="h-1" />
                      </div>
                      <div className="bg-white rounded p-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">
                            Clarity
                          </span>
                          <span className="text-xs text-blue-600">
                            Excellent
                          </span>
                        </div>
                        <Progress value={92} className="h-1" />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm space-y-1">
                        <p className="text-green-700">
                          ✓ Great emotion in the wizard's voice!
                        </p>
                        <p className="text-yellow-700">
                          ⚠ Try slowing down for dramatic
                          effect
                        </p>
                        <p className="text-blue-700">
                          💡 Add a pause before the reveal
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Voice Analysis Dashboard */}
                <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    <span
                      className="text-gray-900"
                      style={{ fontWeight: 600 }}
                    >
                      Voice Analysis
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div
                          className="text-lg text-purple-600"
                          style={{ fontWeight: 600 }}
                        >
                          145
                        </div>
                        <div className="text-gray-500">WPM</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div
                          className="text-lg text-green-600"
                          style={{ fontWeight: 600 }}
                        >
                          87%
                        </div>
                        <div className="text-gray-500">
                          Clarity
                        </div>
                      </div>
                      <div className="text-center p-2 bg-orange-50 rounded">
                        <div
                          className="text-lg text-orange-600"
                          style={{ fontWeight: 600 }}
                        >
                          8.2
                        </div>
                        <div className="text-gray-500">
                          Emotion
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">
                        Character Consistency
                      </span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-600">
                          Excellent
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Recent Recordings */}
                {/* <Card className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Play className="h-5 w-5 text-gray-600" />
                    <span
                      className="text-gray-900"
                      style={{ fontWeight: 600 }}
                    >
                      Recent Recordings
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <Play className="h-3 w-3 text-purple-600" />
                        <span className="text-sm text-gray-700">
                          Fairy Tale Voices
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          9.1/10
                        </Badge>
                        <span className="text-xs text-gray-500">
                          3:24
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <Play className="h-3 w-3 text-purple-600" />
                        <span className="text-sm text-gray-700">
                          Mystery Narrator
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                          7.8/10
                        </Badge>
                        <span className="text-xs text-gray-500">
                          2:56
                        </span>
                      </div>
                    </div>
                  </div>
                </Card> */}

                {/* Practice Goals */}
                <Card className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Target className="h-5 w-5 text-cyan-600" />
                    <span
                      className="text-cyan-900"
                      style={{ fontWeight: 600 }}
                    >
                      Today's Goals
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">
                        Record 3 character voices
                      </span>
                      <span className="text-sm text-cyan-600">
                        2/3
                      </span>
                    </div>
                    <Progress value={67} className="h-2" />

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>1 more to complete daily goal</span>
                      <Clock className="h-3 w-3" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-400 rounded-full opacity-10"></div>

            {/* Floating audio visualization */}
            <div className="absolute top-4 -left-8 bg-white rounded-xl shadow-lg p-3 border border-gray-200">
              <div className="flex items-center space-x-1">
                <Headphones className="h-4 w-4 text-purple-600" />
                <div className="flex space-x-1">
                  {[4, 8, 6, 10, 7].map((height, i) => (
                    <div
                      key={i}
                      className="w-1 bg-purple-500 rounded-full animate-pulse"
                      style={{
                        height: `${height}px`,
                        animationDelay: `${i * 100}ms`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}