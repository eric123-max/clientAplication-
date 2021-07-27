import React from 'react'
import { Select } from 'semantic-ui-react'

const menuoptions = [
  { key: 'me', value: 'me', text: 'menu' },
  { key: 'co', value: 'co', text: 'comments' },
  { key: 'br', value: 'br', text: 'breakfast' },
  { key: 'lu', value: 'lu', text: 'lunch' },
  { key: 'di', value: 'di', text: 'dinner' },
  { key: 'mid', value: 'mid', text: 'midnight snack' },
]

const Navigation = () => (
  <Select placeholder='-Select-' options={menuoptions} />
)

export default Navigation
