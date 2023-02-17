import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import iconcv from './iconcv.png';
import iconrestaurant from './iconrestaurant.png';
import iconmusicplayer from './iconmusicplayer.png';

{/* Icon Link = https://icons8.com/ */}

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="home0">

    <div className="header0">
        <h2 data-text="Joshua Berry Portfolio">Joshua Berry Portfolio</h2>
    </div>
    
    <div className="container0">
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    <img src={iconcv} width="50px" />
                </div>
                <div className="text0">
                    <h3>Resume/CV</h3>
                    <p>Here you can view my CV and see my history of working and a little about me.</p>
                    <button onClick={() => {nav("/cv")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    <img src={iconrestaurant} width="50px" />
                </div>
                <div className="text0">
                    <h3>Restaurant Website</h3>
                    <p>Since I was a chef before, I made one of my projects a modern retaurant website.</p>
                    <button onClick={() => {nav("/restaurant")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    <img src={iconmusicplayer} width="50px" />
                </div>
                <div className="text0">
                    <h3>Music Project</h3>
                    <p>JavaScript can be tricky so try this music player I created and listen to my favourite music.</p>
                    <button onClick={() => {nav("/musicplayer")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    a
                </div>
                <div className="text0">
                    <h3>Calc</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quae omnis culpa cumque nihil.</p>
                    <button onClick={() => {nav("/nothing")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    a
                </div>
                <div className="text0">
                    <h3>SEO</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quae omnis culpa cumque nihil.</p>
                    <button onClick={() => {nav("/nothing")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    a
                </div>
                <div className="text0">
                    <h3>SEO</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quae omnis culpa cumque nihil.</p>
                    <button onClick={() => {nav("/nothing")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    a
                </div>
                <div className="text0">
                    <h3>SEO</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quae omnis culpa cumque nihil.</p>
                    <button onClick={() => {nav("/nothing")}}>Click Here</button>
                </div>
            </div>
        </div>
        <div className="box0">
            <div className="content0">
                <div className="icon0">
                    a
                </div>
                <div className="text0">
                    <h3>SEO</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quae omnis culpa cumque nihil.</p>
                    <button onClick={() => {nav("/nothing")}}>Click Here</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

{/*
icon website to download svg icons
https://ionic.io/ionicons
*/}