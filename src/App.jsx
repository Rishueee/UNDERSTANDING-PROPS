import './App.css'
import elephant from "./images/elephant.jpeg";


function App(props) {

  // code here
  const rish = props.myData();
  console.log(rish);
  return(
    <>
     <div><h1>Kalvium gallery</h1></div>
     <div>
     {
        rish.map((item,index) =>{
          return(
            <div key={index}>
              <img src={item.img} alt="" />
            </div>
          )
        })
      }
     </div>
    </>
  )
}

export default App;