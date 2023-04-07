// import Container from 'components/container'
import Logo from 'components/logo'
import Navigation from 'components/navigation'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header className='text-gray-700 container border-b-2 border-gray-200 bg-red-100 mx-auto justify-between bg-hero-img' 
    >
   
    <div  className="container flex mx-auto p-5 flex-col md:flex-row items-center">

      <Logo />
      <Navigation />

    </div>
      

    </header>
  )
}
