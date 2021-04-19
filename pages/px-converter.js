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
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
    </Flex>
  )
}

export default function PxConverter() {
  const [option, setOption] = useState('pxToREM')
  const [fontBase, setFontBase] = useState(16)

  const onChangeHandler = event => setOption(event.target.value)

  return (
    <Box>
      <Heading>Px Converter</Heading>
      <Select bg="white" onChange={onChangeHandler} defaultValue="pxToREM">
        {Object.keys(OPTIONS).map(optionKey => (
          <option key={optionKey} value={optionKey}>
            {OPTIONS[optionKey]}
          </option>
        ))}
      </Select>
      <Flex justifyContent="space-between" alignItems="center" marginY="1em">
        <Flex alignItems="center" marginX="1em">
          <Input type="number" name="px" bg="white" marginRight="0.5em" />
          <Text>PX</Text>
        </Flex>
        <ArrowLeftIcon />
        {(OPTIONS[option] === OPTIONS.pxToREM ||
          OPTIONS[option] === OPTIONS.RemToPx) && (
          <Flex alignItems="center" marginX="1em">
            <Input type="number" name="rem" bg="white" marginRight="0.5em" />
            <Text>REM</Text>
          </Flex>
        )}
        {(OPTIONS[option] === OPTIONS.pxToEm ||
          OPTIONS[option] === OPTIONS.EmToPx) && (
          <Flex alignItems="center" marginX="1em">
            <Input type="number" name="em" bg="white" marginRight="0.5em" />
            <Text>EM</Text>
          </Flex>
        )}
      </Flex>
      <Flex alignItems="center">
        <Text>Utilizing a font-base of </Text>
        <Editable value={fontBase} onChange={value => setFontBase(value)}>
          <Flex alignItems="center" marginX="0.5em">
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
