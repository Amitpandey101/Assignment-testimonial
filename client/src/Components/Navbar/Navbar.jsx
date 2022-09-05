import React from 'react'
import { useEffect } from 'react'

import "../../assets/css/style.css"
import "../../assets/css/default.css"
import "../../assets/css/LineIcons.css"
import "../../assets/css/magnific-popup.css"
import "../../assets/css/slick.css"


const Navbar = () => {
const handleScroll=()=>{
  console.log(window.scrollY)
}


  
  return (
    <>
      <header class="header-area" onScroll={handleScroll}>
<div class="navgition navgition-transparent sticky">
<div class="container">
<div class="row">
<div class="col-lg-12">
<nav class="navbar navbar-expand-lg">
<a class="navbar-brand" href="/">
<img src="logo.svg" alt="Logo"/>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
<span class="toggler-icon"></span>
<span class="toggler-icon"></span>
<span class="toggler-icon"></span>
</button>
<div class="collapse navbar-collapse sub-menu-bar" id="navbarOne">
<ul class="navbar-nav m-auto">
<li class="nav-item active">
<a class="page-scroll" href="#home">HOME</a>
</li>
<li class="nav-item">
<a class="page-scroll" href="#service">SERVICES</a>
</li>
<li class="nav-item">
<a class="page-scroll" href="#pricing">PRICING</a>
</li>
<li class="nav-item">
<a class="page-scroll" href="#testimonial">Testimonial</a>
</li>
<li class="nav-item">
<a class="page-scroll" href="#contact">CONTACT</a>
</li>
</ul>
</div>
<div class="navbar-social d-none d-sm-flex align-items-center">
<span>FOLLOW US</span>
<ul>
<li><a href="/"><i class="lni-facebook-filled"></i></a></li>
<li><a href="/"><i class="lni-twitter-original"></i></a></li>
<li><a href="/"><i class="lni-instagram-original"></i></a></li>
<li><a href="/"><i class="lni-linkedin-original"></i></a></li>
</ul>
</div>
</nav> 
</div>
</div> 
</div> 
 </div> 
 
<div id="home" class="header-hero bg_cover" style={{backgroundImage: "url(header-bg.jpg)"}}>
<div class="container">
<div class="row justify-content-center">
<div class="col-xl-8 col-lg-10">
<div class="header-content text-center">
<h3 class="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
<p class="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
<ul class="header-btn rounded-buttons">
<li><a class="main-btn rounded-three" href="/">GET IN TOUCH</a></li>
<li><a class="main-btn rounded-four video-popup"  href="https://youtu.be/GcRKREorGSc">WATCH THE VIDEO <i class="lni-play"></i></a></li>
</ul>
</div> 
</div>
</div> 
</div> 
<div class="header-shape">
<img src="header-shape.svg" alt="shape"/>
</div>
</div> 
</header>
    </>
  )
}

export default Navbar
