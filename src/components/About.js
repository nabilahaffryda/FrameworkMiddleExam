import React, {Component} from 'react';
import image_profile from '../asset/image_profile.jpg';

class About extends Component{
    render(){
        return(
            <div id="contact-page" className="container">
                <div className="bg">
                    <div className="row">    		
                        <div className="col-sm-12">    			   			
                            <h2 className="title text-center">About <strong></strong></h2>    			    				    				
                            <div id="gmap" className="contact-map">
                                <div className="row">  	
                                    <div className="col-sm-12">
                                        <div className="single-blog-post">
                                            <center>
                                                <table style={{width:900}}>
                                                    <tbody>
                                                        <tr>
                                                            <th rowSpan="9"><img src={image_profile} className="image_profile"></img> </th>
                                                        </tr>
                                                        <tr>
                                                            <th>NIM</th>
                                                            <th>1841720012</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Nabilah Affryda Rihadatul'aisy</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Class</th>
                                                            <th>TI - 3G</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Faculty</th>
                                                            <th>Informatic Engineering</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Email</th>
                                                            <th>nabilahaffryda88@gmail.com</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Github</th>
                                                            <th>@nabilahaffryda</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Address</th>
                                                            <th>Jl. Wonokerso No: 56 Malang</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Hobby</th>
                                                            <th>Fangirling over EXO and SEVENTEEN</th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>			 		
                    </div>
                </div>
            </div>
        )
    }
} export default About