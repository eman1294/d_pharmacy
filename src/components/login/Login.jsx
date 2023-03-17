import React from 'react'
import style from './login.module.css'

function Login() {
    return (
        <div className={`${style.login} mt-4 mb-4`}>
            <div className="title">
                <h2 className='py-3'>صيدلية الضميدي</h2>
            </div>
            <div className="loginForm">
                <form className='border rounded w-50 m-auto mt-5'>
                    <h4 className='pt-3 pb-4'>تسجيل الدخول</h4>
                    <div className="mb-3">
                        <input type="email" className={`form-control w-50 m-auto ${style.input}`} placeholder="أدخل رقم الهاتف أو الايميل" />
                    </div>
                    <div className="mb-3">
                        <input type="password" className={`form-control w-50 m-auto ${style.input}`} name="userName" placeholder="أدخل كلمة المرور" />
                    </div>
                    <div className="ask">
                        <a href="#">نسيت كلمة المرور ؟</a> <br />
                        <a href="#" className='text-decoration-none'>لا تملك حساب؟</a> <a href='#'>إنشاء حساب جديد</a>
                    </div>


                    <button className='btn-outline-secondary border rounded my-3'>دخول</button>
                </form>

            </div>
        </div>
    )
}

export default Login