import React from 'react'
import style from './registor.module.css'
function Registor() {
    return (
        <div className={`${style.registor} mt-4 mb-4`}>
            <div className="title">
                <h2 className='py-3'>صيدلية الضميدي</h2>
            </div>
            <form className={`border rounded w-50 m-auto mt-5 mb-5`}>
                <h4 className='pt-3 pb-4'>إنشاء حساب جديد </h4>
                <h5>أدخل بياناتك</h5>
                <div className="mb-3">
                    <input type="text" className={`form-control w-50 m-auto ${style.input}`} placeholder="الإسم الأول" />
                </div>
                <div className="mb-3">
                    <input type="text" className={`form-control w-50 m-auto ${style.input}`} placeholder="إسم العائلة" />
                </div>


                <div className="mb-3">
                    <input type="email" className={`form-control w-50 m-auto ${style.input}`} placeholder="البريد الالكتروني" />
                </div>
                <div className="mb-3">
                    <input type="number" className={`form-control w-50 m-auto ${style.input}`} placeholder=" رقم الهاتف" />
                </div>

                <div className="mb-3">
                    <input type="password" className={`form-control w-50 m-auto ${style.input}`} name="userName" placeholder="كلمة المرور" />
                </div>
                <div className="mb-3">
                    <input type="password" className={`form-control w-50 m-auto ${style.input}`} name="userName" placeholder="تأكيد كلمة المرور" />
                </div>




                <button className='btn-outline-secondary border rounded my-3'>إنشاء</button>
            </form>
        </div>
    )
}

export default Registor