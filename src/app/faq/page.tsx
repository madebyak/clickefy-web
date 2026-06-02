import SubpageLayout from "@/components/SubpageLayout";
import FaqAccordion from "@/components/FaqAccordion";

export default function FAQPage() {
  return (
    <SubpageLayout
      eyebrow="// frequently asked"
      title={
        <>
          Everything you need <br />
          to know.
        </>
      }
      description="Detailed answers to common questions about Clickefy. If you can't find what you're looking for, feel free to reach out."
    >
      <FaqAccordion />
    </SubpageLayout>
  );
}
