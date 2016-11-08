let rootRouter = require('express').Router()
let companiesRouter = require('./companies.router')
let transactionsRouter = require('./transactions.router')
let postsRouter = require('./posts.router')
let projectsRouter = require('./projects.router')
let teamsRouter = require('./teams.router')
let usersRouter = require('./users.router')
let homeRouter = require('./home.router')
let chatsRouter = require('./chats.router')
let followsRouter = require('./follows.router')

// rootRouter.use('/companies', companiesRouter)
// rootRouter.use('/transactions', transactionsRouter)
// rootRouter.use('/posts', postsRouter)
// rootRouter.use('/projects', projectsRouter)
// rootRouter.use('/teams', teamsRouter)
// rootRouter.use('/users', usersRouter)
rootRouter.use('/home', homeRouter)
rootRouter.use('/chats', chatsRouter)
rootRouter.use('/follows', followsRouter)

module.exports = rootRouter
