import {
  Box,
  Select,
  Input,
  Flex,
  Text,
  Heading,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
  ButtonGroup,
  IconButton,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import NextImage from 'next/image'

import usePxConverter from '@/hooks/usePxConverter'

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm" marginX="0.5em">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center" marginX="0.3em">
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  )
}

export default function PxConverter() {
  const {
    em,
    fontBase,
    onEmChange,
    onFontBaseChange,
    onOptionChange,
    onPxChange,
    onRemChange,
    option,
    options,
    px,
    rem,
    swapInputs,
  } = usePxConverter()

  return (
    <Box>
      <Heading marginBottom="0.5em">Px Converter</Heading>
      <Select
        onChange={onOptionChange}
        defaultValue="pxToREM"
        bg="white"
        maxWidth="600px"
        margin="0 auto"
      >
        {Object.keys(options).map(optionKey => (
          <option key={optionKey} value={optionKey}>
            {options[optionKey]}
          </option>
        ))}
      </Select>
      <Grid
        templateAreas={
          option === 'PX_REM' || option === 'PX_EM'
            ? "'px icon relative'"
            : "'relative icon px'"
        }
        marginY="1em"
      >
        <GridItem
          display="flex"
          gridArea="px"
          alignItems="center"
          marginX="1em"
        >
          <Input
            type="number"
            name="px"
            bg="white"
            marginRight="0.5em"
            value={px}
            onChange={onPxChange}
          />
          <Text>PX</Text>
        </GridItem>
        <GridItem justifySelf="center" alignSelf="center" gridArea="icon">
          <Box cursor="pointer" onClick={swapInputs}>
            <NextImage
              src="/images/exchange-alt-solid.svg"
              width={20}
              height={20}
            />
          </Box>
        </GridItem>
        {(option === 'PX_REM' || option === 'REM_PX') && (
          <GridItem
            display="flex"
            gridArea="relative"
            alignItems="center"
            marginX="1em"
          >
            <Input
              type="number"
              name="rem"
              bg="white"
              marginRight="0.5em"
              value={rem}
              onChange={onRemChange}
            />
            <Text>REM</Text>
          </GridItem>
        )}
        {(option === 'PX_EM' || option === 'EM_PX') && (
          <GridItem
            display="flex"
            gridArea="relative"
            alignItems="center"
            marginX="1em"
          >
            <Input
              type="number"
              name="em"
              bg="white"
              marginRight="0.5em"
              value={em}
              onChange={onEmChange}
            />
            <Text>EM</Text>
          </GridItem>
        )}
      </Grid>
      <Flex
        display={option === 'PX_REM' || option === 'PX_EM' ? 'flex' : 'none'}
        alignItems="center"
        justifyContent="center"
      >
        <Text>
          Using a <b>{option === 'PX_EM' ? 'parent' : 'root'}</b> font-base of{' '}
        </Text>
        <Editable value={fontBase} onChange={onFontBaseChange}>
          <Flex alignItems="center" marginLeft="0.2em">
            <EditablePreview />
            <EditableInput />
            <EditableControls />
          </Flex>
        </Editable>
        <Text>px</Text>
      </Flex>
    </Box>
  )
}
