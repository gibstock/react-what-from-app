import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import React from 'react'

const RoleChoice = ({actorChecked, producerChecked, handleActorSwitch, handleProducerSwitch}) => {
  return(
    <FormGroup row sx={{
      color: '#000'
    }}>
      <FormControlLabel 
        control={
          <Switch
            checked={actorChecked}
            onChange={handleActorSwitch} 
            color='secondary'/>} 
            name="Actor"
        label="Actor"  />
      <FormControlLabel 
        control={
          <Switch 
            checked={producerChecked}
            onChange={handleProducerSwitch}
            />} 
            name="Producer"
        label="Producer" />
    </FormGroup>
  )
}

export default RoleChoice