class Counter {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
  }

  total() {
    return this.count
  }
}



const counter = new Counter()
console.log(counter.total())
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.total())
