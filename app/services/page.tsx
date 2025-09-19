'use client'
import React from 'react'
import ServiceLoop from './components/serviceloop'
import ServiceBoost from './components/serviceboost'
import TransformBusiness from '../components/common/TransformBusiness'

export default function ServicesPage() {
  return (
    <div>
        <ServiceLoop />
        <ServiceBoost />
        <TransformBusiness />
    </div>
  )
}
