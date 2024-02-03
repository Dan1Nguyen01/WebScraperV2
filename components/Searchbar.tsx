"use client"

import { scrapeAndStoreProduct } from "@/lib/actions"
import { FormEvent, useState } from "react"


const isValidAmazonProductURL = (url:string)=> {
  try{
      const parsedURL = new URL(url)
      const hostname = parsedURL.hostname

      if(hostname.includes("amazon.com")|| hostname.includes("amazon.")|| hostname.includes("amazon") ){
        return true;
      }

  }catch(error){
    console.log(error)
    return false
  }
}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchPrompt)

        if(!isValidLink){
          return alert  ("Invalid link, please provide amazon link")
        }
        try{
          setIsLoading(true)

          const product = await scrapeAndStoreProduct(searchPrompt)
        }catch(error){
          console.log(error)
        }finally{
          setIsLoading(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} className='flex flex-wrap gap-4 mt-12="'>

        <input type="text" placeholder="Enter product link" 
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e)=> setSearchPrompt(e.target.value)}/>

        <button 
        type="submit" 
        className="searchbar-btn"
        disabled={searchPrompt ===""}
        >{isLoading ? "Searching...":"Search"}</button>
    </form>
  )
}

export default Searchbar