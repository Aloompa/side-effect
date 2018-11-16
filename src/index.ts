const mocks = {};

export const effect = (name: string, fn: any) =>
    mocks[name] || fn;

export const mock = (name: string, fn: any) => {
    mocks[name] = fn;
};

export const reset = (name: string) => {
    delete mocks[name];
};

export const resetAll = () => {
    Object.keys(mocks).forEach(reset);
};