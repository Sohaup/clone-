import { Bird, Columns3Cog, Grid2X2Check, LayoutPanelTop, LockKeyhole, Rabbit, SearchCheck } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Features() {
    const [viewWidth, setViewWidth] = useState(chechViewPort());
    const featuresUi = [
        { logo: <Grid2X2Check size={50} />, title: "System Security", texts: "The system is designed from the ground up to be secure. Native support for full disk encryption, blazing fast security updates and a hardened debian core makes the system the perfect place to store sensitive data." },
        { logo: <LayoutPanelTop size={50} />, title: "Propapility", texts: "Parrot is based on top of Debian, the most advanced and recognized universal operating system that can run anywhere. From your laptop to your Phone, the Parrot core can be executed on a huge range of environments, including servers, IoT boards, cloud containers (like docker and podman) and more." },
        { logo: <Rabbit size={50} />, title: "Performance", texts: "We care about speed, and the system has been engineered to be as lightweight as possible. You can run it on very old hardware, or perform very intensive tasks without performance drops. Your applications, not the operating system, will be free to use all your hardware resources." },
        { logo: <LockKeyhole size={50} />, title: "Privacy", texts: "Don't leave your sensitive customer data floating around unprotected. The installer supports full disk encryption, and the system lets you handle data in the most secure and reliable way. Parrot OS is free from trackers and telemetry features, and it provides many privacy tools like AnonSurf, Tor Browser, a custom Firefox profile, easy cryptographic tools and much more." },
        { logo: <Columns3Cog size={50} />, title: "Cutomizeable", texts: "Perfect default settings and great customizability are key to the success of the project. You can either fall in love with the italian style of the Parrot system, or use it as a framework to build your custom system tailored around your very own needs and style." },
        { logo: <Bird size={50} />, title: "Freedom", texts: "The system is Free and Open Source, and all the code that powers the system is made available either through our APT software repository or our GIT servers for you to read, customize and contribute to. Free access to the code that runs on your devices is a fundamental freedom, and we do our best to fight for your rights." }
    ]

    function chechViewPort() {
        return window.screen.availWidth;
    }

    useEffect(()=>{
        window.addEventListener("resize" , function () {            
            setViewWidth(chechViewPort());   
            
        })
    } , [viewWidth])


    if (viewWidth > 800) {
                
        return (
            <section className='responsive py-8'>
                <div className=' grid md:grid-cols-2 xl:grid-cols-3 gap-3' >
                    {featuresUi.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
                </div>
            </section>)
    } else {
        return (
            <section className='responsive py-8'>
                <Swiper loop={true}>
                    {featuresUi.map((feature) => (
                        <SwiperSlide key={feature.title}>
                            <FeatureCard feature={feature} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        )
    }


}

function FeatureCard({ feature }) {
    return (
        <div className=' group bg-blue-950 rounded-lg flex flex-col items-start gap-6 text-white my-5 p-3 shadow transition-colors hover:bg-frozen hover:text-black duration-700 '>
            <div className="logo bg-white rounded-md text-blue-950 p-2 group-hover:bg-blue-950 group-hover:text-white transition-colors duration-700 ">
                {feature.logo}
            </div>
            <div className="title font-bold text-lg">
                <h4>{feature.title}</h4>
            </div>
            <div className="texts text-gray-400 group-hover:text-black transition-colors duration-700">
                {feature.texts}
            </div>
        </div>
    )
}

