import React from 'react'


function Header(){





    return(
        <header>
      <nav className='navbar'>
        <h1 className='branding'>
          <span className='logo'>{''}</span>
          To Do List
        </h1>
        <div className='navigation'>
          <a className='button' href='/'>
            HOME
          </a>
          <a className='button' href='/char'>
            All Tasks
          </a>
          <a className='button' href='/form'>
            New Task
          </a>
        </div>
      </nav>
    </header>
    )
}

export default Header;