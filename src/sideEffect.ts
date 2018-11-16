const mocks = {};

export const effect = (name: string, fn: Function) =>
    (...args) =>
        mocks[name] ? 
            mocks[name](...args) : 
            fn(...args);

export const mock = (name: string, fn: Function) => {
    mocks[name] = fn;
};

export const reset = (name: string) => {
    delete mocks[name];
};

export const resetAll = () => {
    Object.keys(mocks).forEach(reset);
};