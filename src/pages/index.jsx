function Home(){
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center">

        <img  className="img-thumbnail img-fluid" style={{height:"250px",width:"200px"}} src="./gyening.jpg"  alt="Gyening picture" />
        
        </div>
        </div>
        <div className="row">
        <div className="col-4">
        <h3>ABOUT</h3>
        <p className="">
        Hi there. I'm <strong>Emanuel Gyening</strong>. 
        I'm a full stack developer based in Nottingham, United Kingdom.
        I also have techno-functional experience in <strong>Oracle Flexcube Universal Banking Software</strong>.
        I'm well versed in programing in <strong>Java (JavaFx and Spring boot),PHP(Laravel) ,Javascript (React), Sql and Docker</strong>.
        </p>
        <br/>
        </div>

        <div className="col-4">
        <h3>SKILLS & FOCUS</h3>
          
       <p>Backend development</p>   
      <p>Web development</p>
      <p>Desktop application development</p>
      <p>Mobile app development</p>
      <br/>

        </div>
          <div className="col-4">
          <h3>NETWORK</h3>
      
      <p>
        <a href="https://github.com/okuley">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/emmanuel-baffour-gyening-85326013a/">Linkedin</a>
      </p>
      <p>
        <a href="mailto:baffoagyening@gmail.com">baffoagyening@gmail.com</a>
      </p>
          </div>
       
    

        </div>
        
      
    </div>
    </>
  )
}
export default Home