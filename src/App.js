import Content from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";

const App =()=>{
  
  return(
    <>
    <Header fName= 'John' message='Hai John'/>

    <Header fName= 'Smith' message='Hai Smith'/>

    <Content/>

    <Footer/>
    </>
  )
}

export default App;
