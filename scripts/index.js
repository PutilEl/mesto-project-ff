
// Переменная для вывода новых карточек
const placesList = document.querySelector('.places__list');

function areaCard({name, link})
{
  // Скопировали шаблон
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  // Значения для вложенных элементов
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('alt', name);

  // Обработчик клика, по которому будет вызван переданный в аргументах колбэк
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  return cardElement;
}

// Функция удаления
function deleteCard() {
  const card = this.parentElement;
  card.remove();
}

initialCards.map(areaCard).forEach(el => placesList.append(el));