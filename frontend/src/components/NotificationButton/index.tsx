
import logo from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <>
            <div className='div-btn'>
                <div className='btn'>
                    <img src={logo} alt="DSMeta" id="logocell" />
                </div>
            </div>
        </>
    )
}

export default NotificationButton
