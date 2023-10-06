import Wrapper from "../assets/wrappers/ErrorPage";
import {Link, useRouteError} from 'react-router-dom';
import img from '../assets/not-found.svg';

const Error = () => {
  const error=useRouteError();
  console.log(error);
  if(error.status===404){
    return <Wrapper>
    <div>
    <img src ={img} alt ='not found'/>
    <h3>ohh!</h3>
    <p> We cant not find page you are look for</p>
    <Link to='/'>back home</Link>
    </div>
    </Wrapper>
   
  }
  return <Wrapper>
    <div>
      <h3>somthing went wrong</h3>
    </div>
  </Wrapper>
  
};

export default Error;
