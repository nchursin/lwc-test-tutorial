import { createElement } from 'lwc';
import Dashboard from 'c/dashboard';

let componentElement = null;

describe('Dashboard', () => {
    beforeEach(() => {
        componentElement = createElement('c-dashboard', {
            is: Dashboard
        });
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });
});
