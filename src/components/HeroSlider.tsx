import React, { useState, useEffect } from "react";
import { useTranslation } from "../i18n";
import ContactModal from "./common/ContactModal";

const HeroSlider: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const slides = t.pages.home.slides || [];

  // Detect mobile/desktop based on window width (lg breakpoint = 1024px)
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkIsMobile();

    // Listen for resize events
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Map slides with images from /images/slides directory
  // Mobile: mb-slide1.jpg, mb-slide2.jpg, mb-slide3.jpg
  // Desktop: dt-slide1.jpg, dt-slide2.jpg, dt-slide3.jpg
  const slidesWithImages = slides.map((slide: any, index: number) => {
    const imagePrefix = isMobile ? "mb" : "dt";
    const defaultImage = slide.image || `/images/slides/${imagePrefix}-slide${index + 1}.jpg`;
    
    return {
      ...slide,
      image: defaultImage,
    };
  });

  useEffect(() => {
    if (slidesWithImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesWithImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slidesWithImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesWithImages.length) % slidesWithImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesWithImages.length);
  };

  if (slidesWithImages.length === 0) {
    return null;
  }

  return (
    <div className="group relative w-full overflow-hidden" style={{ marginTop: '95px', height: 'calc(100vh - 95px)', minHeight: '620px', zIndex: 1 }}>
      {/* Slides */}
      <div className="relative w-full h-full">
        {slidesWithImages.map((slide: any, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image - Full cover to fill the entire container */}
            <div className="absolute inset-0 w-full h-full bg-black">
              <img
                key={`${isMobile ? 'mb' : 'dt'}-slide-${index}`}
                src={slide.image || undefined}
                alt={slide.title || "Slide"}
                className="w-full h-full object-cover object-center"
                style={{
                  backgroundColor: slide.image ? "transparent" : "#1a1a1a",
                }}
                onError={(e) => {
                  // Fallback to gradient if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.style.background = "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)";
                  }
                }}
              />
            </div>
            
            {/* Overlay - Darker overlay to make text more readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10" />

            {/* Content - Positioned at bottom to not cover image */}
            <div className="relative h-full flex items-end justify-center px-6 lg:px-16 pb-16 md:pb-24 z-20">
                <div className="text-center max-w-3xl lg:max-w-[70%] w-full">
                   {/* Slogan - Keep mobile size, larger on desktop */}
                  <div className="mb-2 md:mb-3 lg:mb-4">
                    <p className="text-sm md:text-base lg:text-lg font-medium text-white mb-1 md:mb-1.5 lg:mb-2 drop-shadow-2xl">
                      {t.pages.home.hero.slogan}
                    </p>
                    <p className="text-xs md:text-sm lg:text-base font-light text-white/90 drop-shadow-2xl">
                      {t.pages.home.hero.mainService}
                    </p>
                  </div>
                  
                  {/* Title - Keep mobile size, larger on desktop */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-2 md:mb-3 lg:mb-4 tracking-tight text-white drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  {/* Subtitle - Keep mobile size, larger on desktop */}
                  {slide.subtitle && (
                    <p className="text-sm md:text-base lg:text-lg mb-3 md:mb-4 lg:mb-5 font-light text-white/95 drop-shadow-2xl">
                      {slide.subtitle}
                    </p>
                  )}
                  {/* Button - Keep mobile size, larger on desktop */}
                  {slide.buttonText && (
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-primary text-white hover:bg-primary/90 px-5 py-1.5 md:px-6 md:py-2 lg:px-8 lg:py-3 text-xs md:text-sm lg:text-base font-medium tracking-wide transition-all duration-300 hover:scale-105 shadow-lg rounded-lg"
                    >
                      {slide.buttonText}
                    </button>
                  )}
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden by default, show on hover */}
      {slidesWithImages.length > 1 && (
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
      {slidesWithImages.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slidesWithImages.map((_: any, index: number) => (
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

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HeroSlider;

