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
    <ButtonGroup {...styles.buttonGroup}>
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex {...styles.flexCenter} marginX="0.3em">
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
      <Heading {...styles.heading}>Px Converter</Heading>
      <Select
        onChange={onOptionChange}
        defaultValue="pxToREM"
        {...styles.select}
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
        {...styles.grid}
      >
        <GridItem gridArea="px" {...styles.gridItem}>
          <Input
            type="number"
            name="px"
            value={px}
            onChange={onPxChange}
            {...styles.input}
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
          <GridItem gridArea="relative" al {...styles.gridItem}>
            <Input
              type="number"
              name="rem"
              value={rem}
              onChange={onRemChange}
              {...styles.input}
            />
            <Text>REM</Text>
          </GridItem>
        )}
        {(option === 'PX_EM' || option === 'EM_PX') && (
          <GridItem gridArea="relative" {...styles.gridItem}>
            <Input
              type="number"
              name="em"
              value={em}
              onChange={onEmChange}
              {...styles.input}
            />
            <Text>EM</Text>
          </GridItem>
        )}
      </Grid>
      <Flex
        display={option === 'PX_REM' || option === 'PX_EM' ? 'flex' : 'none'}
        {...styles.flexCenter}
      >
        <Text>
          Using a <b>{option === 'PX_EM' ? 'parent' : 'root'}</b> font-base of{' '}
        </Text>
        <Editable value={fontBase} onChange={onFontBaseChange}>
          <Flex {...styles.flex}>
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

const styles = {
  heading: {
    marginBottom: '0.5em',
  },
  flex: {
    alignItems: 'center',
    marginLeft: '0.2em',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    bg: 'whiteAlpha.900',
    marginRight: '0.5em',
  },
  select: {
    bg: 'whiteAlpha.900',
    maxWidth: '400px',
    margin: '0 auto',
  },
  grid: {
    maxWidth: '600px',
    margin: '1.5em auto',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    marginX: '1em',
  },
  buttonGroup: {
    justifyContent: 'center',
    size: 'sm',
    marginX: '0.5em',
  },
}
