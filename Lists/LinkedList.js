// importing the Node.js way
let Node = require('./Node.js')

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    size() {
        return this.size
    }

    isEmpty() {
        return this.size === 0
    }

    // adds an element to the end of the list
    push(data) {
        const newNode = new Node(data)
        
        // empty list case
        if (this.size === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.size++
    }
    
    // removes and returns last items DATA in list
    pop() {
        // Case 1: empty list
        if (this.size === 0) {
            return null
        } 

        // save last node so we can return it later
        const lastNode = this.tail

        // Case 2: With only 1 item in the list, removing a node will
        // cause the head and tail to be null
        if (this.size === 1) {
            this.head = null
            this.tail = null
        }

        // Case 3: items in list > 1, we can just focus on moving the tail over
        else {
            this.tail = this.tail.prev
            this.tail.next = null
            lastNode.prev = null
        }

        this.size--
        return lastNode.data
    }

    // Insert at front of list (head)
    insertFront(data) {
        const newNode = new Node(data)

        // Case 1: empty list
        if (this.size === 0) {
            this.head = newNode
            this.tail - newNode
        } 
        
        // Case 2: non-empty list
        else {
            newNode.next = head
            head.prev = newNode
            head = newNode
        }
    }

    // adds an element at given index.
    // Error thrown if index ! in range [0,size]
    insertAt(data, index) {
        // Case 1: inserting into empty list
        if (index < 0 || index > this.size) {
            throw Error('Inserting at an index that is out of range')
        }

        // Case 2: inserting at head (index 0)
        if (index === 0) {
            insertFront(data)
        }

        // Case 3: inserting at tail (index size-1)
        else if (index === this.size-1) {
            push(data)
        }
        
        // Case 4: inserting not at head nor tail and into a non-empty list
        else {
            // we get the node at index-1 since that one will point to the newNode 
            const preDesiredIndex = this.get(index - 1)
            const newNode = new Node(data)
            
            // newNode.next should point to the current node at desired index
            newNode.next = preDesiredIndex.next

            // the node at the old index-1 position should point to the newnode
            // since it is now at the desired index position
            preDesiredIndex.next = newNode
        
            // make sure to increment size of list
            this.size++
        }
    }

    // returns a node at a given index
    lget(index) {
        // handle out of range indices and empty list case
        if (index < 0 || index >= this.length) {
            return null;
        }
        // if we get here then we have a valid index. Now decide if its faster to
        // traverse starting from the head or the tail
        else {
            const mid = Math.floor(this.size/2)
            if (index <= mid) {
            // Traverse forwards starting at head
                let count = 0 // remember that the range is [0, size)
                let curr = this.head

                while (count < index) {
                    curr = curr.next
                    count += 1
                }
                return curr

             } else {
                // Traverse backwards starting at tail
                let count = this.size - 1 // remember that the range is [0, size)
                let curr = this.tail

                while (count > index) {
                    curr = curr.prev
                }
                return curr
            }
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) {
          return null;
        } else {
          let count = 0;
          let currentNode = this.head;
    
          while (count < index) {
            currentNode = currentNode.next;
            count += 1;
          }
    
          return currentNode;
        }
      }

    // removes element at a given index
    // Error thrown if index ! in range [0,size]
    removeAt(index) {
        // empty
        if (this.size < 0 || this.size <= index) {
            return null
        }
        // 1 item in list
        else if (this.size === 1) {
            this.head = null
            this.tail = null
            this.size--
        } else if (index === 0) {
            this.head = this.head.next
            this.head.prev = null
            this.size--
        } else if (index === this.size - 1) {
            this.tail = this.tail.prev
            this.tail.next = null
            this.size--
        } else {
            const delNodePrev = this.get(index - 1)
            delNodePrev.next = delNodePrev.next.next
            delNodePrev.next.prev = delNodePrev
            this.size--
        }
    }

    // Remove node with given data.
    // returns -1 if not found, otherwise returns data
    removeElement(delData) {
        let curr = this.head
        let index = 0
        while (curr != null) {
            if (curr.data === delData) {
                this.removeAt(index)
            } else {
                index++
            }

        }
    }
    
}

myList = new LinkedList()
myList.push(1)
myList.push(2)
myList.push(3)
myList.push(4)
myList.push(5)

console.log(myList.get(1))
