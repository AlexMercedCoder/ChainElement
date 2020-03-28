const initialState = {};

ChainElement.storage.hello = 'Hello World';

class TestTest extends ChainElement {
    constructor() {
        super(initialState);
    }

    builder(state, props, storage, query) {
        const style = `<style>h1{color: blue;}</style>`;

        const template = `<h1>${storage.hello}</h1>`;

        return `${style} ${template}`;
    }
}

console.log(ChainElement.query);

ChainElement.makeTag('test-test', TestTest);
