const Wallet = require('../models/Wallet')
const Validate = require('../utils/validate')


class WalletController {

  async create (req, res) {
    try {
      const {userId, title, balance} = req.body
      balance?.trim()

      const validateError = Validate.wallet(title, balance)
      if (validateError) return res.json(validateError)

      const user = new Wallet({userId, title, balance})
      await user.save()
      return res.status(200).json({message: 'Новый кошелёк создан'})

    } catch (err) {
        return res.json({message: `Creating wallet error ${err}`})
    }
  }

  async delete (req, res) {
    try {
      const {walletId} = req.body

      await Wallet.deleteOne({ _id: walletId})
      return res.json({message: `Wallet has been deleted`})

    } catch (err) {
      return res.json({message: `Deleting wallet error ${err}`})
    }
  }

  async update (req, res) {
    try {
      const {walletId, title, balance} = req.body
      balance?.trim()

      const validateError = Validate.wallet(title, balance)
      if (validateError) return res.json(validateError)

      await Wallet.updateOne({ _id: walletId }, { title,  balance})
      return res.json({message: `Wallet has been updated`})
    } catch (err) {
        return res.json({message: `Updating wallet error ${err}`})
    }
  }

  async getWallets (req, res) {
    try {
      const { userId } = req.params

      const DATA = await Wallet.find({ userId }).exec()

      return res.json(DATA)
    } catch (error) {
      return res.json({message: `Getting wallets error ${error}`})
    }
  }

}

module.exports = new WalletController()