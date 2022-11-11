import { IValidity } from './Validate.interface'

const listOfRules: any = {
  required: (e: string) => {
    return e.trim() !== ''
      ? { valid: true }
      : { valid: false, message: 'This field is required' }
  },

  email: (e: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid email' }
  },

  max: (e: string, max: number) => {
    return e.length <= max
      ? { valid: true }
      : {
          valid: false,
          message: `This field must be less than ${max} characters`,
        }
  },

  min: (e: string, min: number) => {
    return e.length >= min
      ? { valid: true }
      : {
          valid: false,
          message: `This field must be more than ${min} characters`,
        }
  },

  pattern: (e: string, pattern: string) => {
    const re = new RegExp(pattern)
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must match the pattern' }
  },

  number: (e: string) => {
    const re = /^\d+$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a number' }
  },

  url: (e: string) => {
    const re =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid url' }
  },

  date: (e: string) => {
    const re = /^\d{4}-\d{2}-\d{2}$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid date' }
  },

  time: (e: string) => {
    const re = /^\d{2}:\d{2}:\d{2}$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid time' }
  },

  datetime: (e: string) => {
    const re = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid datetime' }
  },

  tel: (e: string) => {
    const re = /^\+7\s[(]\d{3}[)]\s\d{3}-\d{2}-\d{2}/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid tel' }
  },

  color: (e: string) => {
    const re = /^#[0-9a-f]{6}$/i
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid color' }
  },

  colorRgba: (e: string) => {
    const re = /^rgba\(\d{1,3},\d{1,3},\d{1,3},\d{1,3}\)$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid color rgba' }
  },

  alpha: (e: string) => {
    const re = /^[a-zA-Z]+$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid alpha' }
  },

  alpha_spaces: (e: string) => {
    const re = /^[a-zA-Z ]+$/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid alpha_space' }
  },

  password: (e: string) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
    return re.test(e)
      ? { valid: true }
      : { valid: false, message: 'This field must be a valid password' }
  },
  file: (e: string) => {
    return e.length === 0
      ? { valid: false, message: 'This field are required' }
      : { valid: true }
  },
  confirmed: (e: string, confirmed: string) => {
    return e === confirmed
      ? { valid: true }
      : { valid: false, message: 'This field must be confirmed' }
  },
}

class Validate {
  constructor() {}

  public validate(rules: any[], e: string): any {
    const errors: any[] = []
    rules.forEach((rule) => {
      const validity: IValidity = listOfRules[rule.name](e, rule?.value)
      if (!validity.valid) {
        errors.push(validity)
      }
    })
    return errors
  }
}

export default Validate
