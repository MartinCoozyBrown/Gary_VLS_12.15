var size = 0;

var styleCache_GARYTIFDISTRICTSany={}
var style_GARYTIFDISTRICTSany = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(242,242,242,.5)", lineDash: null, width: 1}) , fill: new ol.style.Fill({color: "rgba(255,255,255,.4)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_GARYTIFDISTRICTSany[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_GARYTIFDISTRICTSany[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_GARYTIFDISTRICTSany[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};