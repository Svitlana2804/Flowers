import {Formik, Form, Field} from "formik"
import {useDispatch, useSelector} from "react-redux";
import {selectorFromData, selectorShop} from "../../store/selectors.js";
import {actionUpdate} from "../../store/actions.js";
import InputBox from "../../component/Form/Input/Input.jsx";
import Button from "../../component/Button/Button.jsx";
import {validationSchema} from "./validation.js"
// import { PatternFormat } from 'react-number-format';
import { FcCloseUpMode } from "react-icons/fc";
import { actionclearCart } from "../../store/actions.js";
import { ToastContainer, toast } from 'react-toastify';
import './PageForm.scss'


const PageForm = () => {
	const notify = () =>toast('🦄 Замовлення прийняте,очікуйте на дзвінок', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
	const formData = useSelector(selectorFromData)
	const basket= useSelector(selectorShop)
    const dispatch = useDispatch()
 
    return (
		<div className="page__dashboard">
            <div className="page">
				<Formik initialValues={formData || {}}
					validationSchema={validationSchema}
					onSubmit={(values,{resetForm}) => {
						dispatch(actionUpdate(values)) 
						console.log('Придбані товари ==>',basket)
						dispatch(actionclearCart())
					resetForm({})
						notify()
						}}> 
                    {({handleSubmit, errors, touched}) => (
                        <Form onSubmit={handleSubmit}>
                        	<fieldset className="form-block">
									<legend><FcCloseUpMode />Форма для замовлення<FcCloseUpMode /></legend>
									<div className="row">
										<div className="col">

											<InputBox
												className="mb-3"
												label="Введіть Ваше ім'я"
												name="name"
												placeholder="Ім'я"
												error={errors.name && touched.name}
											/>

											<InputBox
												className="mb-3"
												label="Введіть Ваше прізвище"
												name="lastName"
												placeholder="Прізвище"
												error={errors.lastName && touched.lastName}
                                        />
                                        <InputBox
												className="mb-3"
												label="Вік"
												name="age"
												placeholder="Скільки повних років"
												error={errors.age && touched.age}
											/>

											<InputBox
											label="Адреса доставки квітів"
												name="addressToDelivery"
												placeholder="Україна,Черкаси"
												error={errors.addressToDelivery && touched.addressToDelivery}
											/>
										</div>
										<div className="col-6">
											<div className="row">
											<div className="col">
												{/* {"Номер телефону"} 
												<PatternFormat  format="+3 (###) #### ###" allowEmptyFormatting mask="*"	
												/>; */}
											
												<InputBox
													 name={"phone"}
														label={"Номер телефону"} 
														placeholder={'Номер телефону'}
														className={"mb-3"}
														error={errors.phone && touched.phone} 
													/>	
												</div>
											</div>
										</div>
										
								</div>
							
                            </fieldset>	
                            <div className="col-12">
								<Button type="submit" isPrimary>Надіслати</Button>
					
								</div>
                        </Form>
                    )}
				</Formik>
				<ToastContainer position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"/>
            </div>
        </div>
    )
}
export default  PageForm 