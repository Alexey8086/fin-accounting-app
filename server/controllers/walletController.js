const Wallet = require('../models/Wallet')
const Validate = require('../utils/validate')


class WalletController {

  async create (req, res) {
    try {
      const {userId, title, balance} = req.body
      balance?.trim()

      Validate.wallet(title, balance, res)

      const user = new Wallet({userId, title, balance})
      await user.save()
      return res.status(200).json({message: 'Новый кошелёк создан'})

    } catch (err) {
        return res.json({message: `Creating wallet error ${err}`})
    }
  }

  async delete (req, res) {
    try {
      const {id} = req.body

      await Wallet.deleteOne({ _id: id})
      return res.json({message: `Wallet has been deleted`})

    } catch (err) {
      return res.json({message: `Deleting wallet error ${err}`})
    }
  }

  async update (req, res) {
    try {
      const {id, title, balance} = req.body
      balance?.trim()

      Validate.wallet(title, balance, res)

      await Wallet.updateOne({ _id: id }, { title,  balance})
      return res.json({message: `Wallet has been updated`})
    } catch (err) {
        return res.json({message: `Updating wallet error ${err}`})
    }
  }

}

module.exports = new WalletController()