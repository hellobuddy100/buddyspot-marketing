import { HeroSection } from "@/components/home/hero-section";
import { FeaturesPreview } from "@/components/home/features-preview";
import { VideoSection } from "@/components/home/video-section";
import { SocialProof } from "@/components/home/social-proof";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesPreview />
      <VideoSection />
      <SocialProof />
      <CtaSection />
    </>
  );
}
