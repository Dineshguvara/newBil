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
  CLabel,
  CFormInput,
  CModalFooter,
  CError,
  CFormLabel,
  CForm,
  CFormGroup,
  CContainer,
  CRow,
  CCol,
  CFormControlWrapper,
  CFormText,
} from '@coreui/react'
import { Input, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'

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
  // {
  //   name: 'Image',
  //   selector: (row) => <img height={70} width={80} src={row.image} />,
  // },
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
const tableHeaderstyle = {
  headCells: {
    style: {
      fontWeight: 'bold',
      fontSize: '14px',
      backgroundColor: '#ccc',
    },
  },
}
export default function Category() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [data, setData] = useState([])
  const [search, SetSearch] = useState('')
  const [filter, setFilter] = useState([])
  const [visible, setVisible] = useState(false)

  const formSubmiter = async (data) => {
    // window.location.reload()
    setVisible(false)
    console.log(data)
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

  // const handleDelete = (val) => {
  //   const newdata = data.filter((item) => item.id !== val)
  //   setFilter(newdata)
  // }

  return (
    <React.Fragment>
      <div className="bg-white">
        <div className="main_head">
          <h4> CATEGORY </h4>
          <button className=" btn button" onClick={() => setVisible(!visible)}>
            Add ( + )
          </button>
        </div>
      </div>
      <div>
        <DataTable
          pagination
          customStyles={tableHeaderstyle}
          columns={columns}
          data={filter}
          // selectableRows
          fixedHeader
          selectableRowsHighlight
          highlightOnHover
          subHeader
          subHeaderComponent={
            <input
              type="text"
              className="w-25 form-control"
              placeholder="Search..."
              value={search}
              onChange={(e) => SetSearch(e.target.value)}
            />
          }
          subHeaderAlign="right"
        />
      </div>

      <CModal
        backdrop="static"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="StaticBackdropExampleLabel"
        className="modal-lg"
      >
        <CModalHeader className="form_header">
          <CModalTitle>New Category</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit(formSubmiter)}>
            <CContainer className="p-2">
              <CRow>
                <CCol sm="12" lg="6">
                  <CFormControlWrapper isInvalid={errors.category_name}>
                    <CFormLabel>Category Name</CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="Enter Category.."
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
                    <CFormLabel> Description </CFormLabel>
                    <CFormInput
                      type="text"
                      placeholder="Enter Description..."
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
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
              <CButton type="submit" className="button" id="btnsubmit">
                Save
              </CButton>
            </CModalFooter>
          </CForm>
        </CModalBody>
      </CModal>
    </React.Fragment>
  )
}
