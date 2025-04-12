'use client'
import React, { useState, useEffect } from 'react'
import Menu from '@/components/layout/Menu'
import User from '@/components/users/User'

export default function Page() {
  return (
    <div style={{ display: 'flex', }}>
      <div style={{ flex: '0 0 auto' }}>
        <Menu />
      </div>
      <div style={{ flex: '1' }}>
        <User />
      </div>
    </div>
  )
}