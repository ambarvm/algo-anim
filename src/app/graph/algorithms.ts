import { AdjacencyList, Edge } from '../types';

export const bfs = (graph: AdjacencyList, startVertex: number): string[] => {
	const queue = [startVertex];
	const visited: boolean[] = [];
	const path = [];

	visited[startVertex] = true;
	path.push(`${startVertex}`);

	while (queue.length > 0) {
		const vertex = queue.pop() as number;

		graph[vertex].forEach(neighbor => {
			if (!visited[neighbor]) {
				queue.unshift(neighbor);
				path.push(`${vertex}-${neighbor}`);
				path.push(`${neighbor}`);
				visited[neighbor] = true;
			}
		});
	}

	return path;
};

export const dfs = (graph: AdjacencyList, startVertex: number): string[] => {
	const path: string[] = [];
	const visited: boolean[] = [];

	function dfsUtility(currentVertex: number, previousVertex?: number) {
		if (visited[currentVertex]) {
			return;
		}

		visited[currentVertex] = true;
		if (previousVertex) {
			path.push(`${previousVertex}-${currentVertex}`);
		}
		path.push(`${currentVertex}`);

		graph[currentVertex].forEach(neighbor => {
			dfsUtility(neighbor, currentVertex);
		});
	}

	dfsUtility(startVertex);

	return path;
};

export const kruskal = (vertexCount: number, edges: Edge[]): string[] => {
	const sequence = [];
	let count = 0;

	const disjointSet = new DisjointSet();

	for (let i = 1; i <= vertexCount; i++) {
		disjointSet.parents[i] = -1;
	}

	edges.sort((a, b) => a.weight - b.weight);

	for (const edge of edges) {
		if (disjointSet.find(edge.source) === disjointSet.find(edge.target)) {
			continue;
		}
		disjointSet.union(edge.source, edge.target);

		sequence.push(`${edge.source}`);
		sequence.push(`${edge.source}-${edge.target}`);
		sequence.push(`${edge.target}`);

		count++;
		if (count >= vertexCount - 1) {
			break;
		}
	}

	return sequence;
};

class DisjointSet {
	parents: number[] = [];

	find(vertex: number) {
		while (this.parents[vertex] !== -1) {
			if (!this.parents[vertex]) {
				throw new Error('Invalid vertex');
			}
			vertex = this.parents[vertex];
		}
		return vertex;
	}

	union(x: number, y: number) {
		this.parents[this.find(x)] = this.find(y);
	}
}
