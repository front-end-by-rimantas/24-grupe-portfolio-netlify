class Carousel {
    constructor(params, renderingFunction) {
        this.selector = params.selector;
        this.list = params.list;
        this.dashControlsVisible = true;

        console.log(renderingFunction());

        this.DOM = null;
    }

    init () {
        //ar validus selectorius, jei taip, issaugoti, kur ta vieta
        if(!this.isValidSelector()) {
            return 'Nevalidus selectorius';
        }
        
        if(!this.isValidList()) {
            return 'Nevalidus listas';
        }
       
        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            return false;
        }

        this.DOM = DOM;
        return true;
    }

    isValidList() {
        if(!Array.isArray(this.list) || this.list.lengt ===0) {
            return false;
        }
        return true;
    }

    render() {
        this.DOM.classList.add('carousel');

        let HTML = '';
        HTML += this.renderList();
        if(this.dashControlsVisible) {
            HTML += this.renderControls();
        }
        this.DOM.innerHTML = HTML;

    }

    renderList() {
        let HTML = '<div class="list">';

        for(const item of this.list) {
            if (this.isValidListItem(item)) {
                HTML += `<div class="item"><div class="content">CAROUSEL ITEM</div></div>`;
            }
        }

        HTML += '</div>';

        return HTML;
    }

    renderControls() {
        let HTML = `<div class="controls"><div class="dash active"></div>`;
        HTML += '<div class="dash"></div>'.repeat(this.list.length -1);
        HTML += '</div>';
        return HTML;
    }

    isValidListItem(item) {
        if(typeof item !== 'object' || Array.isArray(item || !item.testimonial || !item.rating || !item.text || !item.name || typeof item.testimonial !== 'string' || typeof item.text !== 'string' || typeof item.name !== 'string' || item.testimonial == '' || item.text == '' || item.name == '')) {
            return false;
        }
        return true;
    }
}

export { Carousel }