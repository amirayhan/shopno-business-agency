import { faEnvelope, faHeadset, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
    return (
        <div className="w-full bg-white py-28">
            <div className="md:max-w-[1480px] sm:max-w-[600px] m-auto grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-[#ff6809] leading-0">Quick Contact</h3>
                    <h2 className="p-0 mt-[-15px] leading-0">Have Questions? Get In Touch!</h2>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni</p>
                    <div className="flex mt-6">
                        <span className="text-4xl text-white bg-[#ff6809] w-[80px] h-[80px] rounded-full text-center leading-[80px] mr-4">
                            <FontAwesomeIcon icon={faHeadset} />
                        </span>
                        <div>
                            <p className="text-[20px] text-[#ff6809] font-bold pt-1">Call Us</p>
                            <h3>0123 456 789</h3>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <span className="text-4xl text-white bg-[#ff6809] w-[80px] h-[80px] rounded-full text-center leading-[80px] mr-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <div>
                            <p className="text-[20px] text-[#ff6809] font-bold pt-1">Email</p>
                            <h3>info@webdomain.com</h3>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <span className="text-4xl text-white bg-[#ff6809] w-[80px] h-[80px] rounded-full text-center leading-[80px] mr-4">
                            <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <div>
                            <p className="text-[20px] text-[#ff6809] font-bold pt-1">Address</p>
                            <h3>1234, Street Address, Zip code, Canada.</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="bg-gray-100 p-7">
                        <div className="flex gap-5">
                            <input className="rounded-none border-none p-3 focus:no-underline bg-white w-full" placeholder="First Name" type="text" />
                            <input className="rounded-none border-none p-3 focus:no-underline bg-white w-full" placeholder="Last Name" type="text" />
                        </div>
                        <input className="rounded-none border-none p-3 focus:no-underline bg-white mt-7 w-full" placeholder="Email *" type="email" />
                        <select className="rounded-none border-none p-3 focus:no-underline bg-white mt-7 w-full">
                            <option value="selected">--- Subject ---</option>
                            <option value="Business">Business</option>
                        </select>
                        <textarea className="rounded-none border-none p-3 focus:no-underline bg-white mt-7 w-full" name="message" id="" cols="30" rows="5">
                            Dear,
                        </textarea>
                        <button className="px-6 py-3 theme_bg_color text-white font-bold rounded-md hover:bg-[#222] transition-all hover:ease-linear duration-300 mt-7">Sign Up For Free</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
