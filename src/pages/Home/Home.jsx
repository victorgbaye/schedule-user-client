import styles from './Home.module.scss'
import ServiceAppointmentCard from "../../components/Compound/ServiceAppointmentCard/ServiceAppointmentCard"
import imager from '../../assets/react.svg'
const Home = () => {
  return (
    <div>
        <header className={styles.HeaderContainer}>
            <section className={styles.backDropImage}>

            </section>
            <section className={styles.profileInfo}>
                <img src={imager}/>
                <div>
                    <p>Company Name</p>
                    <p>Hair dressing and making</p>
                </div>
                <span>083 123 567 78     |80a Capel street, Dublin 1. DO1AO24</span>
            </section>
        </header>
        <section className={styles.servicesFlex}>
            <ServiceAppointmentCard/>
            <ServiceAppointmentCard/>
            <ServiceAppointmentCard/>
            <ServiceAppointmentCard/>
            <ServiceAppointmentCard/>
            <ServiceAppointmentCard/>

        </section>
    </div>
  )
}

export default Home