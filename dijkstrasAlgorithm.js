const infinity =  Number.POSITIVE_INFINITY;

const findLowestCostNode = (costs, processed) => {
  let lowestCost = infinity;
  let lowestCostNode = null;
  const nodes = Object.keys(costs);
  nodes.forEach(node => {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  });
  return lowestCostNode;
};

const findlowestPath = (graph, costs, parents) => {
  const processed = [];
  let node = findLowestCostNode(costs, processed);
  while (node !== null) {
    const cost = costs[node];
    const neighbors = graph[node];
    const nodes = Object.keys(neighbors);
    nodes.forEach(n => {
      const newCost = cost + neighbors[n];
      if (costs[n] > newCost) {
        costs[n] = newCost;
        parents[n] = node;
      }
    });
    processed.push(node);
    node = findLowestCostNode(costs, processed);
  }
  return costs.fin;
};

const graph = {
  start: { a: 6, b: 2 },
  a: { fin: 1 },
  b: { a: 3, fin: 5 },
  fin: {}
};

const costs = {
  a: 6,
  b: 2,
  fin: infinity
};

const parents = {
  a: 'start',
  b: 'start',
  fin: null
};

console.log(findlowestPath(graph, costs, parents));