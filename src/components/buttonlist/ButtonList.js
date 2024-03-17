import React from 'react'

const buttonList = ["All", "Javascript", "Java", "Live", "React", "Music", "Songs","Vlogs","Trending","Programming", "Home repair", "Tourism", "Handicrafts", "Visual arts", "Mathematics", "Latest uploads", "Viewed", "new suggestions"]



const ButtonList = () => {
  return (
    <div className='py-2'>
      {
        buttonList.map((buttonName,index)=>{
        return <button key={index} className='bg-gray-200 px-4 py-1 font-medium rounded-lg mx-2'>{buttonName}</button>
        }
     )}
    </div>
  )
}

export default ButtonList