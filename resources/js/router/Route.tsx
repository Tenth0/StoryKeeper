import React from 'react'
import { BrowserRouter as Router ,Route ,Routes } from  "react-router-dom";
import Index from '@/pages';
import InsertItem from '@/pages';
import CategoryTable from '@/pages';

const Route = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/insert_item" element={<InsertItem />} />
            <Route path="/category_table" element={<CategoryTable />} />
        </Routes>
    </Router>
  )
}

export default Route