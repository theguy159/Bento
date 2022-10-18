// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateList = (listElement, list) => {
	for (const l of list) {
		const linkElements = l.links.map(link => `<a
		  target="${CONFIG.openInNewTab ? '_blank' : ''}"
          	  href="${link.link}"
          	  class="listItem">${link.name}</a>`);
		const item = `<div
		  class="card list list__${l.id}"
		  id="list_${l.id}">
          	    <i class="listIcon" icon-name="${l.icon}"></i>
	  	    ${linkElements.join('')}
        	</div>`;
	listElement.insertAdjacentHTML('beforeend', item);
	}
}

const generateFirstListsContainer = () => generateList(lists_1, CONFIG.firstlistsContainer);
const generateSecondListsContainer = () => generateList(lists_2, CONFIG.secondListsContainer);

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();
