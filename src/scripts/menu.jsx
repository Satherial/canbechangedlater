import React from 'react'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const MenuComponent = props => (
  <Menu>
    <MenuItem primaryText="Contatti" onItemClick={props.setPage('contatti')} />
    <MenuItem primaryText="Team" onItemClick={props.setPage('team')} />
    <MenuItem
      primaryText="Portfolio"
      onItemClick={props.setPage('portfolio')}
    />
    <Divider />
    <MenuItem
      primaryText="Web\Mobile"
      onItemClick={props.setPage('webmobile')}
    />
    <MenuItem
      primaryText="Ux\Ui Design"
      onItemClick={props.setPage('uxuidesign')}
    />
    <MenuItem
      primaryText="Formazione"
      onItemClick={props.setPage('formazione')}
    />
    <MenuItem
      primaryText="Progetti chiavi in mano"
      onItemClick={props.setPage('progetti')}
    />
  </Menu>
)

export default MenuComponent
