import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Better Logics</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>We are your one and only solution to your tech problems you face everyday.
                        We are leading tech company whose aim is to increase the problem solving ability in market.
                    </p>
                </div>

            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>We are a blockchain development company that helps enterprises of all kinds implement the latest technologies.
                        We use innovative strategies to enhance their productivity and accelerate their growth. We have helped brands 
                        make a name for themselves in the digital landscape by offering a variety of services that cater to their business needs.

                        Our services include Blockchain solutions, Web & Mobile Development and UI/UX Design. We help our clients digitally transform
                         their businesses using state-of-the-art solutions. Our Blockchain development services aim to give companies a competitive edge.

                        We have a team of experts with a diverse range of skillsets and expertise which includes proficiency in Node.js, React.js (MERN stack), Solidity.
                         Our developers have years of experience with Wallets, Defi, Whitepaper writing & development and Smart Contracts development.
                         We are also well versed in the development and creation of Non-fungible tokens (NFTs). We build NFT marketplaces,
                          NFT minting platforms and ICO launchpads for our clients. Our PR & marketing department focuses on blockchain marketing, ICO marketing, NFT marketing, and community building.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>

                        <div style={{ animationDelay: "0.3s" }}>
                          <AiFillGoogleCircle />
                          <p>Google</p>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                          <AiFillAmazonCircle />
                          <p>Amazon</p>
                        </div>  

                        <div style={{ animationDelay: "0.7s" }}>
                          <AiFillYoutube />
                          <p>Youtube</p>
                        </div>

                        <div style={{ animationDelay: "0.9s" }}>
                          <AiFillInstagram />
                          <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>

        </>
    )
}

export default Home