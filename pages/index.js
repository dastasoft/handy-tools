import { SimpleGrid } from '@chakra-ui/react'

import SectionItem from '@/components/SectionItem'
import { links } from '@/lib/constants'

export default function Home() {
  return (
    <SimpleGrid width="100%" gap={8} minChildWidth="21rem" gridAutoRows="1fr">
      {links
        .filter(link => link.href !== '/')
        .map(link => (
          <SectionItem
            key={link.title}
            img={link.thumbnail}
            title={link.title}
            link={link.href}
          />
        ))}
    </SimpleGrid>
  )
}
