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

const indianStates = [
  { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
  { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
  { label: 'Assam', value: 'Assam' },
  { label: 'Bihar', value: 'Bihar' },
  { label: 'Chhattisgarh', value: 'Chhattisgarh' },
  { label: 'Goa', value: 'Goa' },
  { label: 'Gujarat', value: 'Gujarat' },
  { label: 'Haryana', value: 'Haryana' },
  { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
  { label: 'Jharkhand', value: 'Jharkhand' },
  { label: 'Karnataka', value: 'Karnataka' },
  { label: 'Kerala', value: 'Kerala' },
  { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
  { label: 'Maharashtra', value: 'Maharashtra' },
  { label: 'Manipur', value: 'Manipur' },
  { label: 'Meghalaya', value: 'Meghalaya' },
  { label: 'Mizoram', value: 'Mizoram' },
  { label: 'Nagaland', value: 'Nagaland' },
  { label: 'Odisha', value: 'Odisha' },
  { label: 'Punjab', value: 'Punjab' },
  { label: 'Rajasthan', value: 'Rajasthan' },
  { label: 'Sikkim', value: 'Sikkim' },
  { label: 'Tamil Nadu', value: 'Tamil Nadu' },
  { label: 'Telangana', value: 'Telangana' },
  { label: 'Tripura', value: 'Tripura' },
  { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
  { label: 'Uttarakhand', value: 'Uttarakhand' },
  { label: 'West Bengal', value: 'West Bengal' },
]
const Supplier = () => {
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
            <h4 className="cap_letter"> Supplier </h4>
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
              <CModalTitle className="cap_letter">new supplier</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <CForm onSubmit={handleSubmit(formSubmiter)}>
                <CContainer className="p-2">
                  <CRow>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.supllier_name}>
                        <CFormLabel className="form_label">Supplier Name</CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('supllier_name', {
                            required: 'Supplier Name is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.supllier_name && errors.supllier_name.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.mobile_number}>
                        <CFormLabel className="form_label">Mobile Number</CFormLabel>
                        <CFormInput
                          type="number"
                          {...register('mobile_number', {
                            required: 'Mobile Number is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.mobile_number && errors.mobile_number.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.description}>
                        <CFormLabel className="form_label"> Outstanding </CFormLabel>
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
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.gst_number}>
                        <CFormLabel className="form_label"> GST Number </CFormLabel>
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
                      <CFormControlWrapper isInvalid={errors.street1}>
                        <CFormLabel className="form_label"> Street 1 </CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('street1', {
                            required: 'Street 1 is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.street1 && errors.street1.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.street2}>
                        <CFormLabel className="form_label"> Street 2</CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('street2', {
                            required: 'Street2 is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.street2 && errors.street2.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.city}>
                        <CFormLabel className="form_label"> City </CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('city', {
                            required: 'City is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.city && errors.city.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.pin_code}>
                        <CFormLabel className="form_label">Pin Code</CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('pin_code', {
                            required: 'Pin Code is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.pin_code && errors.pin_code.message}
                        </CFormText>
                      </CFormControlWrapper>
                    </CCol>
                    <CCol sm="12" lg="6">
                      <Controller
                        name="states"
                        control={control}
                        rules={{ required: 'State is required' }}
                        render={({ field }) => (
                          <CFormControlWrapper isInvalid={errors.states}>
                            <CFormLabel className="form_label">State</CFormLabel>
                            <CFormSelect id="selectInput" {...field}>
                              <option value="">Select State</option>
                              {indianStates.map((option, index) => (
                                <option key={index} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </CFormSelect>
                            <CFormText className="color_red p-10">
                              {errors.states && errors.states.message}
                            </CFormText>
                          </CFormControlWrapper>
                        )}
                      />
                    </CCol>
                    <CCol sm="12" lg="6">
                      <CFormControlWrapper isInvalid={errors.email}>
                        <CFormLabel className="form_label">Email</CFormLabel>
                        <CFormInput
                          type="text"
                          {...register('email', {
                            required: 'Email is required',
                          })}
                        />
                        <CFormText className="color_red p-10">
                          {errors.email && errors.email.message}
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
export default React.memo(Supplier)
