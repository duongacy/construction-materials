import type { BlogsSection } from '../components/BlogsSection';
import type { HeroSection } from '../components/HeroSection';
import type { ImageSection } from '../components/ImageSection';
import type { LogosCloudSection } from '../components/LogosCloudSection';
import type { StatsSection } from '../components/StatsSection';
import type { TeamSection } from '../components/TeamSection';
import type { ValuesSection } from '../components/ValuesSection';

export type AboutUsPage = {
  heroSection: HeroSection;
  blogsSection: BlogsSection;
  imageSection: ImageSection;
  logosCloudSection: LogosCloudSection;
  statsSection: StatsSection;
  teamSection: TeamSection;
  valuesSection: ValuesSection;
};
