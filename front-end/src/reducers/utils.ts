export function updateObject(oldState: any, newValues: any) {
  return { ...oldState, ...newValues }
}

export function calculateResult(message: any) {
  return Math.floor((message.enteredNumber + message.wholeNumber) / 3);
}
