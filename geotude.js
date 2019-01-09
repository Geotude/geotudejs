function point2geotude(lat, lon) {

  /* Conversion for integer part of lat and lon */
  var glat = 90 - lat; // y-axis
  var glon = lon + 180; // x-axis
  var flat = Math.floor(glat);
  var flon = Math.floor(glon);

  var gt = 500 * flat + flon + 10000; // Level-0 Geotude

  console.log(gt);
  console.log("alpha(lat)="+glat);
  console.log("beta(lon)="+glon);

  /* Conversion for decimal part of lat and lon */
  var pts = glat.toString().length;
  var s = [];

  var major = gt.toString();
  var minor = "";

  /* Push the Geotudes into an array to determine the parts */
  for (var i=0; i < pts ; i++) {
    var slat = glat.toString().substr(i, 1);
    var slon = glon.toString().substr(i, 1);

    // Strip the periods
    if (slat.search(".")!=-1) slat=slat.replace(".","");
    if (slon.search(".")!=-1) slon=slon.replace(".","");

    s.push(slat+slon);
  }

  /* Minor Geotudes concat together */
  for (var i=0; i<s.length; i++) {
    minor+=s[i].toString();
  }

  /* Break the minor geotude every 2 chars */
  var fminor="";
  for (var i=0; i<minor.length; i++) {

    if (i % 2 == 0) {
      fminor+="."+minor[i];
    } else {
      fminor+=minor[i];
    }
  }

  return major+fminor;
}
