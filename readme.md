# @aloompa/side-effect

A tiny dependency injection library for managing and mocking side effects.

## Usage

First you need to create an effect. This basically just means wrapping any side effect in your code with the `effect()` function and giving it a name. So this:

```
const fetchData = () => {
    // ... some side effect
});
```

Becomes this:

```
import { effect } from '@aloompa/side-effects';

const fetchData = effect('fetch-my-data', () => {
    // ... some side effect
});
```

It is important to note that at this point, both function expose exactly the same api. They return the same value and they could both accept as many options as needed.

Finally, when you need to test the business logic around your side effects, you can mock the side effects using `mock()`:

```
import { mock, effect } from '@aloompa/side-effects';

const fetchData = effect('fetch-my-data', () => {
    // ... some side effect
});

mock('fetch-my-data', () => {
    // ... a mock of your side effect
});

// This calls the function provided to mock instead of the orginal
fetchData();
```

Finally, you should clean up after yourself after every test. This can be done using `reset()` or `restAll()`:

```
import { reset } from '@aloompa/side-effects';

reset('fetch-my-data');
```

## API

### effect (name: string, value: any)

This declares an effect and makes it mockable. While the examples show mocking a function, effect can just as easily be used to mock an object, class or any other type.

### mock (name: string, value: any)

This declares a mock so that anytime an effect with the name you pass in is executed, it will execute the mock instead.

### reset (name: string)

Resets a mock so that the effect is no longer mocked.

### resetAll ()

Resets all the mocks.

## Contributing

We encourage you to contribute to Side Effect by submitting bug reports and pull requests through [Github](http//github.com).

## License

Side Effect is released under The [MIT License](http://www.opensource.org/licenses/MIT) (MIT)

Copyright (c) [2018] [Aloompa LLC]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
