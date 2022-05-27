import debounce from 'lodash.debounce'

const useScroll = () => useState('scroll', () => {

  const handleScroll = () => {
    useScroll().value = window.scrollY
  }
  const handleDebouncedScroll = debounce(handleScroll, 100, { leading: true, trailing: true, maxWait: 100 })
  window.addEventListener('scroll', handleDebouncedScroll)

  return window.scrollY
})

// Directus API
import { Directus } from '@directus/sdk'

const useUrl = () => useState('directusUrl', () => import.meta.env.VITE_DIRECTUS_URL.toString())
const useDirectus = () => useState('directus', () => new Directus(useUrl().value))
const useCollection = (collection) => useState('directusCollection-' + collection, () => useDirectus().value.items(collection))
const useQuery = (collection, query) => useState('directusQuery-' + collection + '-' + JSON.stringify(query), () => useCollection(collection).value.readByQuery(query)).value
const useItems = (collection, limit = 100, page = 1) => useState('directusItems-' + collection + '-' + limit + '-' + page, () => useQuery(collection, {limit, page})).value
const useItem = (collection, id = 1) => useState('directusItem-' + collection + '-' + id, () => useCollection(collection).value.readOne(id)).value

export { useScroll, useUrl, useDirectus, useCollection, useItems, useItem, useQuery }
