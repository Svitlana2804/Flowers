import {Link, useLocation, useNavigate} from "react-router-dom";
import "./NotPage.scss"


const NotPage = () => {
	const location = useLocation()
	const navigate = useNavigate() /* useNavigate цей хук нам позволяє робити редерект на іншу сторінку за якоюсь умовою або при виконанні якоїсь функції, ще можно зробити переходи по хісторі браузера*/
	console.log('HomePage location',location);

	const goBack = () => navigate(-1) /*  переходи по хісторі браузера, перехід на попередню сторінку */
	const rederect = () => navigate('/user') /*  редерект на сторінку user */
	return (
		<div className="not-page">
			<div>
				<p className="page-title">Некоректне значення</p>
				<p className="page-desc"> Давайте повернемося на головну сторінку і спробуємо ще раз... </p>
				<p className="page-update">
					<Link to="/"><span>Клікніть сюди</span>, щоб перейти на домашню сторінку</Link> {/* Link компонент це наша лінка але вона працює без перезавантаження сторінки.  */}
					{/* <div onClick={goBack}>goBack</div>
					<div onClick={rederect}>rederect</div> */}
					{/*<a href="/">Home</a>*/}
				</p>
			</div>
		</div>
	)
}

export default NotPage