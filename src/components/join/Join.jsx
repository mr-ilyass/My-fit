import React, {useRef, useState} from 'react';
import "./Join.css"
import emailjs from '@emailjs/browser'
const Join = () => {

    const form = useRef();

    const [sended, setSended] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR ID', 'YOUR TEMPLATE ID', form.current, 'YOUR KEY')
            .then((result) => {
                console.log(result.text);
                setSended(true)
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="Join" id="Join">

            <div className="left-j">
                    <hr/>
                <div>
                    <span>READY TO</span>
                    <span className="stroke-text"> LEVEL UP</span>
                </div>

                <div>
                    <span className="stroke-text">YOUR BODY</span>
                    <span > WITH US?</span>
                </div>
            </div>


            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="email" disabled={sended} name="user_email" placeholder="Enter Your Email Address"/>
                    {
                        sended ? <button className="btn btn-j" type="submit" style={{backgroundColor:'#4D8C57'}}>Welcome</button> : <button className="btn btn-j">Join now</button>

                    }

                </form>


            </div>

        </div>
    );
};

export default Join;
