import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  Flex,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin, IoLink } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="65ch">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m currently looking for a job
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Makarov Timur
          </Heading>
          <p>Fullstack Web Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/pp.png"
              alt="Profile image"
              // borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hello! 👋 I am Makarov Timur. Fullstack Web Developer. I enjoy taking
          problems and turning them into robustly tied elegant backend
          structures with modern user interfaces. Always strive to
          write good code whether it be in TypeScript, Python, Go or PHP.
          <br></br>
          I'm a highly motivated to learn more and live a better life. So, when I'm not
          working, you'll find me studing new technologies, reading books or being present, watching my thoughts come and go.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>Artificy</BioYear>
          <p style={{ textIndent: 0 }}>              
            - Development on server and client sides
              <br />
            - Development of tools for data collection and processing
              <br />
          </p>
        </BioSection>
        <BioSection>
          <BioYear>Cruzo</BioYear>
          <p style={{ textIndent: 0 }}>              
            - Create user interface and complex animations
              <br />
            - Backend Development
              <br />
            - Web3 Development
              <br />
            - Introducing external blockchain solutions
              <br />
            - Project maintenance, expansion and scaling
              <br />
            - SEO and Analytics
              <br />
          </p>
        </BioSection>
        <BioSection>
          <BioYear>Madely</BioYear>
          <p style={{ textIndent: 0 }}>
            - Maintenance and improvement of existing code base
              <br />
            - Development of plugins and parsers
              <br />
            - SEO and Analytics
              <br />
            - Design and creation of user interfaces
              <br />
            - Backend Development
          </p>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <p>
          <text style={{ color: 'pink' }}>Software deveploment</text>, Athletics, Finance, <text style={{ color: 'pink' }}>Technology</text> and Books
        </p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <Flex>
          <Box>
            <Link href="https://github.com/PowderDev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @PowderDev
              </Button>
            </Link>
          </Box>
          <Box>
            <Link href="https://www.linkedin.com/in/makarovt/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Makarovt
              </Button>
            </Link>
          </Box>
          {/* <Box>
            <Link href="mailto:makarov-timyr@ya.ru" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                makarov-timyr@ya.ru
              </Button>
            </Link>
          </Box> */}

          {/* <Box>
            <Link
              href="https://geeklink.io/members/makarovtimur"
              target="_blank"
            >
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoLink />}>
                @MakarovTimur
              </Button>
            </Link>
          </Box> */}
        </Flex>

        <Box align="center" my={4}>
          <Button colorScheme="teal">
            <a href="https://drive.google.com/file/d/1rYepx8HCmKBiDRW66I6_gaeC_rFZOs9A/view?usp=sharing">
              Download Resume
            </a>
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
