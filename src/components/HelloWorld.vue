<script setup lang="ts">
import { ref } from 'vue'
// ditto

let name = ref('pikachu')
let types = ref('electric')
let img = ref(
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
)

let height = ref('4')
let experience = ref('112')
let weight = ref('60')

let keyword = ref('')

const format = (types: any) => {
  console.log(types.length)
  // タイプが1つの
  if (types.length === 1) {
    return types[0].type.name
  } else {
    return `${types[0].type.name} / ${types[1].type.name}`
  }
}

const getPoke = async (e: any) => {
  e.preventDefault()
  // console.log(e.target.elements.keyword.value)
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${keyword.value}`)
  const json = await data.json()
  console.log(json)

  // レスポンスをセットする
  name.value = json.name
  types.value = format(json.types)
  img.value = json.sprites.front_default
  height.value = json.height
  experience.value = json.base_experience
  weight.value = json.weight
}
</script>

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
          <form @submit="getPoke">
            <div
              class="bg-white flex items-center rounded-lg shadow-md md:shadow-xl"
            >
              <input
                id="search"
                v-model="keyword"
                autofocus
                placeholder="pikachu"
                type="search"
                name="keyword"
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
            {{ name }}
          </p>
          <p class="text-sm text-gray-600 mt-1">
            {{ types }}
          </p>
        </div>
        <div class="flex justify-center mt-4">
          <img
            id="btn"
            class="w-24 h-24 rounded-full"
            :src="img"
            alt="Avatar"
          >
        </div>
        <div
          class="flex pb-5 justify-center flex-row space-x-8 md:space-x-24 mt-3 md:mt-6 text-center"
        >
          <div>
            <p class="text-gray-700 font-bold">
              {{ height }}
            </p>
            <p class="text-xs mt-2 text-gray-600">
              Height
            </p>
          </div>
          <div>
            <p class="text-gray-700 font-bold">
              {{ experience }}
            </p>
            <p class="text-xs mt-2 text-gray-600">
              Experience
            </p>
          </div>
          <div>
            <p class="text-gray-700 font-bold">
              {{ weight }}
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
</style>
