import { Header, Footer } from "@/components/layout";
import { Container, Section, Heading, Text, Button, Stack } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20 md:pt-24">
        <Section spacing="large" background="gradient" className="min-h-[60vh] flex items-center">
          <Container width="narrow" className="text-center">
            <Stack gap="xl" align="center">
              <Text size="small" color="secondary" className="uppercase tracking-[0.15em]">
                Page not found
              </Text>
              
              <Heading level={1} size="display">
                This room doesn't exist yet.
              </Heading>
              
              <Text size="large" color="secondary" className="max-w-[45ch] mx-auto">
                Perhaps you're looking for something that's still becoming. 
                Let's find your way back.
              </Text>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button href="/" size="large">
                  Return home
                </Button>
                <Button href="/gathering" variant="ghost">
                  View the gathering
                </Button>
              </div>
            </Stack>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
