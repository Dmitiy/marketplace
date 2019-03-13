import {
    store
} from './store';

const navHeader = document.querySelectorAll('header .navigation a');

navHeader.forEach(function (el) {

    const link = el;
    let html;

    html = store.chairs.map((product) => renderItem(product)).join('');
    document.querySelector('.products-list').innerHTML = html;

    link.addEventListener('click', function (e) {
        e.preventDefault();
        const active = e.target;
        const product = e.target.textContent;

        switch (product) {
            case 'Стулья и кресла':
                html = store.chairs.map((product) => renderItem(product)).join('');
                document.querySelector('.products-list').innerHTML = html;
                break;
            case 'Кровати и матрасы':
                html = store.beds.map((product) => renderItem(product)).join('');
                document.querySelector('.products-list').innerHTML = html;
                break;
            case 'Шкафы и комоды':
                html = store.cupboard.map((product) => renderItem(product)).join('');
                document.querySelector('.products-list').innerHTML = html;
                break;
            case 'Мебель для кухни':
                html = store.kitchen.map((product) => renderItem(product)).join('');
                document.querySelector('.products-list').innerHTML = html;
                break;
            case 'Товары для дома':
                html = store.household.map((product) => renderItem(product)).join('');
                document.querySelector('.products-list').innerHTML = html;
                break;
        }
    });
})


function renderItem(item) {
    return `
        <a class="${item.hasClass || 'product-link' }" href=${item.href}>
            <figure class="product-item ">
                <div class="product-item__img">
                    <img src=${item.imgSrc} alt=${item.title}>
                </div>
                <figcaption class="product-item__desc">
                    <p class="product-item__title overflow-ellipsis">${item.title}</p>
                    <p class="product-item__price">${item.price}
                        <span class="product-item__currency">${item.currency}</span>
                    </p>
                    <button class="btn">${item.button || 'В корзину'}</button>
                </figcaption>
            </figure>
        </a>`;
}