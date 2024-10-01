export interface Infos {
  name: string
  description: string
}

export const useWebsiteStore = defineStore('websiteStore', () => {
  const name = ref('')
  const description = ref('')

  const fetch = async () => {
    const infos = await $fetch('https://api.nuxt.com/modules/pinia') as Infos

    name.value = infos.name
    description.value = infos.description
  }

  return {
    name,
    description,

    fetch
  }
})