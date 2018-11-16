import { effect, mock, reset, resetAll } from '../sideEffect';

describe('Side Effects', () => {
    const EFFECT_NAME = 'times-two';
    const timesTwo = a => a * 2;

    it('Should run the function normally', () => {
        expect(timesTwo(4)).toEqual(8);
    });

    it('Should work without mocking', () => {
        const result = effect(EFFECT_NAME, timesTwo);
        expect(result(4)).toEqual(8);
    });

    it('Should work with mocking', () => {
        const plusTwo = a => a + 2;
        mock(EFFECT_NAME, plusTwo);
        const result = effect(EFFECT_NAME, timesTwo);
        expect(result(4)).toEqual(6);
        reset(EFFECT_NAME);
    });

    it('Should reset the mocks', () => {
        const result = effect(EFFECT_NAME, timesTwo);
        expect(result(4)).toEqual(8);
    });

    it('Should reset all of the mocks', () => {
        mock('first-effect', () => 2);
        const result = effect('first-effect', () => 1);
        expect(result()).toEqual(2);
        
        resetAll();

        const result2 = effect('first-effect', () => 1);
        expect(result2()).toEqual(1);
    });

    it('Should be possible to mock later', () => {
        const plusTwo = a => a + 2;
        const result = effect(EFFECT_NAME, timesTwo);

        mock(EFFECT_NAME, plusTwo);
        expect(result(4)).toEqual(6);
        reset(EFFECT_NAME);
    });
});