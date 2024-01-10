import React, { useEffect, useState } from 'react'
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
  CInputGroup,
  CContainer,
  CRow,
  CCol,
  CFormControlWrapper,
  CFormText,
  CFormSelect,
  CSelect,
} from '@coreui/react'

const categoryItem = [
  { label: 'FRAME', value: 'frame' },
  { label: 'VIVO', value: 'vivo' },
  { label: 'TAN', value: 'tan' },
  { label: 'BATTERY', value: 'battery' },
  { label: 'HEADPHONE', value: 'headphone' },
  { label: 'OPPO', value: 'oppo' },
  { label: 'SAMSUNG', value: 'samsung' },
  { label: 'REALME', value: 'realme' },
  { label: 'MI', value: 'mi' },
  { label: 'INTEL', value: 'intel' },
  { label: 'INFINIX', value: 'infinix' },
  { label: 'TECHNO', value: 'techno' },
]
const Item = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

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

  return (
    <>
      <CContainer>
        {/* Form View */}
        <div className="bg-white">
          <div className="main_head">
            <h4 className="cap_letter"> Items </h4>
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
              <CModalTitle className="cap_letter">new item</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm onSubmit={handleSubmit(formSubmiter)}>
                <CContainer className="p-2">
                  <CRow>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.Item_name}>
                        <CFormLabel className="form_label">Item Name</CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('Item_name', {
                            required: 'Item Name Name is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.Item_name && errors.Item_name.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <Controller
                        name="category"
                        control={control}
                        rules={{ required: 'Category is required' }}
                        render={({ field: { onChange, onBlur, value, name, ref } }) => (
                          <CFormControlWrapper isInvalid={errors.category}>
                            <CFormLabel className="form_label">under category</CFormLabel>
                            <CFormSelect
                              name={name}
                              ref={ref}
                              onChange={(e) => {
                                onChange(e)
                              }}
                              onBlur={onBlur}
                              value={value}
                              id="selectInput"
                            >
                              <option value="">Select Category Name</option>
                              {categoryItem.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </CFormSelect>
                            <CFormText className="color_red p-10">
                              {errors.category && errors.category.message}
                            </CFormText>
                          </CFormControlWrapper>
                        )}
                      />
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.hsn_code}>
                        <CFormLabel className="form_label"> HSN Code </CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('hsn_code', {
                            required: 'HSN Code  is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.hsn_code && errors.hsn_code.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.gst_number}>
                        <CFormLabel className="form_label"> Unit type </CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('gst_number', {
                            required: ' GST Number is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.gst_number && errors.gst_number.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.percentage_of_tax}>
                        <CFormLabel className="form_label"> Percentage of Tax </CFormLabel>
                        <CFormInput
                          type="number"
                          {...register('percentage_of_tax', {
                            required: 'Percentage of Tax is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.percentage_of_tax && errors.percentage_of_tax.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.purchase_price}>
                        <CFormLabel className="form_label"> purchase price </CFormLabel>
                        <CFormInput
                          type="number"
                          {...register('purchase_price', {
                            required: 'purchase price is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.purchase_price && errors.purchase_price.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.sales_price}>
                        <CFormLabel className="form_label"> Sales Price </CFormLabel>
                        <CFormInput
                          type="number"
                          {...register('sales_price', {
                            required: 'Sales Price is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.sales_price && errors.sales_price.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.available_quantity}>
                        <CFormLabel className="form_label"> Available Quantity </CFormLabel>
                        <CFormInput
                          type="number"
                          {...register('available_quantity', {
                            required: 'Available Quantity is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.available_quantity && errors.available_quantity.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.date}>
                        <CFormLabel className="form_label"> Date</CFormLabel>
                        <CFormInput
                          type="date"
                          {...register('date', {
                            required: 'Date is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.date && errors.date.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                  </CRow>
                </CContainer>
                <CModalFooter>
                  <CButton color="secondary" onClick={handleClick}>
                    Close
                  </CButton>
                  <CButton type="submit" className="button" id="btnsubmit">
                    Save
                  </CButton>
                </CModalFooter>
              </CForm>
            </CModalBody>
          </CModal>
        </div>
        {/* Table View*/}
      </CContainer>
    </>
  )
}
export default React.memo(Item)
