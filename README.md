<div align="center">
    <img src="" alt="cacti-co-logo" width="700"/>
</div>

<br>
<br>

<div align="center">
    <p>🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿</p>
</div>

<br>

<div align="center">
    <h2>🌵 Prototype of Cacti and Succulents Shopping App 🌱.</h2>
</div>

<br>

<div align="center">

<a href="https://reactnative.dev"><img alt="React Native" src="https://img.shields.io/badge/React%20Native-v-%23234256?style=for-the-badge&logo=react"/></a>

<a href="https://reactnative.dev"
    ><img
      alt="React Native"
      src="https://img.shields.io/badge/React%20Native-v-%23234256?style=for-the-badge&amp;logo=appveyor"
  /></a>
<a href="https://nodejs.org/"
    ><img
      alt="Node JS"
      src="https://img.shields.io/badge/Node-v18.5.0-brightgreen?style=for-the-badge&amp;logo=appveyor"
  /></a>
<a href="https://yarnpkg.com"
    ><img
      alt="YARN"
      src="https://img.shields.io/badge/YARN-v1.22.18-red?style=for-the-badge&amp;logo=appveyor"
  /></a>
<a href="https://www.typescriptlang.org/"
    ><img
      alt="Typescript"
      src="https://img.shields.io/badge/typescript-v4.6.4-%239cf?style=for-the-badge&amp;logo=appveyor"
  /></a>
<a href="https://es.shopify.com"
    ><img
      alt="Shopify"
      src="https://img.shields.io/badge/Shopify-v-yellow?style=for-the-badge&amp;logo=appveyor"
  /></a>
<a href="https://stripe.com/es-us"
    ><img
      alt="Stripe"
      src="https://img.shields.io/badge/Stripe-v-blueviolet?style=for-the-badge&amp;logo=appveyor"
  /></a>

</div>

<br>
<br>

<div align="center">
    <p>🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿🌿</p>
</div>

<br>
<br>

## **⊙ Index**

---

1. [About](#✦-about)
2. [Dependencies](#✦-dependencies)
3. [Licenses](#✦-licenses)

<br>
<br>

## **⊙ About**

---

> Enjoy buying you favorite plants 🌺.

> Final-course project. React Native app, made during the CORE Code School bootcamp. It is a shooping app for an online store that simulates seeing, listing and buying products 👨‍💻.

> Its main product are cacti and succulents. It shows main information about the plants itself and their maintenance 🌵.

> Store can be contextualized to other types of products 🏪.

<br>
<br>

## **⊙ Dependencies**

---

Project dependencies:

-   [React Native](https://reactnative.dev)
-   [Typescript](https://www.typescriptlang.org/)
-   [Shopify](https://es.shopify.com)
-   [Stripe](https://stripe.com/es-us)

<br>
<br>

## **⊙ Structure**

---

### — Frontend:

```
├───📁 components/
│   ├───📁 home/
│   │   ├───📄 HomeSection.tsx
│   │   ├───📄 MainProduct.tsx
│   │   ├───📄 ProductCard.tsx
│   │   ├───📄 ProductList.tsx
│   │   └───📄 SectionTitle.tsx
│   ├───📁 info/
│   │   ├───📄 InputButton.tsx
│   │   └───📄 NewCactusForm.tsx
│   ├───📁 layout/
│   │   ├───📄 Footer.tsx
│   │   ├───📄 Header.tsx
│   │   ├───📄 HeaderButton.tsx
│   │   ├───📄 Layout.tsx
│   │   ├───📄 LoginButton.tsx
│   │   ├───📄 Logo.tsx
│   │   └───📄 MainMenu.tsx
│   ├───📁 orders/
│   │   ├───📄 CheckoutButton.tsx
│   │   └───📄 OrdersSection.tsx
│   ├───📁 profile/
│   │   ├───📄 FavoriteProducts.tsx
│   │   ├───📄 InputButton.tsx
│   │   ├───📄 NewProfileForm.tsx
│   │   └───📄 ProfileCard.tsx
│   ├───📁 shared/
│   │   ├───📄 AuthenticatedApp.tsx
│   │   ├───📄 Background.tsx
│   │   ├───📄 Spinner.tsx
│   │   └───📄 TokenApp.tsx
│   └───📁 weather/
│       ├───📄 NewRecommendation.tsx
│       └───📄 WeatherSection.tsx
├───📁 lib/
│   ├───📁 recommendation/
│   │   ├───📄 createRecommendation.ts
│   │   └───📄 deleteRecommendation.ts
│   ├───📄 authenticatedFetcher.ts
│   ├───📄 backendAPI.ts
│   ├───📄 formatCurrency.ts
│   ├───📄 profile.repo.ts
│   ├───📄 publicFetcher.ts
│   └───📄 tokenContext.ts
├───📁 pages/
│   ├───📁 info/
│   │   └───📄 index.tsx
│   ├───📁 orders/
│   │   ├───📄 index.tsx
│   │   └───📄 [handle].tsx
│   ├───📁 profile/
│   │   └───📄 index.tsx
│   ├───📁 weather/
│   │   └───📄 index.tsx
│   ├───📄 index.tsx
│   ├───📄 _app.tsx
│   └───📄 _document.tsx
├───📁 public/
│   └───📁 images/
│       ├───📄 cacti_co_favicon.svg
│       ├───📄 cacti_co_logo.svg
│       ├───📄 cacti_co_pet.svg
│       ├───📄 cactus_2.png
│       ├───📄 product_1.png
│       ├───📄 product_10.png
│       ├───📄 product_2.png
│       ├───📄 product_3.png
│       ├───📄 product_4.png
│       ├───📄 product_5.png
│       ├───📄 product_6.png
│       ├───📄 product_7.png
│       ├───📄 product_8.png
│       └───📄 product_9.png
├───📁 styles/
│   └───📄 globals.css
├───📁 types/
│   └───📄 emotion.d.ts
├───📄 .babelrc
├───📄 .gitignore
├───📄 next-env.d.ts
├───📄 package.json
├───📄 postcss.config.js
├───📄 tailwind.config.js
├───📄 tsconfig.json
└───📄 yarn.lock
```

<br>
<br>

## **⊙ Licenses**

---

```
MIT License

Copyright (c) 2022 Juan Pablo Mora Serrano

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
