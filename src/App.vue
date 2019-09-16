<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
#app {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    overflow: hidden;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
    box-sizing: border-box;
}
/* html {
    font-size: 625%;
  } */

* {
    outline: none;
    box-sizing: border-box;
    user-select: none;
}

body {
    margin: 0;
    color: #fff;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

ul,
li,
dl,
dt,
dd,
p,
div,
h1,
h2,
h3,
h4,
h5,
h6 {
    padding: 0;
    margin: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a,
a:hover {
    text-decoration: none;
}
</style>
