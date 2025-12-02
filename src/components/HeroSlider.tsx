import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n";

const HeroSlider: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = t.pages.home.slides || [];

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="group relative w-full h-screen min-h-[700px] overflow-hidden mt-16">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: slide.image
                  ? `url(${slide.image})`
                  : "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-6 lg:px-16">
                <div className="text-center text-white max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-4 md:mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  {slide.subtitle && (
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 font-light text-white/90">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.buttonText && (
                    <button className="bg-white text-black hover:bg-white/90 px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-medium tracking-wide transition-all duration-300 hover:scale-105">
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden by default, show on hover */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 z-10 opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/40 hover:bg-white/60 w-1"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;

