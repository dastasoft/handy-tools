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

import usePxConverter from '@/hooks/usePxConverter'

const OPTIONS = Object.freeze({
  pxToREM: 'PX to REM',
  pxToEm: 'PX to EM',
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
  const {
    onOptionChange,
    px,
    onPxChange,
    option,
    rem,
    onRemChange,
    em,
    onEmChange,
    fontBase,
    onFontBaseChange,
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
        {Object.keys(OPTIONS).map(optionKey => (
          <option key={optionKey} value={optionKey}>
            {OPTIONS[optionKey]}
          </option>
        ))}
      </Select>
      <Flex justifyContent="center" alignItems="center" marginY="1em">
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
        {OPTIONS[option] === OPTIONS.pxToREM && (
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
        {OPTIONS[option] === OPTIONS.pxToEm && (
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
          <b>{OPTIONS[option] === OPTIONS.pxToEm ? 'parent' : 'root'}</b>{' '}
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
