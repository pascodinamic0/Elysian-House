import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Container, Section, Heading, Text, Stack } from "@/components/ui";
import { siteConfig } from "@/content/copy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Elysian House handles your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section spacing="large">
          <Container width="narrow">
            <Stack gap="xl">
              <Heading level={1} size="section">
                Privacy Policy
              </Heading>

              <Stack gap="lg">
                <Stack gap="sm">
                  <Heading level={2} size="subsection">
                    What we collect
                  </Heading>
                  <Text size="base">
                    When you register for a gathering, we collect your name, email address, 
                    and any information you choose to share about what brings you to us. 
                    We also note how you heard about Elysian House to understand how our 
                    community grows.
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Heading level={2} size="subsection">
                    How we use it
                  </Heading>
                  <Text size="base">
                    Your information is used solely to communicate with you about gatherings 
                    you've registered for, and—if you've opted in—to share updates about 
                    future Elysian House events. We do not sell, rent, or share your 
                    personal information with third parties for marketing purposes.
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Heading level={2} size="subsection">
                    Who has access
                  </Heading>
                  <Text size="base">
                    Only the Elysian House team has access to your information. We use 
                    secure, trusted services to store and manage registrations. Your data 
                    is handled with the same care and intention we bring to our gatherings.
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Heading level={2} size="subsection">
                    Your choices
                  </Heading>
                  <Text size="base">
                    You can unsubscribe from our communications at any time by clicking 
                    the unsubscribe link in any email. If you'd like us to delete your 
                    information entirely, simply reach out and we'll take care of it.
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Heading level={2} size="subsection">
                    Cookies & analytics
                  </Heading>
                  <Text size="base">
                    We use privacy-respecting analytics to understand how people interact 
                    with our website. We don't use cookies for advertising or tracking 
                    across other sites. Your theme preference (light/dark) is stored 
                    locally on your device.
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Heading level={2} size="subsection">
                    Questions
                  </Heading>
                  <Text size="base">
                    If you have questions about how we handle your information, 
                    please reach out. We believe in transparency and will always 
                    be honest with you about our practices.
                  </Text>
                </Stack>

                <Text size="small" color="secondary" className="pt-8">
                  Last updated: January 2026
                </Text>
              </Stack>
            </Stack>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
