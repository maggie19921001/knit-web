<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import "./assets/all.scss";
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,700;1,9..40,700&family=Dancing+Script:wght@400..700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Noto+Sans+TC:wght@100..900&family=Noto+Serif+TC&display=swap');

.dm-sans-regular {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.dm-sans-bold {
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}
//襯線英文
.libre-baskerville-regular {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}

.libre-baskerville-bold {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
}

.libre-baskerville-regular-italic {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: italic;
}
//英文草寫
.dancing-script-regular {
  font-family: "Dancing Script", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

//中文宋體
  .noto-serif-tc-regular {
  font-family: "Noto Serif TC", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

  .noto-sans-tc-regular {
  font-family: "Noto Sans TC", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
