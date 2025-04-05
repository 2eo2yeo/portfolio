// import React from 'react';

// export default function Category({name, count, style, click}) {
//     return (
//         <button className={style}
//                 onClick={()=>{click(name)} }
//         >{name}<span className="category__count">{count}</span></button>
//     );
// }



import React from 'react';

export default function Category({ name, count, click, style }) {
  return (
    <button className={style} onClick={() => click(name)}>
      {name}
      {/* count가 존재할 때만 표시 */}
      {count ? <span className="category__count">{count}</span> : null}
    </button>
  );
}
