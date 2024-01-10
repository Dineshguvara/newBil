import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartLine,
  cilHouse,
  cilAccountLogout,
  cilDollar,
  cilWallet,
  cilShortText,
  cilGroup,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'DASHBOARD',
    to: '/dashboard',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // MASTER'S
  {
    component: CNavGroup,
    name: 'MASTERS',
    to: '/master',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CATEGORY',
        to: '/master/category',
      },
      {
        component: CNavItem,
        name: 'CUSTOMER',
        to: '/master/customer',
      },
      {
        component: CNavItem,
        name: 'ITEM',
        to: '/master/item',
      },
      {
        component: CNavItem,
        name: 'SUPPLIER',
        to: '/master/supplier',
      },
    ],
  },
  // SALES
  {
    component: CNavItem,
    name: 'SALES',
    to: '/sales',
    icon: <CIcon icon={cilChartLine} customClassName="nav-icon" />,
  },
  // PURCHASE
  {
    component: CNavItem,
    name: 'PURCHASE',
    to: '/purchase',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  // PAYMENT
  {
    component: CNavGroup,
    name: 'PAYMENTS',
    to: '/payment',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'SALES PAYMENTS',
        to: '/payment/sales_payment',
      },
      {
        component: CNavItem,
        name: 'SUPPLIER PAYMENTS',
        to: '/payment/supplier_payment',
      },
    ],
  },
  // REPORT
  {
    component: CNavGroup,
    name: 'REPORT',
    to: '/report',
    icon: <CIcon icon={cilShortText} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'SALES',
        to: '/sales',
        items: [
          {
            component: CNavItem,
            name: 'INVOICE',
            to: '/sales/invoice',
          },
          {
            component: CNavItem,
            name: 'PAYMENT',
            to: '/sales/payment',
          },
          {
            component: CNavItem,
            name: 'PROFIT',
            to: '/sales/profit',
          },
          {
            component: CNavItem,
            name: 'DAY BOOK',
            to: '/sales/day_book',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'PURCHASE',
        to: '/purchase',
        items: [
          {
            component: CNavItem,
            name: 'SUPPLIER PURCHASE',
            to: '/purchase/supplier_purchase',
          },
          {
            component: CNavItem,
            name: 'SUPPLIER PAYMENT',
            to: '/purchase/supplier_payment',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'STOCK',
        to: '/stock',
        items: [
          {
            component: CNavItem,
            name: 'STOCK',
            to: '/stock/stock',
          },
          {
            component: CNavItem,
            name: 'CLOSING CATEGORY',
            to: '/stock/closing_category',
          },
          {
            component: CNavItem,
            name: 'DATAWISE',
            to: '/stock/datawise',
          },
          {
            component: CNavItem,
            name: 'DATAWISE CATEGORY',
            to: '/stock/datawise_category',
          },
          {
            component: CNavItem,
            name: 'LOWSTOCK',
            to: '/stock/lowstock',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'CUSTOMER DETAIL',
        to: '/report/customer_detail',
      },
      {
        component: CNavItem,
        name: 'SUPPLIER DETAIL',
        to: '/report/supplier_detail',
      },
    ],
  },
  // LOGOUT
  {
    component: CNavItem,
    name: 'LOGOUT',
    to: '/logout',
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
]

export default _nav
