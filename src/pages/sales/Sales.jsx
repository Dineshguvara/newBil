import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../scss/style.scss'
import { CContainer } from '@coreui/react'

const Sales = () => {
  return (
    <>
      <CContainer className="bg-white">
        <div className="main_head">
          <h4 className="cap_letter"> Sales </h4>
          <Link to="/sales/form">
            <button className=" btn button">Add Invoice </button>
          </Link>
        </div>
      </CContainer>
    </>
  )
}
export default React.memo(Sales)
