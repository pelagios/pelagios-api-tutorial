# Pelagios API Developer Examples

These examples illustrate how you can use the [Pelagios API](http://github.com/pelagios/pelagios-api-v3) 
in your own Web mashups and applications. The examples require knowledge of JavaScript, and it helps if you 
have used a Web mapping library before. But otherwise, things should Just Work.

## Running the Examples

If you have a GitHub account, clone this repository. Otherwise, 
[download the whole project as a Zip](https://github.com/pelagios/pelagios-api-tutorial/archive/master.zip),
and unpack at a convenient location. There are two examples in the project:

### Map Example

This example shows how you can use the [search functionality of the Pelagios API](https://github.com/pelagios/pelagios-api-v3/blob/master/README.md#searching-the-api)
to retrieve geographical outlines of objects, and plot them on a map using the [Leaflet](http://leafletjs.com) 
Web mapping library, along with suitable base layer maps developed by the 
[Digital Atlas of the Roman Empire](http://imperium.ahlfeldt.se/) and the 
[Ancient World Mapping Center](http://awmc.unc.edu/wordpress/tiles/map-tile-information).

![Screenshot: Map](screenshots/screenshot-tutorial-map.jpg)

Open the file ``tutorial-map.html`` with your browser to run the example. The relevant code to look at & tweak
is in the file [tutorial-map.js](tutorial-map.js).

### Timeline Example

The second example shows how you can retrieve dated objects from the Pelagios API and
render them on a timeline, using the [vis.js](http://visjs.org/) visualization library.

![Screenshot: Timeline](screenshots/screenshot-tutorial-timeline.png)

Open the file ``tutorial-timeline.html`` with your browser to run the example. Relevant code is 
in the file [tutorial-timeline.js](tutorial-timeline.js).

## What Next?

Here's what you should do next:

1. Try playing around with the features of the Pelagios API. (For example: try plotting the footprints 
of all datasets; improve map popups, so that they link back to the original source of the data; are 
there any datasets you know of you could mash into the map, alongside the Pelagios API?)

2. Try different visualization approaches & tools. (E.g how about visualizing search results in 
[GeoTemCo](https://github.com/stjaenicke/GeoTemCo)?)

3. Come up with something cool? Have more ideas? Let us know!

