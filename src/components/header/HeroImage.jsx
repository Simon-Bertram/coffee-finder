// Import mobile images
import mobileHeroImageSm from "../../assets/img/hero-mobile-sm.jpg";
import mobileHeroImageSmRetina from "../..//assets/img/hero-mobile-sm-@2x.jpg";
import mobileHeroImageMd from "../../assets/img/hero-mobile-md.jpg";
import mobileHeroImageMdRetina from "../../assets/img/hero-mobile-md-@2x.jpg";
import mobileHeroImageLg from "../../assets/img/hero-mobile-lg.jpg";
import mobileHeroImageLgRetina from "../../assets/img/hero-mobile-lg-@2x.jpg";
import mobileHeroImageXl from "../../assets/img/hero-mobile-xl.jpg";

// Import desktop images
import desktopHeroImageSm from "../../assets/img/hero-desktop-sm.jpg";
import desktopHeroImageSmRetina from "../../assets/img/hero-desktop-sm-@2x.jpg";
import desktopHeroImageMd from "../../assets/img/hero-desktop-md.jpg";
import desktopHeroImageMdRetina from "../../assets/img/hero-desktop-md-@2x.jpg";
import desktopHeroImageLg from "../../assets/img/hero-desktop-lg.jpg";
import desktopHeroImageLgRetina from "../../assets/img/hero-desktop-lg-@2x.jpg";
import desktopHeroImageXl from "../../assets/img/hero-desktop-xl.jpg";
import desktopHeroImageXlRetina from "../../assets/img/hero-desktop-xl-@2x.jpg";
import desktopHeroImage2Xl from "../../assets/img/hero-desktop-2xl.jpg";
import desktopHeroImage2XlRetina from "../../assets/img/hero-desktop-2xl-@2x.jpg";

const HeroImage = () => {
  return (
    <div className="w-full md:h-[500px]">
      <picture>
        {/* Mobile images */}
        <source
          srcSet={`
            ${mobileHeroImageSm} 320w,
            ${mobileHeroImageSmRetina} 640w,
            ${mobileHeroImageMd} 768w,
            ${mobileHeroImageMdRetina} 1536w,
            ${mobileHeroImageLg} 1024w,
            ${mobileHeroImageLgRetina} 2048w,
            ${mobileHeroImageXl} 1280w,
          `}
          media="(max-width: 639px)"
          sizes="(max-width: 639px) 100vw"
        />

        {/* Desktop images */}
        <source
          srcSet={`
            ${desktopHeroImageSm} 640w,
            ${desktopHeroImageSmRetina} 1280w,
            ${desktopHeroImageMd} 768w,
            ${desktopHeroImageMdRetina} 1536w,
            ${desktopHeroImageLg} 1024w,
            ${desktopHeroImageLgRetina} 2048w,
            ${desktopHeroImageXl} 1280w,
            ${desktopHeroImageXlRetina} 2560w,
            ${desktopHeroImage2Xl} 1536w,
            ${desktopHeroImage2XlRetina} 3072w
          `}
          media="(min-width: 640px)"
          sizes="(min-width: 640px) 100vw"
        />

        {/* Fallback image */}
        <img
          src={mobileHeroImageSm}
          alt="Hero Image"
          className="object-cover w-full h-screen md:h-[500px]"
        />
      </picture>
    </div>
  );
};

export default HeroImage;
