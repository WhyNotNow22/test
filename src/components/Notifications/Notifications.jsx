import c from './Notifications.module.css';
import Carousel from 'nuka-carousel';
import notifyIcon from  '../../assets/icon_notify.png';

function Notifications({notifications}) {
    return (
        <div className={c.notificationContainer}>
            <Carousel autoplay withoutControls cellSpacing={10}  autoplayInterval={3000} wrapAround={notifications.length > 1}>
                {
                    notifications.map( (elem, index) => {
                        return (
                            <div className={c.slide} key={index}>
                                <div className={c.fade}/>
                                <a href={elem.href} className={c.notification}>
                                    <img src={notifyIcon} alt='Notify icon'/>
                                    <p>{elem.message}</p>
                                </a>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Notifications;
