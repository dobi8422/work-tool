<template>
  <div>
    <div class="Arem">
      <div>
        <h2>Document</h2>
        <div>
          <a href="https://developer.mozilla.org/zh-CN/" target="_blank">MDN</a>
          <a href="https://javascript.info/" target="_blank">JaveScript</a>
          <a href="https://vuejs.org/" target="_blank">Vue 3</a>
          <a href="https://vitejs.dev/" target="_blank">Vite</a>
          <a href="https://firebase.google.com/docs/build" target="_blank">Firebase</a>
          <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
          <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>
          <a href="https://flutterchina.club/" target="_blank">Flutter</a>
          <a href="https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/288212/" target="_blank">Regex 正規表達式</a>
          <a href="https://willh.gitbook.io/typescript-tutorial/introduction/what-is-typescript" target="_blank">TypeScript</a>
          <a href="https://zh-hant.reactjs.org/" target="_blank">React</a>
        </div>
      </div>

      <div>
        <h2>Teaching website</h2>
        <div>
          <a href="https://www.edx.org/" target="_blank">edx</a>
          <a href="https://www.w3school.com.cn/index.html" target="_blank">w3school中文</a>
          <a href="https://www.w3schools.com/" target="_blank">w3school</a>
          <a href="https://www.coursera.org/" target="_blank">Coursera</a>
        </div>
      </div>
    </div>

    <div class="Arem">
      <div>
        <h2>UI design</h2>
        <div>
          <a href="https://freefrontend.com/" target="_blank">Free Frontend</a>
          <a href="https://loading.io/" target="_blank">Loading.io</a>
          <a href="https://collectui.com/" target="_blank">Collect Ui</a>
          <a href="https://themewagon.com/theme-tag/portfolio-template/" target="_blank">ThemeWagon</a>
        </div>
      </div>

      <div>
        <h2>Icon</h2>
        <div>
          <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
          <a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank">Google icons(download)</a>
          <a href="https://heroicons.com/" target="_blank">Heroicons</a>
          <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>
          <a href="https://www.convertico.com/" target="_blank">Convertico(upload)</a>
          <a href="https://www.aconvert.com/tw/icon/png-to-ico/" target="_blank">png to icon</a>
        </div>
      </div>

      <div>
        <h2>Font</h2>
        <div>
          <a href="https://fonts.google.com/icons?selected=Material+Icons" target="_blank">Google fonts</a>
        </div>
      </div>

      <div>
        <h2>Image</h2>
        <div>
          <a href="https://www.pinterest.com/" target="_blank">Pinterest</a>
          <a href="https://www.freepik.com/" target="_blank">Freepik</a>
          <a href="https://www.pexels.com/zh-tw/" target="_blank">Pexels</a>
          <a href="https://www.iloveimg.com/zh-tw" target="_blank">iLoveimg(edit)</a>
          <a href="https://funtory.tw/generated-photos/" target="_blank">GeneratedPhoto</a>
        </div>
      </div>

      <div>
        <h2>Music</h2>
        <div>
          <a href="https://studio.youtube.com/channel/UCTGCQb60HMSnt0MBI8r0jEw/music" target="_blank">Youtube 音樂庫</a>
          <a href="https://www.motionelements.com/zh-hant/free/background-music" target="_blank">MotionElements</a>
          <a href="https://www.bensound.com/" target="_blank">Bensound</a>
        </div>
      </div>

      <div>
        <h2>Color</h2>
        <div>
          <a href="https://paletton.com/#uid=12H0u0kllllaFw0g0qFqFg0w0aF" target="_blank">Paletton 配色</a>
        </div>
      </div>
    </div>

    <div class="Arem">
      <div>
        <h2>Data</h2>
        <div>
          <a href="https://randomuser.me/" target="_blank">RandomUser</a>
        </div>
      </div>

      <div>
        <h2>Other</h2>
        <div>
          <a href="https://cubic-bezier.com/#.17,.67,.83,.67" target="_blank">cubic-bezier</a>
        </div>
      </div>

      <div>
        <h2>Components</h2>
        <div>
          <a href="https://vuejsexamples.com/" target="_blank">Vue Components</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Arem {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: start;
  font-size: 1.2rem;
  width: 50vw;
  min-width: 30rem;
  max-width: 50rem;
  &:not(:last-child) {
    border-bottom: 1px dashed $text;
  }
  div {
    width: 10rem;
    margin: 2rem;
    h2 {
      margin: 1rem 0;
      color: yellowgreen;
    }
    div {
      margin: 0;
      display: flex;
      flex-flow: column;
      a {
        text-decoration: none;
        width: 100%;
        line-height: 2rem;

        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
          color: yellowgreen;

          overflow: visible;
          text-overflow: clip;
        }
      }
    }
  }
}
</style>
