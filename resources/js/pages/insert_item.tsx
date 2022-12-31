import React from 'react'
import NavigationBar from '@/components/navigation_bar'
import RegistrationForm from '@/components/Item/registration_form'
import InsertItemBody from '@/components/Item/insert_item_body'

const InsertItem:React.FC = () => {
  return (
    <>
        <NavigationBar />
        <InsertItemBody />
    </>
  )
}

export default InsertItem
