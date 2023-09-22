// import React, {useCallback} from "react"
// import {withRouter} from "react-router";
// import db from "./firebase";

// const SignUp = ({history}) => {
//     const handleSignup = useCallback( async event => {
//         event.preventDefault();
//         const {email, password} = event.target.elements;
//         try {
//             await db
//                 .auth()
//                 .createUserWithEmailAndPassword(email.value, password.value);
//             history.push('/');
//         } catch(error) {
//             alert(error);
//         }
//     }, [history]);

//     return(
//         <div>
//             <form className="form-signin" onSubmit={handleSignup}>
//             <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
//                 <label for="inputEmail" className="sr-only">Email address</label>
//                 <input name="email" type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
//                 <label for="inputPassword" className="sr-only">Password</label>
//                 <input name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
//                 <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
//             </form>
//         </div>
//     )
// }

// export default withRouter(SignUp);