
function socials(selector, data) {
    const DOM = document.querySelector(selector);
    console.log(DOM);


    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const dataLength = data[i];

        HTML += `<a href="${dataLength.href}" target="_blank" class="fa fa-${dataLength.icon}"></a>`;
    }
    DOM.innerHTML = HTML;
}


export { socials };