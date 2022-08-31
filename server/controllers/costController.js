const Cost = require('../models/Cost')
const Validate = require('../utils/validate')


class CostController {

  async create (req, res) {
    try {
      const {walletId, title, money} = req.body

      const validateError = Validate.cost(title, money, res)
      if (validateError) return res.json(validateError)

      const cost = new Cost({walletId, title, money})
      await cost.save()
      return res.status(200).json({message: 'Новый расход создан'})

    } catch (error) {
      return res.json({message: `Creating Cost error ${error}`})
    }
  }

  async delete (req, res) {
    try {
      const {id} = req.body

      await Cost.deleteOne({ _id: id})
      return res.status(200).json({message: `Расход был удален`})

    } catch (error) {
        return res.json({message: `Deleting Cost error ${error}`})
    }
  }

  async update (req, res) {
    try {
      const {id, title, money} = req.body
      money?.trim()

      const validateError = Validate.cost(title, money, res)
      if (validateError) return res.json(validateError)

      await Cost.updateOne({ _id: id }, { title,  money})
      return res.json({message: `Расход обновлен`})

    } catch (error) {
      return res.json({message: `Updating Cost error ${error}`})
    }
  }

  async getCosts (req, res) {
    try {
      const { walletId } = req.params

      const DATA = await Cost.find({ walletId }).exec()

      return res.json(DATA)

    } catch (error) {
      return res.json({message: `Getting costs error ${error}`})
    }
  }

  async deleteAllCosts (req, res) {
    try {
      const { walletId } = req.params

      const response = await Cost.deleteMany({ walletId })

      return res.json(response)
    } catch (error) {
      return res.json({message: `Deleting costs error ${error}`})
    }
  }
}

module.exports = new CostController()