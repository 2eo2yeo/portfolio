import React, { useState } from 'react';
import Categories from './Categories';
import Projects from './Projects';


const allProjects = [
    {
      img: `${process.env.PUBLIC_URL}/images/projects/kurly.png`,
      alt: "project1",
      title: "Market Kurly",
      subtitle: "쇼핑몰 클론코딩",
      role: "장바구니, 결제페이지 담당",
      description: "HTML, SCSS, React, Node.js, Express, MySQL",
      category: "Front-end", 
      link: "https://github.com/react-project-green/kurly"
    },
    {
      img: `${process.env.PUBLIC_URL}/images/projects/beautyofjoseon.png`,
      alt: "project2",
      title: "Beauty Of Joseon",
      subtitle: "쇼핑몰 클론 코딩",
      role: "상세페이지, 상품목록 담당",
      description: "HTML, SCSS, React, Node.js, Express, MySQL",
      category: "Front-end",
      link: "https://github.com/haon-wuchang/beautyofjoseon.git"
    },
    {
      img: `${process.env.PUBLIC_URL}/images/projects/jinair.png`,
      alt: "project3",
      title: "Jin Air",
      subtitle: "항공권 예약 클론 코딩",
      role: "마이페이지, 쿠폰 등 담당",
      description: "HTML, SCSS, React, Redux, Node.js, Express, MySQL",
      category: "Front-end",
      link: "https://github.com/teampj0320/jinAir.git"
    }
  ];

const fixedCategories = ["All", "Front-end", "Back-end", "Mobile"];

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryCounts = allProjects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    acc["All"] = (acc["All"] || 0) + 1;
    return acc;
  }, {});

  // 고정 카테고리 배열 + count 조건부로 추가
  const categories = fixedCategories.map((name) => ({
    name,
    count: categoryCounts[name] ?? null
  }));

  const filtered = selectedCategory === 'All'
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Categories
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <Projects projectList={filtered} />
    </>
  );
}
