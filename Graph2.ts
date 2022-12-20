class Graph {
	adjList = new Map();


	addVertex(v: any) {
 		if (this.adjList.get(v)) return; 
 		this.adjList.set(v,[]);
	}
	addEdge(v: any,d: any) {
		this.adjList.get(v).push(d);
		this.adjList.get(d).push(v);
	}

	removeVertex(v: any) {
		let target = this.adjList.get(v);

		for (let neighbor of target) {

			const index = this.adjList.get(neighbor).indexOf(v);

			this.adjList.get(neighbor).splice(index,1);
		}
		this.adjList.delete(v);
	}
	removeEdge(v: any,d: any) {
		const v_index = this.adjList.get(d).indexOf(v)
		const d_index = this.adjList.get(v).indexOf(d)

		this.adjList.get(v).splice(d_index, 1)
		this.adjList.get(d).splice(v_index, 1)
	}


	depthfirstsearch(start:any){
		this.dfs(start,[])
	}
	dfs(current:any, visitedNode: any){
		
		console.log(current)
		
		visitedNode.push(current)
		
		const vertices = this.adjList.get(current)
		
		for (let vertex of vertices) {
			if (!visitedNode.includes(vertex)) {
				this.dfs(vertex, visitedNode)
			}
		}
	}
	breathfisrtsearch(start:any){
		let queue = [start];
		let visitedNode:any = [];

		while(queue.length > 0) {
			const current = queue.shift();

			console.log(current)

			visitedNode.push(current)

			const vertices = this.adjList.get(current);

			for (let vertex of vertices) {
				if (!visitedNode.includes(vertex)) {
					queue.push(vertex)
				}
			}
		}
	}

	print () {
		const keys = this.adjList.keys()

		for (let key of keys) {
			const vertices = this.adjList.get(key)
			let conc = '';
			for (let vertex of vertices) {
				conc += ' '+vertex
			}
			console.log(key+ "<->"+conc)
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
// G.removeEdge('F','A')
// G.removeVertex('A')

G.print()