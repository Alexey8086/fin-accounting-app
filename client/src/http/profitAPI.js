import { $authHost } from "./index"


export const createProfit = async (walletId, title, money) => {
  const res = await $authHost.post('api/profit/create', {walletId, title, money})
  return res
}

export const updataProfit = async (title, money, profitId) => {
  const res = await $authHost.post('api/profit/update', {title, money, id: profitId})
  return res
}

export const deleteOneProfit = async (profitId) => {
  const res = await $authHost.post('api/profit/delete', {id: profitId})
  return res
}

export const getAllProfits = async (walletId) => {
  const data = await $authHost.get(`api/profit/getProfits/${walletId}`)
  return data
}

export const deleteAllProfits = async (walletId) => {
  const res = await $authHost.get(`api/profit/deleteAllProfits/${walletId}`)
  return res
}