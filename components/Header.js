import {
  Flex,
  Heading,
  useDisclosure,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Nav from '@/components/Nav'

const Header = ({ h }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      bg="linkedin.700"
      h={h}
      justify="space-between"
      align="center"
      paddingX="1rem"
    >
      <Heading>Handy Tools</Heading>
      <Button variant="ghost" onClick={onOpen}>
        <HamburgerIcon w={8} h={8} />
      </Button>
      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              Navigation <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody>
              <Nav onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  )
}

export default Header
