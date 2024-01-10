import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import '../../scss/style.scss'
import { useForm, Controller } from 'react-hook-form'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CButton,
  CFormInput,
  CModalFooter,
  CFormLabel,
  CForm,
  CContainer,
  CRow,
  CCol,
  CFormControlWrapper,
  CFormText,
  CInputGroupText,
  CInputGroup,
} from '@coreui/react'

const tableHeaderstyle = {
  headCells: {
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      backgroundColor: '#ccc',
    },
  },
}
const columns = [
  {
    name: 'Sr.No',
    selector: (row) => row.id,
  },
  {
    name: 'Title',
    selector: (row) => row.title,
  },
  {
    name: 'Category',
    selector: (row) => row.category,
  },
  {
    name: 'Price',
    selector: (row) => row.price,
  },
  {
    name: 'Action',
    cell: (row) => (
      <button
        className="btn btn-danger"
        // onClick={() => handleDelete(row.id)}
      >
        Delete
      </button>
    ),
  },
]

const Category = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [data, setData] = useState([])
  const [search, SetSearch] = useState('')
  const [filter, setFilter] = useState([])

  const [visible, setVisible] = useState(false)

  const handleClick = () => {
    setVisible(false)
    reset()
  }

  const formSubmiter = async (data) => {
    setVisible(false)
    console.log(data)
    reset()
  }

  const getProduct = async () => {
    try {
      const req = await fetch('https://fakestoreapi.com/products')
      const res = await req.json()
      setData(res)
      setFilter(res)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProduct()
  }, [])

  useEffect(() => {
    const result = data.filter((item) => {
      return item.title.toLowerCase().match(search.toLocaleLowerCase())
    })
    setFilter(result)
  }, [search])

  return (
    <>
      <CContainer>
        {/* Form View */}
        <div className="bg-white">
          <div className="main_head">
            <h5 className="cap_letter"> CATEGORY </h5>
            <button className=" btn button" onClick={() => setVisible(!visible)}>
              Add ( + )
            </button>
          </div>
          <CModal
            backdrop="static"
            visible={visible}
            onClose={handleClick}
            aria-labelledby="StaticBackdropExampleLabel"
            className="modal-lg"
          >
            <CModalHeader className="form_header">
              <CModalTitle className="cap_letter ">NEW CATEGORY</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm onSubmit={handleSubmit(formSubmiter)}>
                <CContainer className="p-2">
                  <CRow>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.category_name}>
                        <CFormLabel className="form_label">Category Name</CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('category_name', {
                            required: 'Category Name is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.category_name && errors.category_name.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.description}>
                        <CFormLabel className="form_label"> Description </CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('description', {
                            required: 'Description is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.description && errors.description.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                  </CRow>
                </CContainer>
                <CModalFooter>
                  <CButton color="secondary" onClick={handleClick}>
                    Close
                  </CButton>
                  <CButton type="submit" className="button">
                    Save
                  </CButton>
                </CModalFooter>
              </CForm>
            </CModalBody>
          </CModal>
        </div>
        {/* Table View*/}
        <DataTable
          pagination
          customStyles={tableHeaderstyle}
          columns={columns}
          data={filter}
          fixedHeader
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
            <>
              <CInputGroup>
                <input
                  type="text"
                  className="w-25 form-control"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => SetSearch(e.target.value)}
                />
              </CInputGroup>
            </>
          }
          subHeaderAlign="right"
        />
      </CContainer>
    </>
  )
}
export default React.memo(Category)
