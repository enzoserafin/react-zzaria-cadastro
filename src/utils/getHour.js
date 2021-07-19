function getHour(date) {
  const options = {
    hour: 'numeric',
    minute: 'numeric'
  }
  return Intl.DateTimeFormat('pt-BR', options).format(date)
}

export default getHour
