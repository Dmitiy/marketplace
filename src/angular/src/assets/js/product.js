import { store } from './store';
const navigation = document.querySelectorAll('.nav a');
const productList = document.querySelector('.products-list');

if (productList) {
  let html = store.chairs.map((product) => renderItem(product)).join('');
  productList.innerHTML = html;
}

navigation.forEach(function(el) {
  const link = el;
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const product = e.target.dataset.name;
    let a;

    for (let i = 0; i < link.length; i++) {
      console.log(link[i]);
    }

    switch (product) {
      case 'chair':
        a = 'chairs';
        break;
      case 'bed':
        a = 'beds';
        break;
      case 'cupboard':
        a = 'cupboards';
        break;
      case 'kitchen':
        a = 'kitchens';
        break;
      case 'household':
        a = 'households';
        break;
      default:
        break;
    }

    const html = store[a].map((product) => renderItem(product)).join('');
    document.querySelector('.products-list').innerHTML = html;
  });
});

function renderItem(item) {
  return `
        <a class="${item.hasClass || 'product-link'}" href=${item.href}>
            <figure class="product-item ">
                <div class="product-item__img">
                    <img src=${item.imgSrc} alt=${item.title}>
                </div>
                <figcaption class="product-item__desc">
                    <p class="product-item__title overflow-ellipsis">${
                      item.title
                    }</p>
                    <p class="product-item__price">${item.price}
                        <span class="product-item__currency">${
                          item.currency
                        }</span>
                    </p>
                    <button class="btn">${item.button || 'В корзину'}</button>
                </figcaption>
            </figure>
        </a>`;
}
