import React from 'react'
import style from './footer.module.css'

function Footer() {
    return (

        <footer className={`py-4 ${style.foot}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="icon fs-1">&#128140;</div>
                        <br />
                        <div className="para"><p> متواجدون للرد على إستفسارتكم وأسئلتكم في وسائل التواصل الاجتماعي</p>
                        </div>
                        <br />
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="icon fs-1">&#128205;</div>
                        <div className="loc"><p>طولكرم/شارع-نابلس</p></div>

                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="icon fs-1">&#128522;</div>
                        <div className="para"><p>نهتم جدا بمصادر منتجات العناية بالبشرة والشعر وذلك لضمان جودة هذه المنتجات وتخزينها وأنها المنتجات الأصلية غير المقلدة</p></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div className="part">
                            <div className="social">
                                <h4>تواصل معنا</h4>
                                <div className="d-flex justify-content-evenly pt-4">
                                    <a href='#'><i className="fa-brands fa-instagram"></i></a>
                                    <a href='#'><i className="fa-brands fa-square-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="part">
                            <h4>تعرف علينا</h4>
                            <a href="#" className='pt-4'>صيدلية الضميدي</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="part">
                            <h4>مفهوم جديد عن الصيدلية </h4>
                            <div className="para pt-2"><p>ضميدي فارم هي شركة عائلية تقع في منطقة نابلس الجديدة، الصيدلية بقيادة الدكتورة لانا نبيل الضميدي المسغوفة بما تفعله، بدأت لانا عملها في عام 2018 لمساعدة لعملاء في نابلس والقرى المجاورة على تلقي خدمات صيدلانية عالية الجودة</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer