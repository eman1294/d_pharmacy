import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <>
      <div className={`${style.header}`}>
        <ul class="nav nav-tabs justify-content-evenly">
          <li class="nav-item">
            <a class="nav-link text-dark">الأم والطفل</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href="#">العناية بالشعر</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-dark" href='#'>العناية بالبشرة</a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-dark" href="#">جميع المنتجات</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">الصفحة الرئيسية</a>
          </li>
        </ul>
      </div>
      <div className={`${style.main}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <h2 className='pt-5'>مميزات الصيدلية الإلكترونية</h2>
              <div className="d-flex">
                <div className="col-lg-4 col-sm-12">
                  <div className="icon"><p className='fs-1 pt-5 mt-5'>&#128663;</p></div>
                  <h4>توصيل لجميع مناطق فلسطين</h4>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="icon">
                    <p className='fs-1 pt-5 mt-5'>&#128221;</p>
                  </div>
                  <h4>حجز مواعيد واستفسارات</h4>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="icon">
                    <p className='fs-1 pt-5 mt-5'>&#11088;</p>
                  </div>
                  <h4>عروض متنوعة</h4>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-12">
              <img src="image/main.jfif" alt="pharma" className='w-100 p-3' />
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Header