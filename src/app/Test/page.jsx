"use client";
import AnimatedSocialIcons from "@/components/AnimatedSocialicons";
import DrawRandomUnderline from "@/components/DrawRandomUnderline";
import AnimatedHoverDisclosures from "@/components/HoverDisclosures";
import NewFooter from "@/components/NewFooter";
import AnimatedSideNav from "@/components/OsmoSideNav";

export default function HomePage() {
  return (

    <div className="min-h-screen relative">
      <AnimatedSideNav />
      {/* Container for both main content and social icons */}
      <div className="relative">
        <AnimatedHoverDisclosures />
      </div>
      <div className="relative">
        <DrawRandomUnderline />
      </div>
      <div className="relative">
        <AnimatedSocialIcons />
      </div>
      <div className="relative">
        <NewFooter />
      </div>
    </div>
  );
}
