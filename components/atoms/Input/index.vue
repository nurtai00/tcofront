<template>
  <label
    ref="field"
    :class="[
      {
        'is-focused': isFocus,
        'has-value': value,
        'has-error': error.length,
        'is-disabled': disabled,
        'is-required': isRequired,
        'has-hint': hint,
        textarea: textarea,
        'show-error': showError,
        'has-placeholder': !getPlaceholder.length && placeholder,
      },
      styleType,
    ]"
    :for="name"
    class="input validate-me"
  >
    <!-- Placeholder for input type "animate" -->
    <div v-if="placeholder && styleType !== 'placeholder'" class="placeholder">
      {{ placeholder }} <span v-if="isRequired">*</span>
    </div>

    <!--    Mask, rules-->
    <label v-if="type === 'file'" class="input file" :for="id">
      <div class="file__info">
        <slot name="info" />
      </div>
      <div class="append">
        <slot name="append" />
      </div>
    </label>
    <slot />
    <input
      v-show="type !== 'file'"
      v-if="!textarea"
      :id="id"
      v-model="model"
      :class="{ outlined }"
      :type="getType"
      :placeholder="getPlaceholder"
      :name="name"
      :disabled="disabled"
      v-bind="$attrs"
      @input="validateCheck"
      @change="onChangeHandler($event)"
      @keydown="onKey"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    />
    <textarea
      v-else
      :id="id"
      v-model="model"
      :placeholder="getPlaceholder"
      :name="name"
      :disabled="disabled"
      v-bind="$attrs"
      @input="validateCheck"
      @keydown="onKey"
      @focus="onFocus"
      @blur="onBlur"
      @click="$emit('click')"
    />

    <!-- Clear icon for clearable input -->
    <span v-if="clearable && type !== 'password'" class="clear" @click="clear">
      <img src="~icons/delete.png" alt="delete icon" />
    </span>

    <!-- Eye icon for password show toggle -->
    <span
      v-if="type === 'password'"
      class="password"
      @click="togglePasswordType"
    >
      <img :src="require(`icons/${passwordType}-password.png`)" />
    </span>

    <!-- Error text show under input -->
    <template v-if="error.length">
      <span class="errors">
        <img src="~icons/error_input.png" alt="error icon" />
        <span class="errors_text">
          {{ error[0].message }}
        </span>
      </span>
    </template>

    <!-- Hint text show under input -->
    <span v-if="hint" class="hint">{{ hint }}</span>
  </label>
</template>

<script>
/**
 * Обычный тег input работающий через v-model.
 * @displayName Input
 */
