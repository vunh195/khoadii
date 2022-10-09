import React from "react";
const Right = (props) => {
    const MoveToSignIn = () => {
        
            props.setIsHiddenLeft(false);
            props.setIsHiddenRight(true);

      
        console.log(props.isHidden);

        
    }
    const MoveToSignUp = () => {
        
        props.setIsHiddenLeft(true);
        props.setIsHiddenRight(false);

  
    console.log(props.isHidden);

    
}
    return (
        
        <div className="Right" style={{ width: "50%" }}>
            
            {props.isHidden ? null : <div className="right" style={{ width: "100%", height: "100%" }} >
                <div className="form">
                    <div className="avatar"></div>
                    <div className="title">{props.isLeft ? "Welcome" : "Welcome back!"}</div>
                    <div className="label">Come here and enjoy the shopping moment</div>
                    <input type="text" required placeholder='Email' />
                    <input type="text" required placeholder='Password' />
                    {props.isLeft ? <input type="text" required placeholder='Confirm Password' /> : null}
                    {props.isLeft ? null : <div className="recovery">Recovery Password</div>}
                    <button className="login-btn">{props.isLeft ? "Register" : "Login"}</button>
                    {props.isLeft ? null : <button className="sign-in-btn"> Sign in with Google </button>}
                </div>
                <span>Don't have account yet?
                    {props.isLeft ? <button  onClick={() => MoveToSignUp()}>Sign in</button> : <button  onClick={() => MoveToSignIn()}>Sign up</button>}
                </span>
            </div>}
            
            </div>
            
        
        
	);
}
export default Right