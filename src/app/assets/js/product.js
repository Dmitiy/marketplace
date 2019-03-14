import {
    store
} from './store';

const navigation = document.querySelectorAll('.nav a');

navigation.forEach(function (el) {
    const link = el;

    let html = store.chairs.map(product => renderItem(product)).join('');
    document.querySelector('.products-list').innerHTML = html;

    link.addEventListener('click', function (e) {
        e.preventDefault();
        const active = e.target;
        const product = e.target.dataset.name;
        console.log(product);

        let a;

        switch (product) {
            case 'chair':
                a = 'chairs';
                break;
            case 'bed':
                a = 'beds';
                break;
            case 'cupboard':
                a = 'cupboard';
                break;
            case 'kitchen':
                a = 'kitchen';
                break;
            case 'household':
                a = 'household';
                break;
            default:
                break;
        }

        html = store[a].map(product => renderItem(product)).join('');
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