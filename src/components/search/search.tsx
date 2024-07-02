import CustomInputTag from '@/shared/custom-input-tag/custom-input-tag'
import React, { useState } from 'react'
import {data} from "./data"

const Search = () => {
  
    const [searchData, setSearchData] = useState(data)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const filteredData = data.filter(item => 
            item.toLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
        setSearchData(filteredData)
    }
  return (
    <div className='flex flex-col gap-1'>
        <h1>Search query</h1>
        <CustomInputTag type='text' placeholder='Search' changeEvent={handleSearch} />
        {searchData &&
        searchData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  )
}

export default Search