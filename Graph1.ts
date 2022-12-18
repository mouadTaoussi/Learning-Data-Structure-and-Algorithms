class Graph {
	adjList = new Map();

	addVertex(v:any): any {
		if (this.adjList.get(v)) return
		this.adjList.set(v,[]);
	}
	addEdge(v:any,d:any): any {
		this.adjList.get(v).push(d)
		this.adjList.get(d).push(d)
	}
	removeVertex(v:any): any {
		const neighbors = this.adjList.get(v)

		for (let neighbor of neighbors) {
			const index = this.adjList.get(neighbor).indexOf(v);
			this.adjList.get(neighbor).splice(index, 1);
		}

		this.adjList.delete(v)
	}
	removeEdge(v:any,d:any){
		this.adjList.get(v).splice(this.adjList.get(v).indexOf(d),1);
		this.adjList.get(d).splice(this.adjList.get(d).indexOf(v),1);
	}
	breathfirstsearch(start:any): any {

	}
	depthfirstsearch(start:any): any {
		
	}
	dfs(): any {

	}
	print(): any {
		const keys = this.adjList.keys();

		for (let key of keys) {

			let current = this.adjList.get(key);
			let conc = '';

			for (let vertex of current) {
				current += " " + vertex
			}
			console.log(current + "=>" + conc)
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

G.print()