$(document).ready(function() {
  
  /****************************************************************************************/
  /** A quick hack to display timestamps from Pelagios API search results on a timeline  **/
  /** Licensed under the terms of the WTFPL http://www.wtfpl.net/                        **/
  /****************************************************************************************/
  
  var timelineOptions = {
        width: '100%',
        height: '100%'
      },
  
      /** Shorthand **/
      toDate = function(year) {
        return new Date(year,1,1);
      },
  
      /** This is where things happen - we query the API and render the timeline **/
      queryPelagiosAPI = function(query, limit) {        
        jQuery.getJSON('http://pelagios.org/api-v3/search?query=' + query + '&limit=' + limit + '&type=item&from=-700&to=800', function(data) {
          
          var events = []; // This is where we'll store the event objects for the timeline
          
          // Loop through all result items, and plot the time interval - if the item has one!
          jQuery.each(data.items, function(idx, item) {
            
            if (item.temporal_bounds) {
              
              // This is the data structure the vis.js timeline widget expects
              var event = {
                id: idx,
                content: item.title,
                start: toDate(item.temporal_bounds.start)
              };
              
              // Single timestamp (start == end) or interval?
              if (item.temporal_bounds.end !== item.temporal_bounds.start) {
                event.end = toDate(item.temporal_bounds.end);
              }
              
              events.push(event);
            }
          });
          
          new vis.Timeline(document.getElementById('timeline'), events, timelineOptions);
        });
      };
  
  // For the demo, we'll load the first 100 results for the query 'bronze && coin'
  queryPelagiosAPI('epitaph', 100);
  
});
