import { SimpleGrid } from '@chakra-ui/react'

import { links } from '@/lib/constants'
import SectionItem from './SectionItem'

const Nav = ({ onClose }) => {
  return (
    <SimpleGrid width="100%" gap={8} minChildWidth="21rem">
      {links.map(link => (
        <SectionItem
          key={link.title}
          img={link.thumbnail}
          title={link.title}
          link={link.href}
          onClick={onClose}
        />
      ))}
    </SimpleGrid>
  )
}

export default Nav
