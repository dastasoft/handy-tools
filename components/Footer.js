import { Link, Icon, Flex, Text, Stack } from '@chakra-ui/react'
import { IoLogoLinkedin } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { DiGithubBadge } from 'react-icons/di'
import { FaDev } from 'react-icons/fa'

const links = [
  {
    icon: FaDev,
    label: 'dev.to',
    href: 'https://dev.to/dastasoft',
  },
  {
    icon: DiGithubBadge,
    label: 'GitHub',
    href: 'https://github.com/dastasoft',
  },
  {
    icon: IoLogoLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dastasoft/',
  },
  {
    icon: MdEmail,
    label: 'Email',
    href: 'mailto:dastasoft@protonmail.com',
  },
]

const FooterLink = ({ icon, href, label }) => (
  <Link display="inline-block" href={href} aria-label={label} isExternal>
    <Icon as={icon} fontSize="xl" color="gray.400" />
  </Link>
)

const Footer = ({ h }) => {
  return (
    <Flex
      as="footer"
      marginY={2}
      h={h}
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="sm">
        Made by{' '}
        <Link
          display="inline-block"
          href="https://dastasoft.com"
          aria-label="webpage"
          isExternal
        >
          <Text fontSize="sm">dastasoft</Text>
        </Link>
      </Text>
      <Stack ml={2} direction="row" spacing="12px" justify="center">
        {links.map(link => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </Flex>
  )
}

export default Footer
