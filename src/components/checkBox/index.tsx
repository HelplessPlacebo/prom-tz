import React, { useState } from 'react'
import './index.css'

interface props {
  label: string,
  checked?: boolean,
  onClick?: () => void,
  disabled?: boolean
}

export const CheckBox: React.FC<props> = ({ label, checked, disabled }) => {
  const defaultChecked = checked || false
  const [isChecked, setIsChecked] = useState(defaultChecked)
  return <label className="container">
    {label}
    <input type="checkbox" checked={isChecked} disabled={disabled} onChange={() => { setIsChecked(!isChecked) }} />
    <span className="checkmark" />
  </label>
}
