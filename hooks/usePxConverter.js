import { useState } from 'react'

export default function usePxConverter() {
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
    setEm(newPxValue / fontBase)
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
    setRem(px / newFontBase)
    setEm(px / newFontBase)
  }

  return {
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
  }
}
