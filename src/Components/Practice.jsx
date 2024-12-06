import React, { useState } from 'react'
import NavLayout from './NavLayout'

const Practice = () => {
    const[open,setOpen]= useState(false)
    // const [button,setButton]= useState('')

    const openhandle = ()=>{
        if(open===false){
            setOpen(true)
        setOpen('Hide')
        }
        else{
            setOpen(false)
        }
    }
    // const closeHandle = ()=>{
    //     setOpen(false)
    //     setOpen('Open')
    // }
    return (
        <>
            <NavLayout>
                <div className='w-8/12 mx-auto border border-grey-300 my-14'>
                <div className='flex flex-col gap-3 my-2'>
                    <h1 className='font-semibold text-center'>This is Practice Components</h1>
                   {
                    open ?  <div>
                        <img src='/potrait.jpg'/> 
                    </div> :  <div><h1>Not a picture</h1></div>
                   }
                    


                   <div className='flex flex-col justify-center items-center gap-2'>
                   <button onClick={openhandle}
                   >{
                    open ? <div className='bg-red-500 hover:bg-red-300 py-2 px-8 rounded item-center text-white w-fit font-semibold'>Hide</div> :<div className='bg-green-500 py-2 px-8 rounded item-center text-white w-fit font-semibold hover:bg-yellow-300'>Open</div>
                   }</button>
              
                   </div>
                </div>

                </div>
            </NavLayout>
        </>
    )
}

export default Practice