export default {
  name: 'Input',
  props: {
    outlined: {
      type: Boolean,
      default: false,
    },
    /**
     * Сюда пробрасывать переменную через v-model
     * @model
     * @type [string, number]
     */
    value: {
      type: String,
      required: true,
    },
    /**
     * Название поля, которое будет выводится в ошибке
     * @type {string}
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * Текстовая заглушка для поля
     * @type {string}
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * Тип инпута
     * @type {string}
     * @see Посмотреть в [MDN](https://developer.mozilla.org/ru/docs/Web/HTML/Element/Input#attr-type)
     * @values 'text', 'number', 'password', 'email'
     */
    type: {
      type: String,
      default: 'text',
      validator(value) {
        const types = ['text', 'number', 'password', 'file']
        if (!types.includes(value)) {
          console.log(
            '\x1B[31m INPUT',
            'Разрешено использовать только такие типы: ',
            types.join(', ')
          )
        }
        return types.includes(value)
      },
    },
    /**
     * Текст(Помощи) выводиться под полем
     * @type {string}
     */
    hint: {
      type: String,
      default: '',
    },
    /**
     * id для инпута
     * @type {string}
     */
    id: {
      type: String,
      default: null,
    },
    /**
     * Условие(отключенный) для отключения поля
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Условие(очищаемый) для удаления значения поля
     * @type {Boolean}
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * Условие(textarea) для textarea
     * @type {Boolean}
     */
    textarea: {
      type: Boolean,
      default: false,
    },
    /**
     * Правлиа для поля
     * @format "value|value|value..."
     * @value ["max:Number", "min:Number", "required", "pattern:RegExp", "email", "url", "number", "date", "time", "datetime", "tel", "color", "alpha", "alpha_spaces"]
     * @type {String}
     */
    rules: {
      type: String,
      default: null,
    },
    /**
     * Маска для поля
     *
     * @format [
     *          String,
     *          {
     *            mask: String,
     *            custom: [{
     *              symbol: Char,
     *              pattern: RegExp,
     *              transform: Function,
     *            }]
     *          }
     *      ]
     *
     * @example :mask="{
     *           mask: 'Hh:Mm am',
     *           custom: [
     *            {
     *              symbol: 'H',
     *              pattern: /[0-1]/,
     *            },
     *            {
     *              symbol: 'h',
     *              pattern: /[0-9]/,
     *            },
     *            {
     *              symbol: 'M',
     *              pattern: /[0-6]/,
     *            },
     *            {
     *              symbol: 'm',
     *              pattern: /[0-9]/,
     *            },
     *          ]
     *        }"
     * T: ['E', 'R']
     * K: ['E', 'A']
     *
     * @type {String}
     */
    mask: {
      type: [String, Array, Object],
      default: null,
    },
    /**
     * Условие(связка) для поля с другим полем
     * @type {String}
     */
    confirmed: {
      type: String,
      default: null,
    },
    /**
     * Название(типа) стиля
     * @values ['default', 'animate', 'placeholder']
     * @type {String}
     */
    styleType: {
      type: String,
      default: 'default',
    },
  },
  data() {
    return {
      error: [],
      showError: false,
      passwordType: 'hide',
      isFocus: false,
      formatRules: null,
      selection: null,
    }
  },
  computed: {
    getPlaceholder() {
      return this.styleType !== 'placeholder' ? '' : this.placeholder
    },
    getType() {
      if (this.type === 'password') {
        return this.passwordType === 'hide' ? this.type : 'text'
      } else {
        return this.type
      }
    },
    /**
     * Model для записи данных из input
     * @type {function}
     * @see Посмотреть в [MDN](https://vuejs.org/v2/guide/computed.html#Computed-Setter)
     */
    model: {
      get() {
        return this.value
      },
      set(value) {
        /**
         * Emit для записи нового значения из html tag input
         * @type {function}
         * @property ['value', 'maskValue(value)']
         */
        this.$emit('input', this.mask ? this.maskValue(value) : value)
        /**
         * setSelectionRange чтобы поле не переключал курсор при вводе данных
         */
        if (this.selection) {
          setTimeout(() =>
            this.$refs.field
              .querySelector(['input', 'textarea'])
              .setSelectionRange(this.selection.current, this.selection.current)
          )
        }
      },
    },
  },
  created() {
    // If initially there is a value, setting showing error to true
    this.showError = !!this.value

    // If there is a mask, setting value to masked
    if (this.mask) {
      this.$emit('input', this.$services.mask.mask(this.mask, this.value))
    }

    // If there is a rules, setting formatRules, and validate
    if (this.rules) {
      this.formatRules = this.rules.split('|').map((rule) => {
        const [key, value] = rule.split(':')
        return rule.includes(':')
          ? { name: key, value }
          : { name: key, value: key }
      })

      // If there is confirmed, setting watch for confirmed
      if (this.confirmed !== null) {
        this.confirmedInit()
      }

      this.validate(this.value)
    }
  },
  methods: {
    isRequired() {
      return this.rules.includes('required')
    },
    togglePasswordType() {
      this.passwordType = this.passwordType === 'open' ? 'hide' : 'open'
    },
    // Set watch to confirmed for validate
    confirmedInit() {
      this.formatRules.push({
        name: 'confirmed',
        value: this.confirmed,
      })

      this.$watch('confirmed', () => {
        this.validate(this.value)
      })
    },
    // Validate value with rules
    validate(value) {
      // Update confirmed value
      if (this.confirmed !== null) {
        this.formatRules.pop()
        this.formatRules.push({
          name: 'confirmed',
          value: this.confirmed,
        })
      }

      this.error = this.$services.validate.validate(this.formatRules, value)
      this.$emit('error', this.error)
    },
    // PreValidate check if rules exist
    validateCheck(e) {
      if (this.rules) {
        this.validate(e.target.value)
        this.showError = true
      } else {
        this.error = []
      }
    },
    onChangeHandler(event) {
      if (!event) {
        return
      }
      console.log(event.target.value)
      this.validateCheck(event)
      this.$emit('change', event)
    },
    // Cursor selection position save
    onKey(e) {
      if (this.mask) {
        const selectionEl = this.$refs.field.querySelector([
          'input',
          'textarea',
        ])
        this.selection = {
          start: selectionEl.selectionStart,
          end: selectionEl.selectionEnd,
          direction: selectionEl.selectionDirection,
        }

        if (e.key === 'Backspace') {
          this.selection.current =
            selectionEl.selectionStart === selectionEl.selectionEnd
              ? selectionEl.selectionStart - 1
              : selectionEl.selectionStart
        } else if (e.code === 'KeyV' && (e.ctrlKey || e.metaKey)) {
          this.selection.current = null
        } else {
          this.selection.current = selectionEl.selectionStart + 1
        }
      }
    },
    // Mask value
    maskValue(value) {
      return this.$services.mask.mask(this.mask, value, this.selection)
    },
    onFocus() {
      this.$emit('focus')
      this.isFocus = true
    },
    onBlur() {
      this.$emit('blur')
      this.showError = true
      this.isFocus = false
    },
    clear() {
      this.$emit('input', null)
      this.$emit('clear')
    },
  },
}
</script>

<style scoped lang="scss">
$border: 1px solid rgba($c-text, 20%);
$border-hover: 1px solid rgba($c-text, 40%);
$border-focus: 1px solid rgba($c-text, 60%);
$border-error: 1px solid #ffd8d8;

