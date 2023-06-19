<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "sfcPro-bold";
  src: local("sfcPro-bold"),
    url(./fonts/SFProDisplay-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "sfcPro-regular";
  src: local("sfcPro-regular"),
    url(./fonts/SFProDisplay-Regular.ttf) format("truetype");
}

body {
  color: #ffffff;
  background-color: #1e1e1e;
}

#app {
  font-family: "sfcPro-regular", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  width: 1280px;
  @media (max-width: 1080px) {
    width: 840px;
  }
}

.card-component {
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
}
</style>
