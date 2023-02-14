import React from 'react'
import { BreadcrumbItem,BreadcrumbLink,Breadcrumb,Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav >
      <spacer/>
      <Box border={'black'} pl={15} pt={2} fontWeight={500} borderRadius={3} h={45} color='red' bg={'gray.300'}>
    <Breadcrumb >
  <BreadcrumbItem>
    <a href='./' pr={3} >Home</a>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <a href='./About.js' pr={3} >About</a>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <a href='#' pr={3} >Contact</a>
  </BreadcrumbItem>
</Breadcrumb>
</Box>
  </nav>
  </>
  )
}
