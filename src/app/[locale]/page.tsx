import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesPreview } from "@/components/home/features-preview";
import { VideoSection } from "@/components/home/video-section";
import { SocialProof } from "@/components/home/social-proof";
import { CtaSection } from "@/components/home/cta-section";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
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
