module.exports = app => {

    const indexRouter = require('./index.routes')
    app.use('/', indexRouter)

    const factAndGifRouter = require('./cat-fact-and-gif.routes')
    app.use('/fact-and-gif', factAndGifRouter)

}
