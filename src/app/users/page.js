'use client'
import React from 'react'
import User from '@/components/users/User'

export default function Page() {
  return (
    <div className="flex">
      <div className="flex-1">
        <User />
      </div>
    </div>
  )
}