import style from './Edit.module.css'
import Input from '../../Components/input/Input'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React, { useReducer, useState } from 'react'
import Button from '../../Components/button/Button';
export default function Edit() {
  // const initForm = {
  //   firstname: '',
  //   lastname:'',
  //   email: '',
  //   phone:'',
  //   address: '',
  // }
  const [imgholder,setImageHolder] = useState({
    file:'',
    image:'https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true'
  })
  const imgChange = (e) =>{
      const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImageHolder({
        file: file,
        image: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  const [formVal, dispatch] = useState(
    {
      fullname: '',
      email: '',
      phone:'',
      address: '',
    }
  )
  const onValChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    dispatch({ ...formVal, [name]: value })
    console.log(formVal)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    // console.log(imgholder);
    formData.append('image',imgholder.image)
    // console.log(formData.get('image'))
    formData.append('fullname',formVal.fullname)
    // console.log(formData.get('fullname'))
    formData.append('email',formVal.email)
    // console.log(formData)
    formData.append('phone',formVal.phone)
    formData.append('address',formVal.address)
  }
  const { fullname, email, phone,address } = formVal
  const {file, image } = imgholder
  return (
    <div className={style.editcontainer}>
      <div className={style.editheading}>
        <a href="/">
        <ChevronLeftIcon/>
        </a>
        &nbsp;
        &nbsp;
        &nbsp;
        <p className={style.edittitle}>
          Account Setting
        </p>
      </div>
      <form onSubmit={onSubmit}>
      <div >
      <label className={style.customfileupload}>
    <div className={`${style.imgwrap} ${style.imgupload}`}>
    {/* <div className={style.imgupload}> */}
    <img for="photo-upload" src={image}/>
    {/* </div> */}
    </div>
    <input id="photo-upload" type="file" name="image" onChange={imgChange}/> 
  </label>
      </div>
        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Full Name</strong>
          </label>
          <Input type="text" placeholder="Full Number"
          name="fullname"
                        value={fullname}
            onChange={onValChange}
          />
        </div>

        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Email</strong>
          </label>
          <Input type="email" placeholder="Email"           name="email"
                        value={email}
            onChange={onValChange}/>
        </div>
        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Phone</strong>
          </label>
          <Input type="text" placeholder="Phone Number"
                      name="phone"
                        value={phone}
            onChange={onValChange}
          />
        </div>
        <div className={style.formgroup}>
          <label className={style.group}>
            <strong>Address</strong>
          </label>
          <Input type="text" placeholder="Address"
                      name="address"
                        value={address}
            onChange={onValChange}
          />
        </div>
        
        <div className={style.group}>
          <Button type="submit" value="Update"/>
        </div>
      </form>
    </div>
  )
}

