import fs from 'fs'

export const createAndSaveValuesAPI = ({ items }) => {
  const json = JSON.stringify({ items })
  fs.writeFileSync('./public/values.json', json)
}
