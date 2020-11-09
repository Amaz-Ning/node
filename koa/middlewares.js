const fn1 = async (next) => {
    console.log('fn1');
    await next();
    console.log('fn1 end');
}
const fn2 = async (next) => {
    console.log('fn2')
    await next()
    console.log('fn2 end')
}
const fn3 = async () => {
    console.log('fn3')
}
const middlewares = [fn1, fn2, fn3];
const compose = (middlewares) => () => {
    dispatch = (i) => {
        let fn = middlewares[i]
        if (!fn) return Promise.resolve();
        return Promise.resolve(
            fn(() => dispatch(i + 1))
        )
    }
    return dispatch(0);
}
compose(middlewares)();