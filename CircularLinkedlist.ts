class Node {
  data;
  next;

  constructor(data,next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head = null;
  first = null;
  size = 0;
  
  add(value) {
    if (this.head == null) {
      this.head = new Node(value);
      this.head.next = this.head;
      this.first = this.head;
      this.size++;
    }else {
      let current = this.head;
      
      while(current.next.data != this.first.data) {
        current = current.next
      }
      current.next = new Node(value, this.head)
      this.size++;
    }
  }
  update (older, newer) {
    let current = this.head;
    let previous = null;
    while(current.data != older) {
        previous = current;
        current = current.next
    }
    previous.next = new Node(newer, current.next)
  }
  delete(value) {
    let current = this.head;
    let previous = null;
    while (current.data != value) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }
  print (type = null) {
    let current = this.head;
    if (type == 'infinite') {
      while (true) {
        console.log(current.data)
        current = current.next;
      }
    }else {
      while (this.size > 0) {
        console.log(current.data)
        current = current.next;
        this.size--
      }
    }
  }
}

const LL = new LinkedList();
LL.add(100);
LL.add(200);
LL.add(300);
LL.add(400);
// LL.update(200,250)
// LL.delete(250)
LL.print('infinite')