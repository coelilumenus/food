import {getResource} from '../services/services';

function cards() {
    class MenuItem {
        constructor(src, alt, subtitle, descr, price, ...classes) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.transfer = 75;
            this.classes = classes;
            this.changeToRub();
        }

        changeToRub() {
            this.price = this.price * this.transfer;
        }

        createItem() {
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
            } else {
                this.classes = Array.from(this.classes).join(' ');
            }

            document.querySelector('.menu__field div').innerHTML += `
            <div class="${this.classes}">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            </div>`;
        }
    }

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuItem(img, altimg, title, descr, price).createItem();
            });
        });
}

export default cards; 