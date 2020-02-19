/* eslint-disable @lwc/lwc/no-async-operation */
import { LightningElement, track } from 'lwc';
import getToDoList from '@salesforce/apex/ToDoListAPI.getToDoList';

export default class Dashboard extends LightningElement {
    @track toDoListItems = [];

    rendered = false;

    async renderedCallback() {
        if (!this.rendered) {
            this.rendered = true;

            this.toDoListItems = await this.loadToDoList();
            console.log('this.toDoListItems => ', this.toDoListItems);
        }
    }

    loadToDoList() {
        return new Promise((resolve, reject) => {
            getToDoList()
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    onItemSelected($event) {
        const item = $event.detail.item;

        const index = this.toDoListItems.findIndex(i => i.id === item.id);
        if (index !== -1) {
            this.toDoListItems[index].completed = true;
        }
    }
}
