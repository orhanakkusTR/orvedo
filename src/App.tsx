import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(120); // 2 dakika = 120 saniye

  useEffect(() => {
    setIsVisible(true);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = 'https://awj.ai';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className={`max-w-4xl w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-block mb-8 sm:mb-12">
              <p className="text-xs text-gray-400 font-light mb-3">
                Updated: February 14, 2026
              </p>
              <span className="text-xs sm:text-sm font-medium tracking-wider text-gray-500 uppercase">Important Update</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight px-2">
              A New Chapter
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-normal leading-relaxed max-w-3xl mx-auto px-4">
              Two decades of excellence
              <br />
              now powered by <span className="font-bold">AWJ</span>.ai
            </p>
          </div>

          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 mb-12 sm:mb-16 px-4">
              <div className="transition-opacity duration-700 hover:opacity-70 flex-shrink">
                <img
                  src="/Color2-Horizontal_1Logo-Orvedo-2_(3).svg"
                  alt="Orvedo"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                />
              </div>

              <div className="flex-shrink-0">
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400" strokeWidth={1.5} />
              </div>

              <div className="transition-opacity duration-700 hover:opacity-70 flex-shrink">
                <img
                  src="/awj-logo.svg"
                  alt="AWJ.AI"
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
                />
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center space-y-5 sm:space-y-6 mb-12 sm:mb-16 px-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Since 2006, Orvedo has driven digital transformation for businesses across Sweden, the United States, and beyond.
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-900 font-medium leading-relaxed">
                Today, that legacy continues as AWJ—stronger, sharper, and focused on delivering AI-powered innovation that transforms businesses.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 sm:gap-6 px-4">
              <a
                href="https://awj.ai"
                className="group inline-flex items-center gap-2 sm:gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium transition-all duration-300 rounded-sm shadow-lg hover:shadow-xl"
              >
                Visit AWJ.AI
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </a>

              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://awj.ai"
                  className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm font-light transition-colors duration-300"
                >
                  www.awj.ai
                </a>
                <p className="text-xs text-gray-400 font-light">
                  Redirecting automatically in {formatTime(countdown)}
                </p>
              </div>

              <p className="text-xs text-gray-400 font-light mt-6 max-w-md mx-auto leading-relaxed">
                For questions or inquiries, contact us at{' '}
                <a href="mailto:info@orvedo.com" className="text-gray-500 hover:text-gray-900 transition-colors underline decoration-dotted">
                  info@orvedo.com
                </a>
              </p>
            </div>
          </div>

          <div className="text-center pt-10 sm:pt-12 border-t border-gray-200 px-4 space-y-2">
            <p className="text-xs text-gray-400 font-light tracking-wide">
              © 2006–2026 Orvedo / AWJ.AI
            </p>
            <p className="text-xs text-gray-400 font-light">
              Updated: February 14, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
