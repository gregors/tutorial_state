
let count = 0
const increment = () => {
  count++
}

const total = () => count

console.log(total())
increment()
increment()
increment()
increment()
increment()
console.log(total())
