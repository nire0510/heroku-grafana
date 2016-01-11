/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","lodash","app/core/utils/kbn"],function(a,b,c,d){function e(a,b){if(!a)return!1;if("/"===a[0]){var c=d.stringToJsRegex(a);return null!=b.match(c)}return a===b}function f(a){return 0===a?.001:a/10}var g=function(){function a(a){this.datapoints=a.datapoints,this.label=a.alias,this.id=a.alias,this.alias=a.alias,this.color=a.color,this.valueFormater=d.valueFormats.none,this.stats={},this.legend=!0}return a.prototype.applySeriesOverrides=function(a){this.lines={},this.points={},this.bars={},this.yaxis=1,this.zindex=0,this.nullPointMode=null,delete this.stack;for(var b=0;b<a.length;b++){var c=a[b];e(c.alias,this.alias)&&(void 0!==c.lines&&(this.lines.show=c.lines),void 0!==c.points&&(this.points.show=c.points),void 0!==c.bars&&(this.bars.show=c.bars),void 0!==c.fill&&(this.lines.fill=f(c.fill)),void 0!==c.stack&&(this.stack=c.stack),void 0!==c.linewidth&&(this.lines.lineWidth=c.linewidth),void 0!==c.nullPointMode&&(this.nullPointMode=c.nullPointMode),void 0!==c.pointradius&&(this.points.radius=c.pointradius),void 0!==c.steppedLine&&(this.lines.steps=c.steppedLine),void 0!==c.zindex&&(this.zindex=c.zindex),void 0!==c.fillBelowTo&&(this.fillBelowTo=c.fillBelowTo),void 0!==c.color&&(this.color=c.color),void 0!==c.transform&&(this.transform=c.transform),void 0!==c.legend&&(this.legend=c.legend),void 0!==c.yaxis&&(this.yaxis=c.yaxis))}},a.prototype.getFlotPairs=function(a){var b=[];this.stats.total=0,this.stats.max=-Number.MAX_VALUE,this.stats.min=Number.MAX_VALUE,this.stats.avg=null,this.stats.current=null,this.allIsNull=!0,this.allIsZero=!0;for(var d,e,f="connected"===a,g="null as zero"===a,h=0,i=0;i<this.datapoints.length;i++){if(e=this.datapoints[i][0],d=this.datapoints[i][1],null===e){if(f)continue;g&&(e=0)}null!==e&&(c.isNumber(e)&&(this.stats.total+=e,this.allIsNull=!1,h++),e>this.stats.max&&(this.stats.max=e),e<this.stats.min&&(this.stats.min=e)),0!=e&&(this.allIsZero=!1),b.push([d,e])}return this.datapoints.length>=2&&(this.stats.timeStep=this.datapoints[1][1]-this.datapoints[0][1]),this.stats.max===-Number.MAX_VALUE&&(this.stats.max=null),this.stats.min===Number.MAX_VALUE&&(this.stats.min=null),b.length&&(this.stats.avg=this.stats.total/h,this.stats.current=b[b.length-1][1],null===this.stats.current&&b.length>1&&(this.stats.current=b[b.length-2][1])),this.stats.count=b.length,b},a.prototype.updateLegendValues=function(a,b,c){this.valueFormater=a,this.decimals=b,this.scaledDecimals=c},a.prototype.formatValue=function(a){return this.valueFormater(a,this.decimals,this.scaledDecimals)},a}();return g});