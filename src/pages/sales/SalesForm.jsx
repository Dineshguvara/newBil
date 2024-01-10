import React, { useEffect, useState } from 'react'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import '../../scss/style.scss'
import { cilTrash, cilPlus } from '@coreui/icons'
import {
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
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
  CText,
} from '@coreui/react'
const CustomerInfo = [
  { label: 'Customer1', value: 'customer1' },
  { label: 'Customer2', value: 'customer2' },
  { label: 'Customer3', value: 'customer3' },
  { label: 'Customer4', value: 'customer4' },
]
const CashType = [
  { label: 'CASH', value: 'cash' },
  { label: 'CREDIT', value: 'credit' },
  { label: 'OUTSTANDING', value: 'outstanding' },
]
const Items = [
  {
    id: 1,
    itemName: 'Item 1',
    hsn_code: '565656',
    available_qty: '10',
    qty: '',
    unit: '',
    rate: 110,
    amount: '',
    gst: '0',
  },
  {
    id: 2,
    itemName: 'Item 2',
    hsn_code: '443322',
    available_qty: '20',
    qty: '',
    unit: '',
    rate: 130,
    amount: '',
    gst: '0',
  },
  {
    id: 3,
    itemName: 'Item 3',
    available_qty: '18',
    qty: '',
    unit: '',
    rate: 100,
    amount: '',
    gst: '0',
  },
  {
    id: 4,
    itemName: 'Item 4',
    hsn_code: '332165',
    available_qty: '28',
    qty: '',
    unit: '',
    rate: 106,
    amount: '',
    gst: '0',
  },
  {
    id: 5,
    itemName: 'Item 5',
    hsn_code: '788955',
    available_qty: '5',
    qty: '',
    unit: '',
    rate: 500,
    amount: '',
    gst: '0',
  },
]

