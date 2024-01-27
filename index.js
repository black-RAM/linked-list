class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.start = null
  }

  head() {
    return this.start
  }

  tail() {
    let current = this.start
    while(current.next) {
      current = current.next
    }
    return current
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.start
    this.start = newNode
  }

  append(value) {
    const newNode = new Node(value)

    if(!this.start) {
      this.start = newNode
      return
    }
    this.tail().next = newNode
  }

  size() {
    let count = 0
    let current = this.start
    while(current) {
      current = current.next
      count++
    }
    return count
  }

  at(index) {
    let current = this.start
    for (let i = 0; i < this.size(); i++) {
      if(i == index) {
        return current
      }
      current = current.next
    }
    return null
  }

  pop() {
    this.at(this.size() - 2).next = null
  }

  contains(value) {
    let current = this.start
    while(current) {
      if(current.value == value) {
        return true
      }
      current = current.next
    }
    return false
  }

  find(value) {
    if(!this.contains(value)) return null
    
    let current = this.start
    for (let index = 0; index < this.size(); index++) {
      if(current.value == value) return index
      current = current.next
    }
  }

  toString() {
    let stringified = ""
    let current = this.start
    while(current) {
      stringified += `(${current.value}) -> `
      current = current.next
    }
    stringified += "null"
    return stringified
  }
}