import Button from '../../UI/button/Button'
import styles from './ServiceAppointmentCard.module.scss'

const ServiceAppointmentCard = () => {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.swiperContainer}></div>
        <div className={styles.serviceDetailsContainer}>
            <span>£200</span>
            <p className={styles.serviceName}>Braids and Facials</p>
            <p className={styles.description}>Click on a payout to view its details and where it is in the payout process, as well as information to help</p>
        </div>
        <Button
        label='Book appointment'
        style={{background:'none', color: '#7C2C89', border:'1px solid #7C2C89', padding:'10px 32px', marginTop:'20px'}}
        />
    </div>
  )
}

export default ServiceAppointmentCard