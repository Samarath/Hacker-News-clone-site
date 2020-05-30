import React,{useState} from 'react';

const Signin = (prop) => {
    const [userName, setUserName] = useState('');
    const [password, setpassword] = useState('');
    const {detail} = prop;

    const user = (e) => {
        setUserName(e.target.value);
    }

    const pass = (e) => {
        setpassword(e.target.value);
    }

    const submitDetail = () => {
        if(userName !== '' && password !== ''){
            localStorage.setItem(userName, password);
            detail([userName, password])
        }
        
    }



    return (
        <article className="br ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center ">  
        <div className="pa4 orange-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                <legend className="f1 fw6 ph0 mh0">Login</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="user-name">
                    Name
                    </label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-orange w-100"
                     type="text"
                     name="user-name"
                     id="user-name"
                     onChange={(e) => user(e)}
                     />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                    </label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-orange w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => pass(e)}
                    />
                </div>
                </fieldset>
                <div className="">
                <input 
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="login"
                onClick={() => submitDetail()}
                />
                </div>
            </div>
            </div>
            </article>
        )
     }

export default Signin;