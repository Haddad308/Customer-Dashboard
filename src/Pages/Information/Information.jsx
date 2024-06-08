/* eslint-disable no-unused-vars */
import { Avatar, Button, Input } from "@nextui-org/react"
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import * as Yup from 'yup';
import { createFormData, editUserInfo, getUserData } from "./Information.handlers";
import { tokenContext } from "../../contexts/AuthProvidor";


const Information = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const token = useContext(tokenContext);


  // For Editing the user data.
  const formHandler = useFormik({
    initialValues: {
      address: userInfo.address,
      city: userInfo.city,
      company: userInfo.company,
      door_code: userInfo.door_code,
      email: userInfo.email,
      invoice_email: userInfo.invoice_email,
      invoice_reference: userInfo.invoice_reference,
      job: userInfo.job,
      lang: userInfo.lang,
      mobile: userInfo.mobile,
      name: userInfo.username,
      phone: userInfo.phone,
      related_partner: userInfo.related_partner,
      message: userInfo.message,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string(),
      email: Yup.string().email('Invalid email address'),
      message: Yup.string(),
      address: Yup.string(),
      city: Yup.string(),
      company: Yup.string(),
      door_code: Yup.string(),
      invoice_email: Yup.string().email('Invalid email address'),
      invoice_reference: Yup.string(),
      job: Yup.string(),
      lang: Yup.string(),
      mobile: Yup.string(),
      phone: Yup.string(),
      related_partner: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("hii");
      editUserInfo(createFormData(values, userImage?.[0]), setUserInfo)
    }
  });

  const [userImage, setUserImage] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setUserImage(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(() => {
    getUserData(setUserInfo, setIsLoading, token)
  }, [token])

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo])

  return (
    <form className="p-5" onSubmit={formHandler.handleSubmit}>
      <div className="bg-white rounded-lg p-5 flex flex-col gap-1" >
        <h1 className="text-3xl font-semibold pb-3" >Account</h1>
        <div className="flex items-center gap-3 pb-3" >
          <Avatar
            src={!userImage ? `https://highnox.site/${userInfo.avatar}` : userImage}
            className="w-24 h-24  text-large" />
          <input type="file" multiple={false} onChange={handleChange} />
        </div>
        <h1 className="text-2xl font-semibold" >
          Personal Information
        </h1>
        <div className="mb-1 grid grid-cols-2 gap-3 items-center justify-center" >
          <div>
            <Input
              id="email"
              type="email"
              variant="bordered"
              labelPlacement="outside"
              label="email"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.email}
            />
            {formHandler.touched.email && formHandler.errors.email ? (
              <div className='text-red-600' >{formHandler.errors.email}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="name"
              type="name"
              variant="bordered"
              labelPlacement="outside"
              label="name"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.name}
            />
            {formHandler.touched.name && formHandler.errors.name ? (
              <div className='text-red-600' >{formHandler.errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-1 grid grid-cols-2 gap-3 items-center justify-center" >
          <div className="mb-1">
            <Input
              id="company"
              type="company"
              variant="bordered"
              labelPlacement="outside"
              label="company"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.company}
            />
            {formHandler.touched.company && formHandler.errors.company ? (
              <div className='text-red-600' >{formHandler.errors.company}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="job"
              type="job"
              variant="bordered"
              labelPlacement="outside"
              label="job"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.job}
            />
            {formHandler.touched.job && formHandler.errors.job ? (
              <div className='text-red-600' >{formHandler.errors.job}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-1 grid grid-cols-2 gap-3 items-center justify-center" >
          <div>
            <Input
              id="phone"
              type="phone"
              variant="bordered"
              labelPlacement="outside"
              label="phone"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.phone}
            />
            {formHandler.touched.phone && formHandler.errors.phone ? (
              <div className='text-red-600' >{formHandler.errors.phone}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="mobile"
              type="mobile"
              variant="bordered"
              labelPlacement="outside"
              label="mobile"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.mobile}
            />
            {formHandler.touched.mobile && formHandler.errors.mobile ? (
              <div className='text-red-600' >{formHandler.errors.mobile}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-1 grid grid-cols-2 gap-3 items-center justify-center" >
          <div>
            <Input
              id="lang"
              type="lang"
              variant="bordered"
              labelPlacement="outside"
              label="lang"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.lang}
            />
            {formHandler.touched.lang && formHandler.errors.lang ? (
              <div className='text-red-600' >{formHandler.errors.lang}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="city"
              type="city"
              variant="bordered"
              labelPlacement="outside"
              label="city"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.city}
            />
            {formHandler.touched.city && formHandler.errors.city ? (
              <div className='text-red-600' >{formHandler.errors.city}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-1 grid grid-cols-2 gap-3 items-center justify-center" >
          <div className="mb-1" >
            <Input
              id="address"
              type="address"
              variant="bordered"
              labelPlacement="outside"
              label="address"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.address}
            />
            {formHandler.touched.address && formHandler.errors.address ? (
              <div className='text-red-600' >{formHandler.errors.address}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="door_code"
              type="door_code"
              variant="bordered"
              labelPlacement="outside"
              label="door_code"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.door_code}
            />
            {formHandler.touched.door_code && formHandler.errors.door_code ? (
              <div className='text-red-600' >{formHandler.errors.door_code}</div>
            ) : null}
          </div>
        </div>
        <div className="mb-1" >
          <Input
            id="related_partner"
            type="related_partner"
            variant="bordered"
            labelPlacement="outside"
            label="related_partner"
            onChange={formHandler.handleChange}
            onBlur={formHandler.handleBlur}
            value={formHandler.values.related_partner}
          />
          {formHandler.touched.related_partner && formHandler.errors.related_partner ? (
            <div className='text-red-600' >{formHandler.errors.related_partner}</div>
          ) : null}
        </div>
        <h1 className="text-2xl font-semibold pt-3">Invoice address</h1>
        <div className="mb-1 grid grid-cols-2 gap-3 items-center justify-center" >
          <div>
            <Input
              id="invoice_email"
              type="invoice_email"
              variant="bordered"
              labelPlacement="outside"
              label="invoice_email"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.invoice_email}
            />
            {formHandler.touched.invoice_email && formHandler.errors.invoice_email ? (
              <div className='text-red-600' >{formHandler.errors.invoice_email}</div>
            ) : null}
          </div>
          <div>
            <Input
              id="invoice_reference"
              type="invoice_reference"
              variant="bordered"
              labelPlacement="outside"
              label="invoice_reference"
              onChange={formHandler.handleChange}
              onBlur={formHandler.handleBlur}
              value={formHandler.values.invoice_reference}
            />
            {formHandler.touched.invoice_reference && formHandler.errors.invoice_reference ? (
              <div className='text-red-600' >{formHandler.errors.invoice_reference}</div>
            ) : null}
          </div>
        </div>
        <div className="flex gap-4 pt-3  justify-center" >
          <Button variant="solid" color="primary" type="submit">
            Save
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Information
