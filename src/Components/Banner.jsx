import React, { Component } from 'react'
import logo from '../Components/public/image/image.jpg';
import linkedin from '../Components/public/image/linkedin.png';
import twitter from '../Components/public/image/twitter.png';
import github from '../Components/public/image/github.png';



class Banner extends Component {
    render() {
        return (
            <section className="container-banner">
                <div className="firstsec">
                    <div className="photo">
                        <div className="profileimage">
                            <a href="#home"><img id="profilepic" src={logo} width="170" height="170" alt="profilepic" /></a>

                        </div>
                        <div className="solink">
                            <a href="https://www.linkedin.com/in/vaishnavi-waghmale-019005222/"><img src={linkedin} alt="LinkedIn" /></a>
                            <a href="https://twitter.com/vaishnavi3622"><img src={twitter} alt="Twitter" srcset="" /></a>
                            <a href="https://github.com/Vaishnavi-Waghmale"><img src={github} alt="Github" srcset="" /></a>
                        </div>
                    </div>

                </div>
                <div className="secondsec">
                    <div className="name">
                        <h1>Vaishnavi Waghmale</h1>
                        <h2>
                            Frontend Developer
                        </h2>
                        <p>Pune, Maharashtra, India</p>
                    </div>

                    <div className="biosec">
                        <h3>Bio</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cumque maiores est molestiae, commodi numquam ratione exercitationem eum ad inventore rerum beatae dolore debitis fugiat consequatur laboriosam, repudiandae expedita architecto assumenda similique ullam, aut porro quod possimus? Repellat totam blanditiis odit eligendi laudantium in aliquid sint doloribus architecto, excepturi fugiat?</p>
                    </div>
                </div>


            </section>


        )
    }
}

export default Banner


