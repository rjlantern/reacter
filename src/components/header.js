const Header =(props)=>{

  const{fName,message}=props

    return(
      <>
      <h2>Hello {fName}</h2>

      <h3>Message:{message}</h3>
      </>
    )
  }
  
  export default Header;
  