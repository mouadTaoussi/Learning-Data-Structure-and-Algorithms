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

G.addEdge('F','A')
G.addEdge('E','A')
G.addEdge('D','A')
// G.addEdge('B','A')
// G.addEdge('A','B')
G.addEdge('C','A')

G.print()