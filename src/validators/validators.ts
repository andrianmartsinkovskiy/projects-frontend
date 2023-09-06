export const requiredField = (value: string | undefined) => {
  if (value) return false
  return "Field is required"
}

const checkLengthCreator = (value: string, ) => {
  if (value.length > 3) return undefined
  return "Min length 3 chapters"
}