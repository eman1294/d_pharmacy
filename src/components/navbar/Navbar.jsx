import React from 'react'
import style from './navbar.module.css'

function Navbar() {
  return (
 
    <div className={`${style.navbar} pb-5`}>
             
      <div className="row">
        <div className="col-lg-5 col-sm-6">
          <span><a href='#'><i className="fa-regular fa-circle-xmark"></i></a></span>
        </div>
        <div className="col-lg-7 col-sm-6">
          <p className='text-start'><a href="#" className='text-decoration-none'>جميع طرق الدفع متاحة الآن !</a></p>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="col-lg-4 col-sm-6">
          <div className="row">
            <p className='border border-white rounded w-50 p-1 text-white'><span><i className="fa-solid fa-globe"></i></span> English</p>
            <p className='border border-white rounded w-50 p-1 text-white'>فلسطين</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <button className='btn border border-white rounded text-white'><span><i className="fa-solid fa-circle-user"></i></span> تسجيل الدخول</button>
        </div>
      </div>

      <div className="d-flex">
        <div className="col-lg-4 col-sm-4">
          <p className='mt-4 text-white fs-1'><span><i className="fa-solid fa-cart-shopping"></i></span></p>

        </div>
        <div className="col-lg-4 col-sm-4">
          <input type="search" className='border-white w-100 mt-5 text-end' placeholder=' إبحث' />

        </div>
        <div className="col-lg-4 col-sm-4">
          <div className="logo">
            <a class="navbar-brand" href="#"><img src="image/logo.png" alt="logo" width="100" height="100" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Navbar