class Node {
  data;
  next;

  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  head = null;
  size = 0;
  
  add(value) {
    if (this.head == null) {
      this.head = new Node(value);
      this.head.next = this.head;
      this.size++;
    }else {
      let current = this.head;

      while (current.next.data != this.head.data) {
        current = current.next;
      }
      current.next = new Node(value, current.next)
      this.size++;
    }
  }
  addAt(after,value) {
    let current = this.head;

    while (current.data != after) {
      current = current.next;
    }

    current.next = new Node(value, current.next);
    this.size++;
  }
  update(older,newer) {
    let current = this.head;
    let previous = null;
    while (current.data != older) {
      previous = current;
      current = current.next;
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
  }
  print() {
    
    let current = this.head;
    while (this.size != 0) {
      console.log(current.data);
      current = current.next;
      this.size--;
    }
  }
}

const LL = new LinkedList();
LL.add(100);
LL.add(200);
// LL.add(300);
LL.add(400);
LL.addAt(200,350);
LL.update(350, 300)
LL.delete(200)
LL.print()