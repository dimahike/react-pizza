import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  console.log('RERENDER CATEGORIES');

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});
// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickItem } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}>
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default Categories;
