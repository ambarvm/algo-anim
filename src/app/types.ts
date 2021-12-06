import { ElementDefinition } from 'cytoscape';

export type AdjacencyList = {
	[key: number]: number[];
};

export type Edge = {
	source: number;
	target: number;
	weight: number;
};

export type GraphData = {
	elements: ElementDefinition[];
	adjacencyList: AdjacencyList;
	vertexCount: number;
	animationType: string;
	edges: Edge[];
	startVertex: number;
};
