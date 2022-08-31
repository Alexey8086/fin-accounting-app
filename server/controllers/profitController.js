const Profit = require('../models/Profit')
const Validate = require('../utils/validate')


class ProfitController {

  async create (req, res) {
    try {
      const {walletId, title, money} = req.body

      const validateError = Validate.profit(title, money, res)
      if (validateError) return res.json(validateError)

      const profit = new Profit({walletId, title, money})
      await profit.save()
      return res.status(200).json({message: 'Новый доход создан'})

    } catch (error) {
      return res.json({message: `Creating Profit error ${error}`})
    }
  }

  async delete (req, res) {
    try {
      const {id} = req.body

      await Profit.deleteOne({ _id: id})
      return res.status(200).json({message: `Доход был удален`})

    } catch (error) {
      return res.json({message: `Deleting Profit error ${error}`})
    }
  }

  async update (req, res) {
    try {
      const {id, title, money} = req.body
      money?.trim()

      const validateError = Validate.cost(title, money, res)
      if (validateError) return res.json(validateError)

      await Profit.updateOne({ _id: id }, { title,  money})
      return res.json({message: `Доход обновлен`})

    } catch (error) {
      return res.json({message: `Updating Profit error ${error}`})
    }
  }

  async getProfits (req, res) {
    try {
      const { walletId } = req.params

      const DATA = await Profit.find({ walletId }).exec()

      return res.json(DATA)
    } catch (error) {
      return res.json({message: `Getting profits error ${error}`})
    }
  }

  async deleteAllProfits (req, res) {
    try {
      const { walletId } = req.params

      const response = await Profit.deleteMany({ walletId })

      return res.json(response)
    } catch (error) {
      return res.json({message: `Deleting profits error ${error}`})
    }
  }

}

module.exports = new ProfitController()