import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import SearchPage from './SearchPage'

function index() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Zeitmovie - Search</title>
        </Helmet>
      </HelmetProvider>

      <SearchPage />
    </>
  )
}

export default index
