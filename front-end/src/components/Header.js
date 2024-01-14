import React from 'react'
import { useUser } from '../auth/useUser';

function Header() {
  const user = useUser();
  console.log(user);
  const {info, email} = user
  return (
    <div className='text-xl p-5 w-full bg-black mb-5 text-white items-right flex justify-end'>
      {info.name}
      <br />
      {email}
    </div>
  )
}

export default Header;