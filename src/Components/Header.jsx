import React from 'react'




const Header = () => {
    const values = ["home","about","contact","news"];
  return (
    <div className='header'>
        <div className='header__heading'>
        <h1>
            Expense tracker
        </h1>
        <h2>
            About
        </h2>
        </div>
        {/* <div className='header__sidebar'>
            <ul className='header__sidebar_list'>
                {values.map(value=>(
                    <li className='header__sidebar_list--item'>{value}</li>
                ))}
            </ul>
        </div> */}

    </div>
  )
}

export default Header