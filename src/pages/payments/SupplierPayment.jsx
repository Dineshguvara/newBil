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
import Supplier from '../master/Supplier'

const SupplierInfo = [
  { label: 'Supplier1', value: 'supplier1' },
  { label: 'Supplier2', value: 'supplier2' },
  { label: 'Supplier3', value: 'supplier3' },
  { label: 'Supplier4', value: 'supplier4' },
  { label: 'Supplier5', value: 'supplier5' },
]
const PaymentType = [
  { label: 'CASH', value: 'cash' },
  { label: 'RTGS', value: 'RTGS' },
  { label: 'NEFT', value: 'NEFT' },
]
const SupplierPayment = () => {
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
            <h5 className="cap_letter"> Supplier Payments </h5>
            <button className="cap_letter btn button" onClick={() => setVisible(!visible)}>
              new payment
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
              <CModalTitle>New Supplier Payment </CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm onSubmit={handleSubmit(formSubmiter)}>
                <CContainer className="p-2">
                  <CRow>
                    <CCol sm="12" lg="6">
                      <Controller
                        name="supplier_name"
                        control={control}
                        rules={{ required: 'Supplier Name is required' }}
                        render={({ field }) => (
                          <CFormControlWrapper isInvalid={errors.supplier_name}>
                            <CFormLabel className="form_label"> Supplier Name</CFormLabel>
                            <CFormSelect id="selectInput3" {...field}>
                              <option value="">Select Supplier</option>
                              {SupplierInfo.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </CFormSelect>
                            <CFormText className="color_red p-10">
                              {errors.supplier_name && errors.supplier_name.message}
                            </CFormText>
                          </CFormControlWrapper>
                        )}
                      />
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.date}>
                        <CFormLabel className="form_label"> Date </CFormLabel>
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
                    <CCol sm="12" lg="6">
                      <Controller
                        name="payment_type"
                        control={control}
                        rules={{ required: 'Payment Type is required' }}
                        render={({ field }) => (
                          <CFormControlWrapper isInvalid={errors.payment_type}>
                            <CFormLabel className="form_label"> Payment Type</CFormLabel>
                            <CFormSelect id="selectInput4" {...field}>
                              <option value="">Select Type</option>
                              {PaymentType.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </CFormSelect>
                            <CFormText className="color_red p-10">
                              {errors.payment_type && errors.payment_type.message}
                            </CFormText>
                          </CFormControlWrapper>
                        )}
                      />
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.amount}>
                        <CFormLabel className="form_label"> Amount </CFormLabel>
                        <CFormInput
                          type="number"
                          {...register('amount', {
                            required: 'Amount is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.amount && errors.amount.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>

                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.details}>
                        <CFormLabel className="form_label"> Detail </CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('details', {
                            required: 'Details is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.details && errors.details.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.balance}>
                        <CFormLabel className="form_label"> Balance </CFormLabel>
                        <CFormInput
                          type="number"
                          disabled={true}
                          {...register('balance', {
                            required: 'Balance is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.balance && errors.balance.message}
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
export default React.memo(SupplierPayment)
