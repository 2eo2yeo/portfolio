import  React, { useState } from 'react';
import './css/style.css';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';
import Logo from './components/header/Logo.jsx';
import MenuList from './components/header/MenuList.jsx';
import ToggleButton from './components/header/ToggleButton.jsx';
import Home from './components/content/Home.jsx';
import SectionWrap from './components/content/SectionWrap.jsx';
import Majors from './components/content/Majors.jsx';
import Jobs from './components/content/Jobs.jsx';
import Skills from './components/content/Skills.jsx';
import Coding from './components/content/Coding.jsx';
import Ariticle from './components/content/Ariticle.jsx';
import Categories from './components/content/Categories.jsx';
import Projects from './components/content/Projects.jsx';
import Arrow from './components/content/Arrow.jsx';
import Top from './components/footer/Top.jsx';
import ContactLinks from './components/footer/ContactLinks.jsx';
import Bottom from './components/footer/Bottom.jsx';
import ProjectSection from './components/content/ProjectSection'; // 추가


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴

  const sectionList = [
    {
      "id": "about",
      "title": "About me",
       "description": "2024.10 ~2025.05 웹/앱개발 프론트엔드 취업캠프 수료",
      "children": [
        { "component": "Majors" },
        // { "component": "Jobs" }
      ]
    },
    {
      "id": "skill",
      "title": "My Skills",
      // "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis beatae, aliquid ratione commodi nam ex voluptate rem eveniet cupiditate optio natus? Cum, harum eum sint id quod nulla adipisci. Sunt?",
      "children": [
        {
          "component": "Skills",
          "children": [
            { "component": "Coding" },
            { "component": "Ariticle", "props": { "type": "Tools" } },
            { "component": "Ariticle", "props": { "type": "Etc" } }
          ]
        }
      ]
    },
    {
      "id": "work",
      "title": "Projects",
      "description": "아래 이미지 클릭 시 이동합니다",
      "children": [
        { "component": "Categories" },
        { "component": "Projects" }
      ]
    },
    // {
    //   "id": "testimonial",
    //   "title": "Testimonial",
    //   "description": "See what they say about me",
    //   "children": [
    //     { "component": "Testimonials" }
    //   ]
    // }
  ];

  const componentMap = {
    Majors,
    Jobs,
    Skills,
    Coding,
    Ariticle,
    Categories,
    Projects,
    // Testimonials
  };


  const renderComponent = (childObj) => {  
    const Component = componentMap[childObj.component]; 
    if (!Component) return null;

    return (
      <Component key={childObj.component + JSON.stringify(childObj.props || {})} {...(childObj.props || {})}>
        {childObj.children && childObj.children.map((childObj) => renderComponent(childObj))}
      </Component>
    );
  };
  
  return (
    <>
      <Header>
        <Logo name="SeoRyeong"/>
        <MenuList  isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <ToggleButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </Header>
      <Content>
        <Home img={`${process.env.PUBLIC_URL}/images/photo.jpg`} name="정서령"/>
        {sectionList.map((section) => (
  <SectionWrap
    key={section.id}
    id={section.id}
    title={section.title}
    description={section.description}
  >
    {section.id === 'work'
      ? <ProjectSection /> // 여기에만 직접 컴포넌트 넣기
      : section.children?.map((child) => renderComponent(child))
    }
  </SectionWrap>
))}

        {/* Arrow up */}
        <Arrow />
      </Content>
      <Footer>
        <Top 
          title="Contect Me"
          description="2eo2yeo@gmail.com"
          />
        <ContactLinks />
        <Bottom />
      </Footer>
    </>
  );
}

export default App;
