"use client";

import InstagramCard from "../InstagramCard/InstagramCard";
import BoltCard from "../BoltCard/BoltCard";
import VidCard from "../VidCard/VidCard";
import PlayCard from "../PlayCard/PlayCard";
import HeroButtons from "@/components/HeroButtons/HeroButtons";
import './Hero.css';

export default function Hero() {
  return (
        <div>
            <div className="portfolio-hero">
            <div className="image-holder">
              <img src="/placeholder.png" alt="Profile placeholder" />
            </div>

            <div className="hero-text">
              <h1 className="name">Ayoub Hammadi</h1>
                <p className="title">
                  • Specializing in <span className="title2">Instagram reels</span> and social media content
                </p>          
            </div>            
          </div>
          <div className="exper-con">
              <div className="exper">
              <svg
                width="30"
                height="30"
                color="#359ce0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ig-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />              
              </svg>
              <p className="txt">Instagram reels specialist</p>
            </div>

            <div className="exper">
              <svg width="30" height="30" color="#359ce0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="6" width="13" height="12" rx="2" />
                <path d="M15 9.5l5.5-3v11l-5.5-3V9.5z" />
              </svg>
              <p className="txt">Professional Video Editing</p>
            </div>

            <div className="exper">
                <svg width="30" height="30" color="#359ce0" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
              </svg>
              <p className="txt">+2 years experience</p>
            </div>            
          </div>
          <div className="buttons-con">
          <HeroButtons/>

          </div>

            <div className="hero-cards">
               <InstagramCard />
               <BoltCard/>
                <VidCard />
               <PlayCard/>
            </div>        
        </div>
          
  )};