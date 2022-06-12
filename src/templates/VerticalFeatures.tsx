import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="About CareMyPal"
    description="CareMyPal is the first of its kind of initiative that enables care seekers, who are looking for in-home health care, to meet the right home caregivers based on their needs. Driven by technology and a dedicated team, we help people understand their home care needs."
  >
    <VerticalFeatureRow
      title="How it works?"
      description="Once your home care need is clearly defined, you can arrange yourselves for the most affordable and best care or can look out for our expert assistance to help you find the right caregiver."
      image="/assets/images/banner-image.jpg"
      imageAlt="How it works?"
    />
    <VerticalFeatureRow
      title="Our services"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/baby-care.png"
      imageAlt="Baby care"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
