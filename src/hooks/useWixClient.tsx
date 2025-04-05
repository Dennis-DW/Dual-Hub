'use client'
import { useContext } from "react"
import { myWixClientContext } from "@/context/wixContext"

export const useWixClient =()=>{
  return useContext(myWixClientContext)
}

