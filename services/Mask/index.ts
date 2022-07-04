const tokens: any = {
  '#': {
    pattern: /\d/,
  },
  X: {
    pattern: /[0-9a-zA-Z]/,
  },
  S: {
    pattern: /[a-zA-Z]/,
  },
  A: {
    pattern: /[a-zA-Z]/,
    transform: (v: any) => v.toLocaleUpperCase(),
  },
  a: {
    pattern: /[a-zA-Z]/,
    transform: (v: any) => v.toLocaleLowerCase(),
  },
}

class Mask {
  constructor() {}

  private replaceAt(str: string, index: number, replacement: string): string {
    return (
      str.substring(0, index) + replacement + str.substring(index + str.length)
    )
  }

  private static clearable(mask: string): string {
    let clearMask: string = ''
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === '?') {
        clearMask += mask[++i]
      } else {
        clearMask += mask[i]
      }
    }
    return clearMask
  }

  // private static normalize(mask: any[]): any {
  //
  // }

  private masking: any = {
    string: (mask: string, value: string, selection?: any): string => {
      let [
        position,
        result,
        has,
        selectionTrigger,
        ignore,
        ignoreCount,
        ignoreCountUpper,
      ] = [0, '', -1, false, false, 0, 0]
      const clearMask = Mask.clearable(mask)
      mask.split('').forEach((maskChar: string, index: number) => {
        if (index - ignoreCount === selection?.current - 1) {
          selectionTrigger = true
        }
        if (maskChar === '?') {
          ignore = true
        } else if (Object.keys(tokens).includes(maskChar) && !ignore) {
          selectionTrigger = false
          while (position < value.length) {
            if (
              tokens[maskChar].pattern.test(value[position]) &&
              value[position] !== clearMask[position]
            ) {
              result += tokens[maskChar].transform
                ? tokens[maskChar].transform(value[position])
                : value[position]
              ignoreCount += ignoreCountUpper
              position++
              has++
              ;[has, ignoreCountUpper] = [index, 0]
              break
            }
            position++
          }
        } else if (position < value.length) {
          if (selectionTrigger) {
            selection.current++
          }
          if (ignore) {
            ignore = false
            ignoreCountUpper++
          }
          result += maskChar
        }
      })
      if (selection && !selection.current) {
        selection.current = has + 1
      }
      return has > -1 ? result.substring(0, has - ignoreCount + 1) : ''
    },

    // Coming soon
    /**
     * Маска для поля
     * @format [
     *          String,
     *          String[],
     *          {
     *            mask: [String, String[]],
     *            custom: [{
     *              symbol: Char,
     *              pattern: RegExp,
     *              transform: Function,
     *            }]
     *          }
     *      ]
     *
     * @example :mask="['TK-@@@@', 'LK-####']"
     * T: ['E', 'R']
     * K: ['E', 'A']
     *
     *
     * @type {String, Array, Object}
     */
    // array: (mask: any[], value: string, selection?: any): string => {
    //   mask.forEach(maskType => {
    //
    //   })
    // }

    object: (mask: any, value: string, selection?: any): string => {
      mask.custom.forEach((custom: any) => {
        tokens[custom.symbol] = {
          symbol: custom.symbol,
          pattern: custom.pattern,
          transform: custom.transform,
          rule: custom.rule,
        }
      })
      return this.masking.string(mask.mask, value, selection)
    },
  }

  private static typeOf(mask: any[]): any {
    if (Array.isArray(mask)) {
      return 'array'
    }
    return typeof mask
  }

  public mask(mask: any, value: string, selection: object): any {
    return this.masking[Mask.typeOf(mask)](mask, value, selection)
  }
}

export default Mask
