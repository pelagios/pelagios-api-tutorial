$(document).ready(function() {
  
  /**********************************************************************************************/
  /** A quick hack to display toponyms from a Pelagios API document in a 'neighbourhood graph' **/
  /** Licensed under the terms of the WTFPL http://www.wtfpl.net/                              **/
  /**********************************************************************************************/
  
  var nodeMap = {}, edgeMap = {},
  
      getNodes = function() {
        return jQuery.map(nodeMap, function(node, uri) {
          return node;  
        });
      },
      
      getEdges = function() {
        var edgeList = [];
        jQuery.each(edgeMap, function(startNodeLabel, edges) {
          jQuery.each(edges, function(idx, edge) {
            edgeList.push(edge);
          });
        });
        return edgeList;
      },
  
      addEdge = function(startURI, edge) {
        var edgesForStartNode = edgeMap[startURI];
        if (edgesForStartNode) {
          // Add to this node's outbound edges
          edgesForStartNode.push(edge);
        } else {
          // This node does not have any outbound edges yet - create
          edgeMap[startURI] = [ edge ];
        }
      },
  
      /** This is where things happen - we query the API and render the timeline **/
      queryPelagiosAPI = function(itemId, limit) {        
        console.log('Fetching data from API');
    
        jQuery.getJSON('http://pelagios.org/api-v3/items/' + itemId + '/annotations', function(data) {
          var previousNode, nodeIdx = 0; 
          console.log('Got the data - building the graph');
          
          jQuery.each(data.items, function(idx, item) {
            var gazetteerURI = item.place_uri,
                toponym = item.quote,
                thisNode = nodeMap[gazetteerURI];

            if (toponym.trim().length > 0) {
              // If a node for the toponym is not in the list already, we add it
              if (!thisNode) {
                thisNode = { id: nodeIdx, label: toponym, title: gazetteerURI };
                nodeMap[gazetteerURI] = thisNode;
                nodeIdx++;
              }
            
              // The edge between this toponym and the previous one
              if (previousNode) {
                addEdge(previousNode.title, { from: previousNode.id, to: thisNode.id });
              }
            
              previousNode = thisNode;
            }
          });
          
          console.log('Nodes and edges computed - rendering the graph');
          
          new vis.Network(document.getElementById('graph'),
            { nodes: getNodes(), edges: getEdges() },
            { width: '100%', height: '100%', smoothCurves: false, nodes: { fontSize: 11 } });
        });
      };
  
  // For the demo, we'll load the annotations from the Vicarello Beakers
  queryPelagiosAPI('8a629b3dcb66537a5e8c27060ecf68b96fbd6f01468e6a0d53d510d6757f87c2');
  
});