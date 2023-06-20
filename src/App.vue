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
  @media (max-width: 1340px) {
    width: 940px;
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
}

.green {
  background-color: #7faa65;
}
.green_blur {
  background: rgba(184, 217, 152, 0.35);
  backdrop-filter: blur(6px);
}

.blue {
  background-color: #4e72d5;
}
.blue_blur {
  background: rgba(59, 79, 181, 0.35);
  backdrop-filter: blur(6px);
}

.red {
  background-color: #d54f4f;
}
.red_blur {
  background: rgba(239, 42, 42, 0.35);
  backdrop-filter: blur(6px);
}

.yellow {
  background-color: #d7d742;
}
.yellow_blur {
  background: rgba(230, 241, 66, 0.35);
  backdrop-filter: blur(6px);
}

.violet {
  background-color: #656caa;
}
.violet_blur {
  background: rgba(116, 129, 237, 0.35);
  backdrop-filter: blur(6px);
}

.orange {
  background-color: #eab35a;
}
.orange_blur {
  background: rgba(237, 221, 116, 0.35);
  backdrop-filter: blur(6px);
}
</style>
