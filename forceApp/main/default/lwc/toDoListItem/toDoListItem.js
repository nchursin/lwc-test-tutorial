import { LightningElement, api } from 'lwc';

export default class ToDoListItem extends LightningElement {
    @api item = null;

    get order() {
        return `# ${this.item && this.item.order}`;
    }

    get title() {
        return this.item && this.item.title;
    }

    get completed() {
        return this.item && this.item.completed;
    }

    get toDoListItemClass() {
        return this.completed ? `todo-list__item todo-list__item--completed` : `todo-list__item`;
    }

    onListItemClickHandler() {
        const detail = {
            item: this.item
        };
        this.dispatchEvent(new CustomEvent('selectitem', { detail }));
    }
}
