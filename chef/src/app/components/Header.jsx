"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="space-y-10 shadow-2xl">
        <div className="text-black flex justify-center items-center h-[3rem] pt-8 gap-2">
            <Image className="object-contain" width={40} height={40} alt="app logo" src="/chef-claude-icon.png"/>
            <h1 className="font-light text-3xl tracking-tight">Chef Enerst</h1>            
        </div>
        <hr className="bg-slate-300"/>
    </div>
  )
}

export default Header