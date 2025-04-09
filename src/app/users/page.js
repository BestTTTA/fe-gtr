'use client'
import React, { useState, useEffect } from 'react'
import Menu from '@/components/layout/Menu'
import User from '@/components/users/User'

export default function Page() {
  return (
    <>
        <Menu />
      <User />
    </>
  )
}