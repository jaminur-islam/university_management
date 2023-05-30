import { User } from './users.model'

const getLastUserId = async (): Promise<string | null> => {
  const lastUserId = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUserId?.id || null
}

const generateIncrementalId = async (): Promise<string> => {
  const lastUserId = (await getLastUserId()) || '0'
  const lastId = (parseInt(lastUserId) + 1).toString().padStart(5, '0')
  return lastId
}

export { generateIncrementalId }
