/* eslint-disable no-console */
/**
 * @module 'CLI/Classes/Components'
 */
const path = require('path')
const fs = require('fs')
const inq = require('inquirer')

/**
 * @name Components
 * @description
 * A class that contains props of component creation
 */
class Components {
  /**
   * @protected
   * @param {string} name – name of a component
   * @returns {string} – a template of the component
   */
  template(name, type) {
    return `<template></template>

<script>
/**
 * ${type.toUpperCase()}/${name}
 * @displayName ${name}
 */
export default {
	name: '${name}'
}
</script>

<style lang="scss" scoped></style>
`
  }

  /**
   * @private
   * @returns {object} - returns answers of promt
   */
  prompt() {
    const questions = [
      {
        name: 'type',
        type: 'list',
        message: '👻: Компонент какого типа нужен?',
        choices: [
          {
            value: 'atoms',
          },
          {
            value: 'molecules',
          },
          {
            value: 'organisms',
          },
          {
            value: 'templates',
          },
        ],
      },
      {
        name: 'name',
        type: 'input',
        message: '🤖: Введи название компонента:',
      },
    ]
    return inq.prompt(questions)
  }

  async createComponent(ctx) {
    this.context = ctx
    const { type, name } = await this.prompt()
    const validName = name.replace('-', '_')
    const dest = path.join(this.context, `/components/${type}/${validName}`)
    const askForRewrite = () =>
      inq.prompt([
        {
          name: 'rewrite',
          type: 'list',
          message: '👀: Такой компонент уже есть, переписать компонент?',
          choices: [
            {
              value: 'nope',
            },
            {
              value: 'yup',
            },
          ],
        },
      ])
    const createFile = () =>
      fs.mkdir(dest, { recursive: true }, (err) => {
        if (!err) {
          fs.writeFile(
            `${dest}/index.vue`,
            this.template(validName, type),
            (e) => {
              if (!e) {
                console.log(`🔥: Компонент ${validName} успешно создан!`)
              } else {
                console.log('👹: Oops! Что-то пошло не так', e)
              }
            }
          )
        } else {
          console.log('👹: Oops! Что-то пошло не так', err)
        }
      })
    fs.readFile(`${dest}/index.vue`, 'utf-8', async (err, data) => {
      if (!err) {
        if (data) {
          const { rewrite } = await askForRewrite()
          if (rewrite === 'yup') {
            createFile()
          } else {
            console.log('💓: Ок')
            process.exit(1)
          }
        } else {
          createFile()
        }
      } else {
        createFile()
      }
    })
  }
}

module.exports = Components
