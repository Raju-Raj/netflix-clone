import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({title}) => {
  return (
    <Helmet>
        {`Netflix-${title}`}
    </Helmet>
  )
}

export default MetaData