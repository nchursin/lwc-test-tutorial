import { createElement } from 'lwc';
import ToDoList from 'c/toDoList';
let componentElement = null;

describe('ToDoList', () => {
    beforeEach(() => {
        componentElement = createElement('c-to-do-list', {
            is: ToDoList
        });
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('expected component to be created', () => {
        document.body.appendChild(componentElement);
        expect(componentElement.items).toEqual([]);
    });
});
