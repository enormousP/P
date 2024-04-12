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
        Hello! ¡Hola! Привет! გამარჯობა!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Makarov Timur
          </Heading>
          <p>Software Engineer</p>
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
          I have 3+ years of experience as an engineer, teacher and fan of software.
          I turn ideas and tasks into elegant backend structures with modern user interfaces.  
          Technology agnostic: I use and quickly learn those tools that are needed
          <br></br>
          I'm highly motivated to learn more and live a better life. So, when I'm not
          working, you'll find me studying new technologies, reading books or being present, watching my thoughts come and go.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>Artificy</BioYear>
          <span style={{ display: "block", "margin-bottom": "5px" }}>May 2023 - Now</span>
          <p style={{ textIndent: 0 }}>              
              - Backend development in Go/PHP
                <br />
              - Frontend development
                <br />
              - Development of tools for data collection and processing
                <br />
              - Development of services based on ML in Python
              <br />
              <br />
          </p>
        </BioSection>
        <BioSection>
          <BioYear>Cruzo</BioYear>
          <span style={{ display: "block", "margin-bottom": "5px" }}>July 2022 - May 2023</span>
          <p style={{ textIndent: 0 }}>              
              - Backend development
                <br />
              - Web3 ingeration
                <br />
              - Introducing external blockchain solutions
                <br />
              - Create user interface and complex animations
                <br />
              - Project maintenance, expansion and scaling
                <br />
              - Set up and integrate SEO and Analytics
              <br />
              <br />
          </p>
        </BioSection>
        <BioSection>
          <BioYear>Madely</BioYear>
          <span style={{ display: "block", "margin-bottom": "5px" }}>May 2021 - July 2022</span>
          <p style={{ textIndent: 0 }}>
              - Backend development
                <br />
              - Development of tools to collect and work with data
                <br />
              - Design and creation of user interfaces
                <br />
              - Set up and integrate SEO and Analytics
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
            <a href="https://drive.google.com/file/d/1XDE0Zjyt3km7dcolK444ncWmlpQj-Yyx/view?usp=sharing">
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
