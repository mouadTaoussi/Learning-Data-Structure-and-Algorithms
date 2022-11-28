class Node {
  data
  next
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  head = null;
  size = 0;
  add(value) {
    if (this.head == null) {
      this.head = new Node(value)
      this.head.next = this.head;
    } else {
      let current = this.head;

      while (this.head.data != current.next.data) {
        current = current.next;
      }
      current.next = new Node(value, current.next)
    }
    this.size++;
  }
  addAt(after, value) {
    let current = this.head;

    while (current.data != after) {
      current = current.next;
    }
    current.next = new Node(value, current.next)
    this.size++
  }
  update(older, newer) {
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
    this.size--;

  }
  print() {
    let current = this.head;
    let count = 0;

    while (count < this.size) {
      console.log(current.data);
      current = current.next;
      count++
    }

  }

}

const LL = new Linkedlist();
LL.add(100);
LL.add(350);
LL.add(550);
LL.addAt(100, 200);
LL.update(350, 300);
LL.delete(550);
LL.add(400);
LL.print();