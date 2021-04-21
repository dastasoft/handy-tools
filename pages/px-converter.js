import { useState } from 'react'
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
} from '@chakra-ui/react'
import { ArrowLeftIcon, CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'

const OPTIONS = Object.freeze({
  pxToREM: 'PX to REM',
  pxToEm: 'PX to EM',
  RemToPx: 'REM to PX',
  EmToPx: 'EM to PX',
})

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
  const [option, setOption] = useState('pxToREM')
  const [px, setPx] = useState(0)
  const [rem, setRem] = useState(0)
  const [em, setEm] = useState(0)
  const [fontBase, setFontBase] = useState(16)

  const onOptionChange = event => setOption(event.target.value)

  const onPxChange = event => {
    const { value: newPxValue } = event.target

    setPx(newPxValue)
    setRem(newPxValue / fontBase)
  }

  const onRemChange = event => {
    const { value: newRemValue } = event.target

    setRem(newRemValue)
    setPx(newRemValue * fontBase)
  }

  const onEmChange = event => {
    const { value: newEmValue } = event.target

    setEm(newEmValue)
    setPx(newEmValue * fontBase)
  }

  const onFontBaseChange = newFontBase => {
    setFontBase(newFontBase)
    setRem(rem / newFontBase)
  }

  return (
    <Box>
      <Heading marginBottom="0.5em">Px Converter</Heading>
      <Select bg="white" onChange={onOptionChange} defaultValue="pxToREM">
        {Object.keys(OPTIONS).map(optionKey => (
          <option key={optionKey} value={optionKey}>
            {OPTIONS[optionKey]}
          </option>
        ))}
      </Select>
      <Flex justifyContent="space-between" alignItems="center" marginY="1em">
        <Flex alignItems="center" marginX="1em">
          <Input
            type="number"
            name="px"
            bg="white"
            marginRight="0.5em"
            value={px}
            onChange={onPxChange}
          />
          <Text>PX</Text>
        </Flex>
        <ArrowLeftIcon />
        {(OPTIONS[option] === OPTIONS.pxToREM ||
          OPTIONS[option] === OPTIONS.RemToPx) && (
          <Flex alignItems="center" marginX="1em">
            <Input
              type="number"
              name="rem"
              bg="white"
              marginRight="0.5em"
              value={rem}
              onChange={onRemChange}
            />
            <Text>REM</Text>
          </Flex>
        )}
        {(OPTIONS[option] === OPTIONS.pxToEm ||
          OPTIONS[option] === OPTIONS.EmToPx) && (
          <Flex alignItems="center" marginX="1em">
            <Input
              type="number"
              name="em"
              bg="white"
              marginRight="0.5em"
              value={em}
              onChange={onEmChange}
            />
            <Text>EM</Text>
          </Flex>
        )}
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Text>
          Using a{' '}
          <b>
            {OPTIONS[option] === OPTIONS.pxToEm ||
            OPTIONS[option] === OPTIONS.EmToPx
              ? 'parent'
              : 'root'}
          </b>{' '}
          font-base of{' '}
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
