import { Box, Button, FormGroup, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { productValidation } from '../../../validations/productValidations'
import Product from '../../../classes/productClass'
import { post } from '../../../services/API/requests'
import { enpoints } from '../../../services/constants'

const AddProduct = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      salePrice: "",
      costPrice: "",
      imgSrc: "",
      discountPercentage: "",
      description: "",  
      categoryId: "",
      stockCount: "",
    },
    onSubmit:values=>{
     
      console.log("Submitted values:", values)
      const newProduct = new Product(values.name,values.salePrice,values.costPrice,values.imgSrc,values.discountPercentage,values.description,values.categoryId,values.stockCount)
      post(enpoints.products,newProduct)
    },
    validationSchema: productValidation
  })
  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <FormGroup style={{ display: "flex", width: "1200px", margin: "30px auto", gap: "20px" }}>
          <TextField value={formik.values.name} onChange={formik.handleChange} id="outlined-basic" name="name" label="name" variant="outlined" />
          {formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}
          <TextField value={formik.values.salePrice} onChange={formik.handleChange} id="outlined-basic" name="salePrice" label="Sale Price" variant="outlined" />
          {formik.errors.salePrice && <span style={{ color: 'red' }}>{formik.errors.salePrice}</span>}
          <TextField value={formik.values.costPrice} onChange={formik.handleChange} id="outlined-basic" name="costPrice" label="Cost Price" variant="outlined" />
          {formik.errors.costPrice && <span style={{ color: 'red' }}>{formik.errors.costPrice}</span>}
          <TextField value={formik.values.imgSrc} onChange={formik.handleChange} id="outlined-basic" name="imgSrc" label="Image Src" variant="outlined" />
          {formik.errors.imgSrc && <span style={{ color: 'red' }}>{formik.errors.imgSrc}</span>}
          <TextField value={formik.values.discountPercentage} onChange={formik.handleChange} id="outlined-basic" name="discountPercentage" label="Discount Percentage" variant="outlined" />
          {formik.errors.discountPercentage && <span style={{ color: 'red' }}>{formik.errors.discountPercentage}</span>}
          <TextField value={formik.values.description} onChange={formik.handleChange} id="outlined-basic" name="description" label="description" variant="outlined" />
          {formik.errors.description && <span style={{ color: 'red' }}>{formik.errors.description}</span>}
          <TextField value={formik.values.categoryId} onChange={formik.handleChange} id="outlined-basic" name="categoryId" label="categoryId" variant="outlined" />
          {formik.errors.categoryId && <span style={{ color: 'red' }}>{formik.errors.categoryId}</span>}
          <TextField value={formik.values.stockCount} onChange={formik.handleChange} id="outlined-basic" name="stockCount" label="stockCount" variant="outlined" />
          {formik.errors.stockCount && <span style={{ color: 'red' }}>{formik.errors.stockCount}</span>}
          <Button type='submit' >Add Product</Button>
        </FormGroup>
      </Box>
    </>
  )
}

export default AddProduct
