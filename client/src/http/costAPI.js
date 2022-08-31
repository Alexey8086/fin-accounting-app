import { $authHost } from "./index"


export const createCost = async (walletId, title, money) => {
  const res = await $authHost.post('api/cost/create', {walletId, title, money})
  return res
}

export const updataCost = async (title, money, costId) => {
  const res = await $authHost.post('api/cost/update', {title, money, id: costId})
  return res
}

export const deleteOneCost = async (costId) => {
  const res = await $authHost.post('api/cost/delete', {id: costId})
  return res
}

export const getAllCosts = async (walletId) => {
  const data = await $authHost.get(`api/cost/getCosts/${walletId}`)
  return data
}

export const deleteAllCosts = async (walletId) => {
  const res = await $authHost.get(`api/cost/deleteAllCosts/${walletId}`)
  return res
}