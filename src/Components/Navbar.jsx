import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className='mt-3 ml-52  flex gap-20'>

                <div className="logo"> <img className='h-8 w-22' src="logo1.png" alt="" /></div>

                <div className=' flex gap-24 mt-3'>

                    <h2 className='font-bold text-2xl'>Component Manager</h2>
                    <ul className='list-none pt-2 pr-24 flex gap-10 justify-evenly'>
                        <li className="home"><a className="ho" href="#">Home</a></li>
                        <li className='pl-5'><a href="#">New Component Entry</a></li>
                        <li><a href="#">Component Database</a></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar
