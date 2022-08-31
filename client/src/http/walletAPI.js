import { $authHost } from "./index"


export const createWallet = async (userId, title, balance) => {
  const res = await $authHost.post('api/wallet/create', {userId, title, balance})
  return res
}

export const updataWallet = async (walletId, title, balance) => {
  const res = await $authHost.post('api/wallet/update', {walletId, title, balance})
  return res
}

export const deleteOneWallet = async (walletId) => {
  const res = await $authHost.post('api/wallet/delete', {walletId})
  return res
}

export const getAllWallets = async (userId) => {
  if (!userId) { return false } else {
    const data = await $authHost.get(`api/wallet/getWallets/${userId}`)
    return data
  }

}