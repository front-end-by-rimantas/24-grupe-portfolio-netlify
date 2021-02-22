class Services {
    constructor(selector, data){
        this.selector = selector;
        this.data = data;
        this.DOM = null;
        this.init();
    }

    init(){
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            return false;
            }
        this.render()
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: netinkamo formato this.selector');
            return false;
        }

        const DOM = document.querySelector(this.selector);

        if (!DOM) {
            console.error('ERROR:nurodyto elemento pagal duota this.selector nera.');
            return false;
        }

        this.DOM = DOM;
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            console.error('ERROR: netinkamo formato this.data');
            return false;
        }
        return true;
    }

generateServices(myServices) {
            return `<div class="block col-12 col-md-6 col-lg-4">
                        <div class="icon fa fa-${myServices.icon}"></div>
                        <h4 class="title">${myServices.title}</h4>
                            <p class="description">${myServices.description}</p>
                    </div>`;
        }
render() {
            let HTML = '';
            for (const services of this.data) {  
                HTML += this.generateServices(services);
            }
            this.DOM.innerHTML += HTML;
        }
    }
  
export { Services }