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
          <p>Web Developer</p>
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
          Hello! 👋 I am Makarov Timur. Web Developer and technology enthusiast.
          I enjoy taking complex and practical problems and turning them into
          beautiful webpages. I am able to work well both in a team environment
          as well as using own initiative. Always strive to write elegant and
          efficient code whether it be React, Vue, NodeJs, or Python.
          <br></br>
          When I'm not coding, you'll find me playing around with new
          technologies, hanging out with my friends and exploring the beauty of
          🏞 the nature.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Kazan, Russia.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated from KTITS Web and Multimedia applications, Kazan
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Freelance Frontend developer at Madely
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Freelance Fullstack developer at Cruzo
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <p>
          <text style={{ color: 'pink' }}>Coding</text>, Athletics, System
          Administration, <text style={{ color: 'pink' }}>AI</text>, Technology
          and Reading
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
            <a href="https://disk.yandex.com/i/kEPC8ZoAS_6O8Q">
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
