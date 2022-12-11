<template>
  <footer>
    <div class="container">
      <NuxtLink to="/" class="mobile_logo">
        <img src="@/assets/img/logo.png" />
      </NuxtLink>
      <div class="footer_content">
        <NuxtLink to="/" class="logo">
          <img src="@/assets/img/logo.png" />
        </NuxtLink>
        <div class="block">
          <nuxt-link :to="localePath('/')">
            {{ $t('header.header_links[0]') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/about')">
            {{ $t('header.header_links[1]') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/operations')">
            {{ $t('header.header_links[2]') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/kazakhstani_content')">
            {{ $t('header.header_links[4]') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/sustainability')">
            {{ $t('header.header_links[5]') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/career')">
            {{ $t('header.header_links[6]') }}
          </nuxt-link>
          <nuxt-link :to="localePath('/relations')">
            {{ $t('header.header_links[7]') }}
          </nuxt-link>
        </div>
        <div class="block">
          <h6>{{ $t('header.footer.contact') }}</h6>
          <a href="tel:+7 712 227 1212">+7 712 227 1212</a>
          <a href="tel:+7 712 302 6000">+7 712 302 6000</a>
          <a>{{ $t('header.footer.address') }}</a>
          <a href="mailto:tcoinfo@tengizchevroil.com"
            >tcoinfo@tengizchevroil.com</a
          >
          <nuxt-link :to="localePath('/contact')" class="with_underline">
            {{ $t('header.footer.phone') }}
          </nuxt-link>
          <div class="socials">
            <a href="http://">
              <img src="@/assets/img/facebook.png" />
            </a>
            <a href="http://">
              <img src="@/assets/img/instagram.png" />
            </a>
            <a href="http://">
              <img src="@/assets/img/linked.png" />
            </a>
            <a href="http://">
              <img src="@/assets/img/youtube.png" />
            </a>
          </div>
        </div>
        <div>
          <h6>{{ $t('header.footer.mobile') }}</h6>
          <div class="links">
            <a href="/">
              <img src="@/assets/img/appstore.png" />
            </a>
            <a href="/">
              <img src="@/assets/img/playmarket.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <a>{{ $t('header.footer.c') }}</a>
      <nuxt-link :to="localePath('/privacy')" class="with_underline">
        {{ $t('header.footer.policy') }}
      </nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  background: #30454e;
  padding: 80px 0;
  @include tablet() {
    padding: 40px 0;
  }
}
.container {
  @include tablet() {
    display: flex;
    flex-direction: row;
  }
  .logo {
    width: 120px;
    height: 120px;
    img {
      width: 100%;
      height: 100%;
    }
    @include tablet() {
      display: none;
    }
  }
  .mobile_logo {
    display: none;
    width: 48px;
    height: 48px;
    margin-right: 19px;
    img {
      width: 100%;
      height: 100%;
    }
    @include tablet() {
      display: block;
    }
  }
  &:last-of-type {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    @include tablet() {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 20px;
      padding-top: 20px;
      a:first-of-type {
        margin-bottom: 12px;
      }
    }
  }
}
.footer_content {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @include tablet() {
    width: calc(100% - (48px + 19px));
    flex-direction: column;
    justify-content: flex-start;
  }
}
.block {
  width: 276px;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  @include tablet() {
    width: 100%;
    max-width: 276px;
  }
  a {
    margin-bottom: 12px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  }
}
a,
h6 {
  font-family: 'Roboto';
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  @include tablet() {
    font-size: 16px;
    line-height: 20px;
  }
}
a {
  font-weight: 300;
}
h6 {
  font-weight: 500;
  margin-bottom: 20px;
  @include tablet() {
    margin-top: 20px;
    margin-bottom: 12px;
  }
}
.socials {
  margin-top: 32px;
  @include tablet() {
    margin-top: 20px;
  }
  img {
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
}
.links {
  display: flex;
  flex-direction: row;
  grid-gap: 16px;
  @include tablet() {
    flex-wrap: wrap;
  }
  a {
    width: 123px;
    height: 38px;
    margin-bottom: 0;
  }
}
.with_underline {
  text-decoration: underline;
}
</style>
