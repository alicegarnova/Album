import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { ICard } from "./components/model";
import { CARDS, CATEGORIES_FILTER } from "./constants";
import { Button } from "./components/Button/Button";

export const App = () => {
  const [cards] = useState<ICard[]>(CARDS);

  const [page, setPage] = useState<number>(1);

  const [visibleCards, setVisibleCards] = useState<ICard[]>([]);

  const [activeCategory, setActiveCategory] = useState<number>(-1);

  const [textFilter, setTextFilter] = useState<string>("");

  const [paginationArray, setPaginationArray] = useState<number[]>([]);

  useEffect(() => {
    const filterInput =
      textFilter !== ""
        ? cards.filter((card) => {
            return card.title.toLowerCase().includes(textFilter.toLowerCase());
          })
        : cards;
    const filteredCards = filterInput.filter((card) =>
      activeCategory === -1 ? true : card.albumId === activeCategory
    );

    const newPaginationArray = [];
    for (let i = 0; i < Math.ceil(filteredCards.length / 4); i = i + 1) {
      newPaginationArray.push(i + 1);
    }
    setPaginationArray(newPaginationArray);
    const newVisibleCards = filteredCards.slice((page - 1) * 4, page * 4);
    setVisibleCards(newVisibleCards);
  }, [page, activeCategory, cards, textFilter]);

  return (
    <div className="body_container">
      <h1>Моя коллекция фотографий</h1>
      <div className="content_wrapper">
        <div className="categories_filter_container">
          {CATEGORIES_FILTER.map((category) => {
            return (
              <Button
                isActive={activeCategory === category.albumId}
                onClick={() => {
                  setPage(1);
                  setActiveCategory(category.albumId);
                }}
              >
                {category.title}
              </Button>
            );
          })}
        </div>

        <div className="input_container">
          <input
            className="panel_input"
            type="text"
            placeholder="Поиск по названию"
            value={textFilter}
            onChange={(event) => setTextFilter(event.target.value)}
          />
        </div>

        <div className="cards_container">
          {visibleCards.length === 0 && (
            <h4>Ничего не найдено. Попробуйте еще раз</h4>
          )}
          {visibleCards.map((card) => {
            return <Card key={card.id} title={card.title} url={card.url} />;
          })}
        </div>
        <div className="buttons_container">
          {paginationArray.map((button) => {
            return (
              <Button
                isActive={button === page}
                onClick={() => {
                  setPage(button);
                }}
              >
                {button}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
