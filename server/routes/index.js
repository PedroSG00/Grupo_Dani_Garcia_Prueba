module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const factsAndGifRouter = require('./cat-facts-and-gif.routes')
    app.use('/fact-and-gif', factsAndGifRouter)

}
