import { useState } from 'react'

export default function usePxConverter() {
  const [option, setOption] = useState('PX_REM')
  const [px, setPx] = useState(0)
  const [rem, setRem] = useState(0)
  const [em, setEm] = useState(0)
  const [fontBase, setFontBase] = useState(16)

  const options = Object.freeze({
    PX_REM: 'PX to REM',
    PX_EM: 'PX to EM',
    REM_PX: 'REM to PX',
    EM_PX: 'EM to PX',
  })

  const optionChange = newOption => {
    const newRelativeValue = px / fontBase
    setOption(newOption)

    if (newOption === 'PX_REM') {
      setRem(newRelativeValue)
    } else if (newOption === 'PX_EM') {
      setEm(newRelativeValue)
    }
  }

  const swapInputs = () => {
    let newOption = ''

    if (option === 'PX_REM') {
      newOption = 'REM_PX'
    } else if (option === 'PX_EM') {
      newOption = 'EM_PX'
    } else if (option === 'REM_PX') {
      newOption = 'PX_REM'
    } else {
      newOption = 'PX_EM'
    }

    optionChange(newOption)
  }

  const onOptionChange = event => {
    optionChange(event.target.value)
  }

  const onPxChange = event => {
    const { value: newPxValue } = event.target
    const newRelativeValue = newPxValue / fontBase

    setPx(newPxValue)

    if (option === 'PX_REM' || option === 'REM_PX') {
      setRem(newRelativeValue)
    } else if (option === 'PX_EM' || option === 'EM_PX') {
      setEm(newRelativeValue)
    }
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
    const newRelativeValue = px / newFontBase

    setFontBase(newFontBase)

    if (option === 'PX_REM' || option === 'PX_EM') {
      setRem(newRelativeValue)
      setEm(newRelativeValue)
    }
  }

  return {
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
  }
}
