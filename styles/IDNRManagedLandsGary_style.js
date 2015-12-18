var size = 0;

var styleCache_IDNRManagedLandsGary={}
var style_IDNRManagedLandsGary = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(105,193,28,1.0)", lineDash: null, width: 2}) , fill: new ol.style.Fill({color: "rgba(105,193,28,.75)"})
    })];
    if ("") {
        var labelText = "";
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_IDNRManagedLandsGary[key]){
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
        styleCache_IDNRManagedLandsGary[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_IDNRManagedLandsGary[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};