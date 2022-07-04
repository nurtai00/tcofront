/* eslint-disable no-console */

/**
 * @module 'CLI/Classes/Page'
 */
const path = require('path')
const fs = require('fs')
const inq = require('inquirer')

class Pages {
  /**
   * @protected
   * @param {string} name – name of a component
   * @returns {string} – a template of the component
   */
  template(name) {
    return `<template></template>

<script>
/**
 * 'PAGES/${name}'
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
        name: 'name',
        type: 'input',
        message: '👻: Введи название страницы:',
      },
      {
        name: 'pageType',
        type: 'list',
        message: '🤖: Какого типа страница нужна?',
        choices: [
          {
            value: 'index',
          },
          {
            value: '_slug',
          },
          {
            value: '_id',
          },
        ],
      },
    ]
    return inq.prompt(questions)
  }

  async createPage(ctx) {
    this.context = ctx
    const { name, pageType } = await this.prompt()
    const validName = name.replace('-', '_')
    const dest = path.join(this.context, `/pages/${validName}`)
    const askForRewrite = () =>
      inq.prompt([
        {
          name: 'rewrite',
          type: 'list',
          message: '👀: Такая страница уже есть, переписать страницу?',
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
            `${dest}/${pageType}.vue`,
            this.template(validName),
            (e) => {
              if (!e) {
                console.log(`🔥: Страница ${validName} успешно создан!`)
              } else {
                console.log('👹: Oops! Что-то пошло не так', e)
              }
            }
          )
        } else {
          console.log('👹: Oops! Что-то пошло не так', err)
        }
      })
    fs.readFile(`${dest}/${pageType}.vue`, 'utf-8', async (err, data) => {
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

module.exports = Pages
