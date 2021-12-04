import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import baseUrl from '../../utils/baseUrl'
const MySwal = withReactContent(Swal)

const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Our team will connect with you to gift this course to your friend.',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false
  })
}

// Form initial state
const INITIAL_STATE = {
  name: '',
  email: '',
  number: '',
  friendName: '',
  friendEmail:'',
  friendNumber: '',
  text: ''
}

const GiftCourseForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE)
  const { register, handleSubmit, errors } = useForm()

  const handleChange = e => {
    const { name, value } = e.target
    setContact(prevState => ({ ...prevState, [name]: value }))
    // console.log(contact)
  }

  const onSubmit = async e => {
    // e.preventDefault();
    try {
      const url = `${baseUrl}/api/gift-a-course`
      const { name, email, number, friendName, friendEmail, friendNumber, text } = contact
      const payload = { name, email, number, friendName, friendEmail, friendNumber, text }
      await axios.post(url, payload)
      console.log(url)
      setContact(INITIAL_STATE)
      alertContent()
    } catch (error) {
      console.log(error)
    }
  }

  return (
        <div className="contact-form">
            <h2>Gift a Course</h2>
            {/* <p>Your email address will not be published. Required fields are marked *</p> */}

            <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={contact.name}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.name && 'Name is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="email"
                                placeholder="Your email address"
                                value={contact.email}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.email && 'Email is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="number"
                                placeholder="Your phone number"
                                value={contact.number}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.number && 'Number is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="friendName"
                                placeholder="Your friend's name"
                                value={contact.friendName}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.friendName && 'Name is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="friendEmail"
                                placeholder="Your friend's email address"
                                value={contact.friendEmail}
                                onChange={handleChange}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.friendEmail && 'Email is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="friendNumber"
                                placeholder="Your friend's phone number"
                                value={contact.friendNumber}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.friendNumber && 'Number is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                            <textarea
                                name="text"
                                cols="30"
                                rows="5"
                                placeholder="Write your message..."
                                value={contact.text}
                                onChange={handleChange}
                                ref={register({ required: true })}
                            />
                            <div className='invalid-feedback' style={{ display: 'block' }}>
                                {errors.text && 'Text body is required.'}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn">Gift Course</button>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default GiftCourseForm
