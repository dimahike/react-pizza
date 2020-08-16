import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  console.log('pizzas: ', { items, isLoaded });

  React.useEffect(() => {
    // Move to redux and connect Redux-Thunk
    // Watch for filtration and sorting, and substitude parameters in URL from Redux
    // Make simulation for a pizza loadings
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortPopup = React.useCallback((index) => {
    dispatch(setSortBy(sortItems[index]));
  }, []);

  console.log(sortBy);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            onClickCategory={onSelectCategory}
            items={categoryNames}
            activeCategory={category}
          />
          <SortPopup
            onClickSortPopup={onSelectSortPopup}
            activeSortType={sortBy.type}
            items={sortItems}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoaded
            ? items.map((obj) => (
                <PizzaBlock key={`${obj.name}_${obj.id}`} isLoading={true} {...obj} />
              ))
            : Array(10)
                .fill()
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
