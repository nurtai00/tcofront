/**
 * @module 'CLI/Core'
 */
const Components = require('./classes/components/index.js')
const Pages = require('./classes/pages/index.js')
const Store = require('./classes/store/index.js')

const component = new Components()
const pages = new Pages()
const store = new Store()

const commands = new Map()
commands.set('component', (ctx) => component.createComponent(ctx))
commands.set('page', (ctx) => pages.createPage(ctx))
commands.set('store', (ctx) => store.createModule(ctx))

module.exports = commands
