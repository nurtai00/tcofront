<template>
  <div class="privacy">
    <div class="container">
      <MoleculesBreadcrumbs class="mt40 mb20">
        <AtomsBreadOption :to="localePath('/')">
          {{ $t('privacy.breadcrumbs.main') }}
        </AtomsBreadOption>
        <AtomsBreadOption :to="localePath('/privacy')">
          {{ $t('privacy.title') }}
        </AtomsBreadOption>
      </MoleculesBreadcrumbs>
      <AtomsTitle type="h1" class="mb40">
        {{ $t('privacy.title') }}
      </AtomsTitle>
      <OrganismsSectionPrivacyBlock1 />
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block2.title')">
        <template #description>
          {{ $t('privacy.block2.description') }}
        </template>
        <template #list>
          <ul>
            <li v-for="item of $t('privacy.block2.list')" :key="item">
              {{ item }}
            </li>
          </ul>
        </template>
        <p v-for="item of $t('privacy.block2.footerDescriptions')" :key="item">
          {{ item }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block3.title')">
        <p v-for="item of $t('privacy.block3.descriptions')" :key="item">
          {{ item }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block4.title')">
        <p v-for="item of $t('privacy.block4.description')" :key="item">
          {{ item }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block5.title')">
        <p v-for="item of $t('privacy.block5.descriptions')" :key="item">
          {{ item }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block6.title')">
        <p v-for="item of $t('privacy.block6.descriptions')" :key="item">
          {{ item }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block7.title')">
        <p>
          {{ $t('privacy.block7.description') }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block8.title')">
        <p>
          {{ $t('privacy.block8.description') }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block9.title')">
        <p>
          {{ $t('privacy.block9.description') }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block10.title')">
        <p>
          {{ $t('privacy.block10.description') }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block11.title')">
        <p>
          {{ $t('privacy.block11.description') }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
      <OrganismsSectionPrivacyBlockContent :title="$t('privacy.block12.title')">
        <p>
          {{ $t('privacy.block12.description') }}
        </p>
      </OrganismsSectionPrivacyBlockContent>
    </div>
  </div>
</template>
