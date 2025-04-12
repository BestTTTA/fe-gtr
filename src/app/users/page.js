'use client'
import React, { useState, useEffect } from 'react'
import Menu from '@/components/layout/Menu'
import User from '@/components/users/User'

export default function Page() {
  return (
    <div className="flex">
      <div className="flex-none">
        <Menu />
      </div>
      <div className="flex-1">
        <User />
      </div>
    </div>
  )
}