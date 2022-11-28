class Node {
  data
  next

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Linkedlist {
  head = null;
  size = 0;


  add(value) {
    if (this.head == null) {
      this.head = new Node(value);
      this.head.next = this.head;
    }else {
      let current = this.head;
      
      while (this.head.data != current.next.data) {
        current = current.next;
      }

      current.next = new Node(value, current.next) 
    }
    this.size++;
  }
  update(older,newer){
    let current = this.head;
    let previous = null;
    
    while (current.data != older) {
      previous = current;
      current = current.next;
    }
    // console.log(current)
    previous.next = new Node(newer, current.next)
    // console.log(current)
  }
  addAt(after,value) {
    let current = this.head;

    while (current.data != after) {
      current = current.next; 
    }
    current.next = new Node(value, current.next);
    this.size++;
  }
  remove(value) {
    let current  = this.head;
    let previous = null;

    while (current.data != value) {
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
    this.size--;
  }
  print(){
    let current = this.head;
    let count = 0;
    
    while (this.size != count) {
      console.log(current.data)
      current = current.next;
      count++
    }
  }
}

const LL = new Linkedlist()

LL.add(100)
LL.add(250)
LL.add(350)
LL.add(400)
LL.update(350,300)
LL.update(250,200)
LL.addAt(200,250)
LL.addAt(300,350)
// LL.remove(250)
// LL.remove(350)
LL.print()