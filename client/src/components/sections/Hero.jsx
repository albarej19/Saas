import React, { useState, useEffect } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Simple useEffect for visibility 
  useEffect(() => {
    setVisible(true);
  }, []);

  // Basic mouse tracking 
  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Simple refresh handler
  const refreshDashboard = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  // Close button handler
  const closeBrowser = () => {
    const heroEl = document.getElementById("hero-section");
    heroEl.classList.add("animate-pulse");
    setTimeout(() => {
      heroEl.classList.remove("animate-pulse");
    }, 500);
  };

  // Minimize handler
  const minimizeDashboard = () => {
    const dash = document.getElementById("dashboard-preview");
    dash.style.transform = "scale(0.95)";
    setTimeout(() => {
      dash.style.transform = "scale(1)";
    }, 300);
  };

  // Array objects
  const stats = [
    { num: "10K+", text: "Active Users", color: "from-blue-400 to-cyan-400" },
    { num: "300%", text: "Avg ROI", color: "from-purple-400 to-pink-400" },
    {
      num: "2.4M",
      text: "Revenue Generated",
      color: "from-green-400 to-emerald-400",
    },
    { num: "99.9%", text: "Uptime", color: "from-orange-400 to-red-400" },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-25 pb-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, 
              rgba(79, 70, 229, 0.15), 
              rgba(147, 51, 234, 0.1), 
              transparent 50%),
            linear-gradient(135deg, 
              #0a0a0a 0%, 
              #1a1a2e 25%, 
              #16213e 50%, 
              #0f3460 75%, 
              #0a0a0a 100%)
          `,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/25 to-pink-500/25 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animation: "float 10s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animation: "float 12s ease-in-out infinite 4s" }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-6 py-3 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 mb-8 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transition: "all 1s ease" }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-medium text-white/90 tracking-wide">
              ✨ AI-POWERED MARKETING REVOLUTION
            </span>
            <div className="ml-3 px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full">
              <span className="text-xs font-bold text-white">NEW</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-4 mb-8">
            <h1
              className="text-7xl md:text-9xl font-black leading-none"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s ease 0.2s",
              }}
            >
              <span className="block text-white/95 tracking-tight">
                Transform
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Marketing
              </span>
            </h1>

            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s ease 0.4s",
              }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white/90 tracking-tight">
                with{" "}
                <span className="relative">
                  AI Precision
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full" />
                </span>
              </h2>
            </div>
          </div>

          {/* Subheadline */}
          <div
            className="mb-12"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.6s",
            }}
          >
            <div className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              <p>
                Automate content creation, optimize campaigns instantly, and{" "}
                <span className="relative text-white font-semibold">
                  boost ROI by 300%
                </span>{" "}
                with our AI suite...
              </p>
              <div className="relative -mt-2 h-0.5 w-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full" />
            </div>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 0.8s",
            }}
          >
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-lg font-bold px-12 py-5 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              🚀 Start Free Trial
              <svg
                className="w-5 h-5 ml-2 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button className="backdrop-blur-xl bg-white/10 border border-white/20 text-white text-lg font-semibold px-12 py-5 rounded-2xl hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <span className="flex items-center">
                <div className="w-6 h-6 mr-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Trust logos */}
          <div
            className="mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s ease 1s",
            }}
          >
            <p className="text-sm text-gray-400 mb-6 tracking-wide">
              TRUSTED BY INDUSTRY LEADERS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 hover:opacity-80 transition-opacity duration-300">
              {/* Basic mapping */}
              {[
                "TechFlow",
                "InnovateLab",
                "GrowthCorp",
                "ScaleUp",
                "FutureAI",
              ].map((company, i) => (
                <div
                  key={i}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="font-semibold text-gray-300 tracking-wide">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div
          className="relative max-w-6xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 1.2s",
          }}
        >
          <div
            id="dashboard-preview"
            className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl"
          >
            {/* Browser bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              {/* Traffic lights */}
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <button
                    onClick={closeBrowser}
                    className="w-3.5 h-3.5 bg-red-500 rounded-full hover:bg-red-400 cursor-pointer"
                  />
                  <button
                    onClick={minimizeDashboard}
                    className="w-3.5 h-3.5 bg-yellow-500 rounded-full hover:bg-yellow-400 cursor-pointer"
                  />
                  <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
                </div>
              </div>

              {/* URL bar */}
              <div className="flex-1 max-w-md mx-4">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center">
                  <div className="w-4 h-4 mr-3">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="text-green-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300 font-mono">
                    dashboard.admybrand.com
                  </span>
                </div>
              </div>

              {/* Browser controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={refreshDashboard}
                  className="w-6 h-6 bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/10 cursor-pointer"
                >
                  <svg
                    className={`w-3 h-3 text-gray-400 ${
                      refreshing ? "animate-spin" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-6 h-6 bg-white/5 border border-white/10 rounded-md flex items-center justify-center hover:bg-white/10 cursor-pointer"
                >
                  <svg
                    className="w-3 h-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.num}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {stat.text}
                  </div>
                  <div
                    className={`mt-3 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-60`}
                  />
                </div>
              ))}
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 animate-pulse -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/10 border border-white/20 rounded-full p-3">
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* CSS - mix of inline and styled */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
