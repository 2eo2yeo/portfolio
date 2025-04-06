import React from 'react';

export default function Home({ img, name }) {
    return (
        <section id="home">
            <div className='avatar_wrap'>
                <div className='dotted_wrapper'>
                <img className="home__avatar" src={img} alt="portfolio" />

                </div>
                <h2 className="home__title">안녕하세요 <br />
                    <strong className="home__title--strong"> 꾸준히 성장하는</strong><br/>신입 개발자 {name} 입니다.</h2>

            {/* <p className="home__description">A software engineer currently residing in Seoul, South Korea</p> */}
            </div>
            <a className="home__contact" href="#contact">Contact Me</a>

        </section>
    );
}

