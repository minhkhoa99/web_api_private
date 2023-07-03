const { code, crawlLogMessage, message } = require('../constant')
const repository = require('../repository')
const { createResponse } = require('../utils')

const getData = async (req, res)=>{
  try {
    const data = req.body
    // create Set
    const uniqueSet = new Set(data.map(JSON.stringify))
    // convert array
    const uniqueData = Array.from(uniqueSet).map(JSON.parse)
    const isSaveDataSuccess = await repository.insertCrawlCashback(uniqueData)

    if (!isSaveDataSuccess) {
      return await createResponse(res, false, null, code.BAD_REQUEST, crawlLogMessage.save_data_error)
    }
    return await createResponse(res, true, null)
  } catch (error) {
    console.log(error)
    return await createResponse(res, false, null, code.ERROR, message.server_error)
  }
}


module.exports = {
  getData,
}
