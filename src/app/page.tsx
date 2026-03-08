"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Award, Clock, Star, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumLargeSizeMediumTitles"
      background="none"
      cardStyle="soft-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Royal Wrist"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Collection", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Shop Now", href: "#products" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Timeless Elegance, Exceptional Craftsmanship"
          description="Discover our exclusive collection of luxury watches. Each timepiece represents the pinnacle of Swiss engineering and refined design, curated for those who appreciate the finer things."
          tag="Premium Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands_158538-9455.jpg", imageAlt: "luxury men's watch elegant premium" },
            { imageSrc: "http://img.b2bpic.net/free-photo/man-holding-pocket-watch_23-2147992631.jpg", imageAlt: "silver watch modern elegant design" },
            { imageSrc: "http://img.b2bpic.net/free-photo/crop-woman-speaking-smartphone_23-2147762381.jpg", imageAlt: "exclusive watch collection showcase luxury" }
          ]}
          mediaAnimation="slide-up"
          buttons={[
            { text: "Explore Collection", href: "#products" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured Luxury Watches"
          description="Handpicked timepieces from the world's most prestigious watchmakers"
          tag="Bestsellers"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",              brand: "Royal Wrist",              name: "Elite Chronograph Gold",              price: "₦85,000",              rating: 5,
              reviewCount: "342",              imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accesories-hands_158538-9450.jpg",              imageAlt: "Elite Chronograph Gold Watch"
            },
            {
              id: "2",              brand: "Royal Wrist",              name: "Prestige Silver Edition",              price: "₦65,000",              rating: 5,
              reviewCount: "287",              imageSrc: "http://img.b2bpic.net/free-photo/man-holds-gold-watch_8353-10462.jpg",              imageAlt: "Prestige Silver Edition Watch"
            },
            {
              id: "3",              brand: "Royal Wrist",              name: "Moonphase Blue Dial",              price: "₦95,000",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-photo/modern-black-watch-wrist-man-sitting-car_181624-58251.jpg",              imageAlt: "Moonphase Blue Dial Watch"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Heritage"
          tagIcon={Clock}
          tagAnimation="slide-up"
          title="Craftsmanship Meets Innovation"
          description="Royal Wrist stands as a beacon of luxury in Nigeria's watch market. For over a decade, we have curated the finest timepieces from master watchmakers across Switzerland and Europe. Each watch in our collection represents generations of expertise, precision engineering, and an unwavering commitment to excellence. We believe that a luxury watch is not merely an accessory—it is a statement of taste, a symbol of achievement, and an investment in timeless elegance."
          metrics={[
            { value: "15+", title: "Years of Excellence" },
            { value: "500+", title: "Satisfied Clients" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/craftswoman-working-workshop_107420-65276.jpg"
          imageAlt="Watch Craftsmanship"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Loved by Discerning Customers"
          description="Hear from our clients who have chosen Royal Wrist for their most cherished timepieces"
          tag="Testimonials"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Chisom Okafor",              role: "CEO",              company: "Tech Innovation Ltd",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/portrait-grey-haired-businessman-standing_74855-10324.jpg",              imageAlt: "Chisom Okafor"
            },
            {
              id: "2",              name: "Amara Johnson",              role: "Entrepreneur",              company: "Fashion Collective",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/empowered-business-woman-working-city_23-2149322942.jpg",              imageAlt: "Amara Johnson"
            },
            {
              id: "3",              name: "Adebayo Adeleke",              role: "Investment Manager",              company: "Apex Capital",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1641.jpg",              imageAlt: "Adebayo Adeleke"
            },
            {
              id: "4",              name: "Tunde Oluwaseun",              role: "Business Executive",              company: "Global Ventures",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/cheerful-employee-with-crossed-arms_1098-3148.jpg",              imageAlt: "Tunde Oluwaseun"
            },
            {
              id: "5",              name: "Ngozi Emeka",              role: "Consultant",              company: "Strategic Solutions",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1651.jpg",              imageAlt: "Ngozi Emeka"
            },
            {
              id: "6",              name: "Ibrahim Hassan",              role: "Director",              company: "Premium Lifestyle",              rating: 5,              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-using-sign-language-outdoors-work_23-2148740316.jpg",              imageAlt: "Ibrahim Hassan"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Exclusive Updates & New Arrivals"
          description="Subscribe to our newsletter and be the first to know about our latest luxury collections, exclusive deals, and special events. Join our community of watch enthusiasts across Nigeria."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/businessman-checking-time-hand-watch_53876-20480.jpg?_wi=1"
          imageAlt="Luxury Watch Collection"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/businessman-checking-time-hand-watch_53876-20480.jpg?_wi=2"
          imageAlt="Luxury Watches Collection"
          logoText="Royal Wrist"
          copyrightText="© 2025 Royal Wrist NG. All rights reserved."
          columns={[
            {
              title: "Shop",              items: [
                { label: "New Arrivals", href: "#products" },
                { label: "Bestsellers", href: "#products" },
                { label: "Collections", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#about" },
                { label: "Craftsmanship", href: "#about" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "Email: info@royalwrist.ng", href: "mailto:info@royalwrist.ng" },
                { label: "Abuja, Nigeria", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
