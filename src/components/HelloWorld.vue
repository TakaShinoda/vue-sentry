<script setup lang="ts"></script>

<template>
  <body class="bg-gray-100">
    <div
      class="container w-full md:max-w-3xl mx-auto flex flex-col min-h-screen"
    >
      <div
        href="/"
        class="flex justify-center p-4 md:p-0 mt-10 md:mt-4"
      >
        <img
          alt="Vue logo"
          src="../assets/logo.png"
        >
      </div>

      <div class="flex-grow">
        <div class="pt-0 pb-5 md:pt-10 md:pb-5 mx-4">
          <form
            action="/search"
            method="GET"
          >
            <div
              class="bg-white flex items-center rounded-lg shadow-md md:shadow-xl"
            >
              <input
                id="search"
                autofocus
                placeholder="Pikachu"
                type="search"
                name="q"
                class="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
              >
              <div class="p-2 md:p-4">
                <button
                  class="rounded-full focus:outline-none w-10 h-12 md:w-10 md:h-12 flex items-center justify-center"
                >
                  <img
                    src="https://github.com/ahampriyanshu/gokemon/raw/master/assets/img/pokeball.png"
                    class="pokeball"
                    alt="pokeball"
                  >
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="text-center mt-4">
          <p class="text-2xl text-gray-600">
            Pikachu
          </p>
          <p class="text-sm text-gray-600 mt-1">
            electric
          </p>
        </div>
        <div class="flex justify-center mt-4">
          <img
            id="btn"
            class="w-24 h-24 rounded-full"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Avatar"
          >
        </div>
        <div
          class="flex pb-5 justify-center flex-row space-x-8 md:space-x-24 mt-3 md:mt-6 text-center"
        >
          <div>
            <p class="text-gray-700 font-bold">
              4
            </p>
            <p class="text-xs mt-2 text-gray-600">
              Height
            </p>
          </div>
          <div>
            <p class="text-gray-700 font-bold">
              112
            </p>
            <p class="text-xs mt-2 text-gray-600">
              Experience
            </p>
          </div>
          <div>
            <p class="text-gray-700 font-bold">
              60
            </p>
            <p class="text-xs mt-2 text-gray-700">
              Weight
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');

body {
  font-family: 'Oswald', sans-serif;
}

.pokeball {
  -webkit-animation-name: spinner;
  animation-name: spinner;
  -webkit-animation-duration: 6s;
  animation-duration: 6s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
}

@-webkit-keyframes spinner {
  83.33% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinner {
  83.33% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

dialog[open] {
  animation: appear 0.15s cubic-bezier(0, 1.8, 1, 1.8);
}

dialog::backdrop {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
  backdrop-filter: blur(3px);
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
