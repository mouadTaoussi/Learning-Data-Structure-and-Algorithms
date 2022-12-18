class Graph {
  adjList = new Map();

  addVertex(v) {
    if (this.adjList.get(v)) return;
    this.adjList.set(v, [])
  }
  addEdge(v,d) {
    this.adjList.get(v).push(d);
    this.adjList.get(d).push(v);
  }
  removeVertex(v) {
    let neighbors = this.adjList.get(v);

    for (let neighbor of neighbors) {
      let index = this.adjList.get(neighbor).indexOf(v); 
      this.adjList.get(neighbor).splice(index,1);
    }

    this.adjList.delete(v)
  }
  removeEdge(v,d) {
    let v_index = this.adjList.get(d).indexOf(v);
    let d_index = this.adjList.get(v).indexOf(d);

    this.adjList.get(v).splice(d_index,1)
    this.adjList.get(d).splice(v_index,1)
  }
  depthfirstsearch(start){
    let visitedNode = []
    this.dfs(start,visitedNode)
  }
  dfs(current,visitedNode){
    console.log(current)

    visitedNode.push(current)

    let vertices = this.adjList.get(current)

    for (let vertex of vertices) {
      if (!visitedNode.includes(vertex)) this.dfs(vertex,visitedNode)
    }
  }
  breathfirstsearch(start){
    let queue = [start];
    let visitedNode = [];

    while (queue.length > 0){
      const currentVertex = queue.shift();

      console.log(currentVertex)

      visitedNode.push(currentVertex)

      let vertices = this.adjList.get(currentVertex)

      for (let vertex of vertices) {
        // code...
        if (!visitedNode.includes(vertex)) queue.push(vertex)
      }
    }
  }
  print() {
    const keys = this.adjList.keys();
    for (var i of keys) {
      const edges = this.adjList.get(i)
      // console.log(i)
      let conc = '';

      for (let j of edges) {
        // console.log(j)
        conc += ' '+ j
      }
      console.log(i + ' =>'+conc)
    }
  }
}

const G = new Graph();

G.addVertex('A')
G.addVertex('B')
G.addVertex('C')
G.addVertex('D')
G.addVertex('E')
G.addVertex('F')

G.addEdge('B','A')
G.addEdge('C','A')
G.addEdge('D','A')
G.addEdge('E','A')
G.addEdge('F','A')
// G.removeEdge('C','A')
// G.removeVertex('D')

// G.depthfirstsearch('A')
G.breathfirstsearch('A')
// G.print()
