import React, { useState } from "react";
import { TUser } from '../../../assets/types'
import { CheckBox } from '../checkBox'

export const Users: React.FC<{users: TUser[]}> = ({ users }) => {
  return <div>
    {users.map((user) => {
      return <CheckBox key={user.id} label={user.username} />
    })}
  </div>
}
