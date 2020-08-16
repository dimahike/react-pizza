import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  // const [activeItem, setActiveItem] = useState(0);

  // const onSelectItem = (index) => {
  //   setActiveItem(index);
  //   onClickCategory(index);
  // };

  console.log('RERENDER CATEGORIES');

  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: 0, items: [] };

export default Categories;
