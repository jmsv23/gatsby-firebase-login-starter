import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import { withContextForm } from 'formcat'

const InputField = ({ error, icon, iconPosition, ...input }) => (
  <Input error={error} iconPosition={iconPosition} {...input}>
    {icon && <Icon name={icon} /> }
    <input {...input} />
  </Input>
)

export default withContextForm(InputField)
