/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, api } from 'lwc';

export default class ToDoList extends LightningElement {
    @api items = [];

    onItemSelectedHandler($event) {
        const detail = {
            ...$event.detail
        };
        this.dispatchEvent(new CustomEvent('selectitem', { detail }));
    }
}