const SalesForm = () => {
  const [total, setTotal] = useState(0)
  const navi = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
    watch,
  } = useForm({ mode: 'onChange' })

  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: 'Items',
  })
  if (itemFields.length === 0) {
    appendItem()
  }
  const watchItems = watch('Items')

  const itemChange = (e, index) => {
    // setValue(`Items.${index}.item.item_name`, e.item_name)
    // setValue(`Items.${index}.hsn_code`, e.hsn_code)
    // setValue(`Items.${index}.available_qty`, e.available_qty)
    // setValue(`Items.${index}.qty`, e.qty)
    // setValue(`Items.${index}.unit`, e.unit)
    // setValue(`Items.${index}.rate`, e.rate)
    // setValue(`Items.${index}.amount`, e.amount)
    // setValue(`Items.${index}.gst`, e.gst)
    // amountCalculation(index)
  }
  // const amountCalculation = (index) => {
  //   let qty = Number(getValues(`Items.${index}.qty`))
  //   let price = Number(getValues(`Items.${index}.price`))
  //   let discount = Number(getValues(`Items.${index}.discount`))
  //   let tax = Number(getValues(`Items.${index}.tax`))

  //   let amount = qty * price - discount
  //   let taxInRs = (tax / 100) * amount
  //   let finalAmount = qty * price + taxInRs

  //   setValue(`Items.${index}.amount`, finalAmount)
  //   setTotal(watchItems.reduce((acc, item) => acc + item.amount, 0))
  // }

  const formSubmiter = async (data) => {
    console.log(data)
    navi('/sales')
  }
  return (
    <>
      <CContainer className="bg-white">
        <div className="main_head ml-0">
          <h4 className="cap_letter"> new invoice </h4>
        </div>
        {/* Form View */}
        <CContainer>
          <CRow>
            <CCol xs="12" sm="6" md="6" lg="3">
              <Controller
                name="customer"
                control={control}
                rules={{ required: 'Customer Name is required' }}
                render={({ field }) => (
                  <CFormControlWrapper isInvalid={errors.customer}>
                    <CFormLabel className="form_label"> Customer Name</CFormLabel>
                    <CFormSelect id="selectInput1" {...field}>
                      <option value="">Select Customer</option>
                      {CustomerInfo.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </CFormSelect>
                    <CFormText className="color_red p-10">
                      {errors.customer && errors.customer.message}
                    </CFormText>
                  </CFormControlWrapper>
                )}
              />
            </CCol>
            <CCol xs="12" sm="6" md="6" lg="3">
              <CFormControlWrapper isInvalid={errors.bill}>
                <CFormLabel className="form_label"> Bill </CFormLabel>
                <CFormInput
                  type="number"
                  disabled={true}
                  {...register('bill', {
                    required: 'Bill is required',
                  })}
                />
                <CFormText className="color_red p-10">
                  {errors.bill && errors.bill.message}
                </CFormText>
              </CFormControlWrapper>
            </CCol>

            <CCol xs="12" sm="6" md="6" lg="3">
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
            <CCol xs="12" sm="6" md="6" lg="3">
              <Controller
                name="cash_type"
                control={control}
                rules={{ required: 'Cash Type is required' }}
                render={({ field }) => (
                  <CFormControlWrapper isInvalid={errors.cash_type}>
                    <CFormLabel className="form_label"> Cash Type</CFormLabel>
                    <CFormSelect id="selectInput2" {...field}>
                      <option value="">Select Cash Type</option>
                      {CashType.map((option, index) => (
                        <option key={index} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </CFormSelect>
                    <CFormText className="color_red p-10">
                      {errors.cash_type && errors.cash_type.message}
                    </CFormText>
                  </CFormControlWrapper>
                )}
              />
            </CCol>
            <CCol xs="12" sm="6" md="6" lg="3">
              <CFormControlWrapper isInvalid={errors.mobile}>
                <CFormLabel className="form_label"> Mobile </CFormLabel>
                <CFormInput
                  type="number"
                  {...register('mobile', {
                    required: 'Mobile is required',
                  })}
                />
                <CFormText className="color_red p-10">
                  {errors.mobile && errors.mobile.message}
                </CFormText>
              </CFormControlWrapper>
            </CCol>

            <CCol xs="12" sm="6" md="6" lg="3">
              <CFormControlWrapper isInvalid={errors.outstanding}>
                <CFormLabel className="form_label"> Outstanding </CFormLabel>
                <CFormInput
                  type="text"
                  disabled={true}
                  {...register('outstanding', {
                    required: 'Outstanding is required',
                  })}
                />
                <CFormText className="color_red p-10">
                  {errors.outstanding && errors.outstanding.message}
                </CFormText>
              </CFormControlWrapper>
            </CCol>

            <CCol xs="12" sm="6" md="6" lg="3">
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
        {/* Table View */}
        <CContainer className="py_20" style={{ overflowX: 'visible', overflowY: 'visible' }}>
          <CTable responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell className="table_label">S.No </CTableHeaderCell>
                <CTableHeaderCell className="table_label" width={200}>
                  ITEM{' '}
                </CTableHeaderCell>
                <CTableHeaderCell className="table_label">HSN</CTableHeaderCell>
                <CTableHeaderCell className="table_label" width={140}>
                  AVAILABLE QTY
                </CTableHeaderCell>
                <CTableHeaderCell className="table_label">QTY</CTableHeaderCell>
                <CTableHeaderCell className="table_label">UNIT</CTableHeaderCell>
                <CTableHeaderCell className="table_label">RATE</CTableHeaderCell>
                <CTableHeaderCell className="table_label">AMOUNT</CTableHeaderCell>
                <CTableHeaderCell className="table_label">GST %</CTableHeaderCell>
                <CTableHeaderCell className="table_label">ACT</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {itemFields &&
                itemFields.map((item, index) => (
                  <CTableRow key={item.id}>
                    <CTableDataCell>{index + 1}</CTableDataCell>
                    <CTableDataCell>
                      <Controller
                        name={`Items.${index}.item_name`}
                        control={control}
                        rules={{ required: 'Item is required' }}
                        render={({ field: { onChange, onBlur, value, name, ref } }) => (
                          <CFormControlWrapper>
                            <CFormSelect
                              id={`selectInputs-${index}`}
                              name={name}
                              ref={ref}
                              onChange={(e) => {
                                onChange(e)
                                itemChange(e, index)
                              }}
                              onBlur={onBlur}
                              value={value}
                              size="xs"
                            >
                              <option value="">Select </option>
                              {Items.map((option, index) => (
                                <option key={index} value={option.itemName}>
                                  {option.itemName}
                                </option>
                              ))}
                            </CFormSelect>
                          </CFormControlWrapper>
                        )}
                      />
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="text"
                          {...register(`Items.${index}.hsn_code`)}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="number"
                          {...register(`Items.${index}.available_qty`)}
                          disabled={true}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="text"
                          {...register(`Items.${index}.qty`)}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="text"
                          {...register(`Items.${index}.unit`)}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="number"
                          {...register(`Items.${index}.rate`)}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="number"
                          disabled={true}
                          {...register(`Items.${index}.amount`)}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CFormControlWrapper>
                        <CFormInput
                          type="number"
                          {...register(`Items.${index}.gst`)}
                          className="custom_input"
                        />
                      </CFormControlWrapper>
                    </CTableDataCell>
                    <CTableDataCell>
                      <CButton onClick={() => removeItem(index)} size="sm">
                        <CIcon icon={cilTrash} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
            </CTableBody>
          </CTable>
          <CButton className="btn_apnd" onClick={() => appendItem()}>
            <p className="cap_letter mb-0">
              <CIcon className="mr_5" icon={cilPlus} />
              Add New Item
            </p>
          </CButton>
        </CContainer>
        <CContainer className="py_20">
          <div className="d_block">
            <div className="d_flex">
              <h5 className="cap_letter mb-0"> taxable amount </h5>
              <CFormInput
                type="number"
                className="custom_input3"
                disabled={true}
                {...register('taxable_amount')}
              />
            </div>
            <div className="d_flex">
              <h5 className="cap_letter mb-0"> gst </h5>

              <CFormInput
                type="number"
                className="custom_input3"
                disabled={true}
                {...register('gst_amount')}
              />
            </div>
            <div className="d_flex">
              <h5 className="cap_letter mb-0"> Tax Amount </h5>

              <CFormInput
                type="number"
                className="custom_input3"
                disabled={true}
                {...register('tax_amount')}
              />
            </div>
            <div className="d_flex">
              <h5 className="cap_letter mb-0"> payment amount </h5>
              <CFormInput type="number" className="custom_input3" {...register('payment_amount')} />
            </div>
          </div>
          <div className="d_flex-end ">
            <Link to="/sales">
              <CButton className="mrg-2">Cancel</CButton>
            </Link>
            <CButton className="mrg-2" onClick={handleSubmit(formSubmiter)}>
              Save
            </CButton>
            <CButton className="mrg-2">Save & Print</CButton>
          </div>
        </CContainer>
      </CContainer>
    </>
  )
}
export default React.memo(SalesForm)