$background: #fff;
$background-error: #ffd8d8;
$background-hover: white;
$background-focus: white;

$border-radius: 4px;

$input-transition: none;
$input-padding-x: 20px;
$input-padding-y: 16px;
$input-height: 56px;
$input-size: 16px;

$placeholder-default-size: 16px;
$placeholder-default-color: $c-text;
$placeholder-default-error-color: red;
$placeholder-default-opacity: 1;
$placeholder-default-disabled-opacity: 0.5;
$placeholder-default-bottom: 8px;

$placeholder-size: 16px;
$placeholder-color: $c-text;
$placeholder-opacity: 0.7;
$placeholder-disabled-opacity: 0.5;

$placeholder-animate-size: 16px;
$placeholder-animate-color: $c-text;
$placeholder-animate-opacity: 0.7;
$placeholder-animate-disabled-opacity: 0.5;
$placeholder-animate-transition: 0.35s ease;

$error-size: 16px;
$error-color: red;
$error-margin-top: 8px;

$icons-size: 24px;

.input {
  display: block;
  position: relative;
  .file {
    display: flex;
    border-bottom: 1px solid rgba($c-text, 20%);
    padding-bottom: 10px;
    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    & .append {
      margin-left: auto;
    }
  }
  .outlined {
    border: 0;
    border-bottom: 1px solid rgba($c-text, 20%);
    border-radius: 0;
  }
  .clear,
  .password {
    position: absolute;
    top: calc(($input-height - $icons-size) / 2);
    right: 20px;
    cursor: pointer;
    width: $icons-size;
    height: $icons-size;
  }

  &.default.has-placeholder {
    .clear,
    .password {
      top: calc(
        ($input-height - $icons-size) / 2 +
          ($placeholder-default-size * 1.2 + $placeholder-default-bottom)
      );
    }
  }

  .clear {
    display: none;
  }

  &.has-value .clear {
    display: block;
  }

  &.has-value:not(.textarea) {
    .clear {
      display: block;
    }
  }

  .hint {
    opacity: 0.7;
  }

  input,
  textarea {
    font-family: 'Roboto';
    width: 100%;
    height: $input-height;
    padding: $input-padding-y $input-padding-x;
    border-radius: $border-radius;
    border: $border;
    transition: $input-transition;
    background: transparent;
    &.outlined {
      &:hover {
        border: none;
        border-bottom: 1px solid rgba($c-text, 30%);
        background: rgba($c-text, 5%);
      }

      &:focus {
        border: none;
        border-bottom: 1px solid rgba($c-text, 60%);
        background-color: transparent;
      }
    }
    &::placeholder {
      font-size: $placeholder-default-size;
      color: $placeholder-default-color;
      opacity: $placeholder-default-opacity;
      margin-bottom: $placeholder-default-bottom;
    }
    &:hover {
      border: $border-hover;
      background: $background-hover;
    }

    &:focus {
      border: $border-focus;
      background: $background-focus;
    }

    &:focus-visible {
      outline: none;
    }
  }

  &.is-disabled {
    ~ .clear {
      display: none;
    }

    .placeholder {
      opacity: $placeholder-default-disabled-opacity;
    }
  }

  .placeholder {
    font-family: 'Roboto';
    font-size: $placeholder-default-size;
    color: $placeholder-default-color;
    opacity: $placeholder-default-opacity;
    margin-bottom: $placeholder-default-bottom;
    cursor: text;
    font-weight: 600;
    span {
      margin-left: 5px;
      color: red;
    }
  }

  .errors {
    font-size: $error-size;
    color: $error-color;
    margin-top: $error-margin-top;
    display: none;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }

  &.has-error.show-error {
    input,
    textarea {
      background: $background-error;
      border: $border-error;
    }

    .errors {
      display: flex;
    }

    .placeholder {
      color: $placeholder-default-error-color;
    }
  }

  &.placeholder {
    input,
    textarea {
      &::placeholder {
        font-size: $placeholder-size;
        color: $placeholder-color;
        opacity: $placeholder-opacity;
      }
    }

    &.is-disabled {
      input,
      textarea {
        &::placeholder {
          opacity: $placeholder-disabled-opacity;
        }
      }
    }
  }

  &.animate {
    transition: $placeholder-animate-transition;

    .placeholder {
      position: absolute;
      left: $input-padding-x;
      top: calc(($input-height - ($placeholder-animate-size * 1.2)) / 2);
      font-size: $placeholder-animate-size;
      color: $placeholder-animate-color;
      opacity: $placeholder-animate-opacity;
      transition: $placeholder-animate-transition;
      margin-bottom: 0;
    }

    &.has-value,
    &.is-focused {
      input,
      textarea {
        padding: calc($input-padding-y * 1.5) $input-padding-x
          ($input-padding-y * 0.5);
      }

      .placeholder {
        font-size: calc($placeholder-animate-size * 0.8);
        top: calc(($input-height - ($placeholder-animate-size * 0.8)) / 5);
      }
    }
  }
}
</style>
