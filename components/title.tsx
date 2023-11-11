'use client'

import { useApp } from '@/context/AppContext'
import React from 'react'

interface ITitleProps {
    title: string
}

export const Title = ({title} : ITitleProps) => {
    useApp({ title }) 
  return (<></>)
}
