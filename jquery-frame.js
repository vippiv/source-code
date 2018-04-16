/********45行开始，定义变量*****/
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray : function() {},

	get : function(){},

	pushStack : function(){},

	each : function(){},

	map : function(){},

	slice : function(){},

	first : function(){},

	last : function(){},

	eq : function(){},

	end : function(){},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
}

/********175行开始********/
//定义扩展jQuery方法extend，extend也是一个实例方法，只不过是用静态方法指向了实例方法
jQuery.extend = jQuery.fn.extend = function(){

}

/********244行开始*****/
jQuery.extend({
	//expando是内部的一个随机数
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	//抛出错误消息
	error: function( msg ) {
		throw new Error( msg );
	},

	//一个空函数
	noop : function(){},

	//判断对象是不是函数
	isFunction : function(obj){},

	//判断对象是不是数组
	isArray : function(obj){},

	isWindow : function(obj){},

	isNumeric : function(obj){},

	isEmptyObject : function(obj){},

	//判断指定参数是否是一个纯粹的对象，所谓"纯粹的对象"，就是该对象是通过"{}"或"new Object"创建的，http://www.365mini.com/page/jquery_isplainobject.htm
	isPlainObject : function(obj){},

	//输出对象类型的字符串，用于判断是哪种类型的数据
	type : function(obj){},

	globalEval : function(){},

	camelCase : function(){},

	nodeName : function(){},

	each : function(){},

	trim : function(){},

	makeArray : function(){},

	isArray : function(){},

	merge : function(){},

	grep : function(){},

	map : function(){},

	guid : 1,

	proxy : function(){},

	now : function(){},

	support : support
})

/********3387行开始*****/
jQuery.extend({
	Deferred : function(){},
	when : function(){}
});

/********3550行开始*****/
jQuery.extend({
	isReady : false,
	readyWait : 1,
	holdReady : function(){},
	ready : function(){}
});

/********4018行开始*****/
jQuery.extend({
	cache : {},
	noData : {
		//noData只有这三个属性
		//applet，embled不允许添加扩展属性
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		//只有classid是下面这个的flash object可以在其上扩展数据
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},
	hasData : function(){},
	data : function(){},
	removeData : function(){},
	//仅内部使用
	_data : function(ele,name,data){
		return internalData( elem, name, data, true );
	},
	_removedata : function(ele,name){
		return internalRemoveData( elem, name, true );
	}
})

/********4116行开始*****/
jQuery.extend({
	queue : function(){},
	dequeue : function(){},
	_queueHooks : function(){}
});

/********6134行开始*****/
jQuery.extend({
	htmlPreFilter : function(){},
	clone : function(){},
	cleanData : function(){},
});

/********7043行开始*****/
jQuery.extend({
	cssHooks : {},
	cssNumber : {},
	cssProps : {},
	style : function(){},
	css : function(){}
});

/********8266行开始*****/
jQuery.extend({
	valHooks : {
		option : {
			get : function(){}
		},
		select : {
			get : function(){},
			set : function(){}
		}
	}
});

/********8400行开始*****/
jQuery.extend({
	attr : function(){},
	attrHooks : {
		type : {
			set : function(){}
		}
	},
	removeAttr : function(){}
});

/********8677行开始*****/
jQuery.extend({
	prop : function(){},
	propHooks : {
		tabIndex : {
			get : function(){}
		}
	},
	propFix : {
		"for": "htmlFor",
		"class": "className"
	}
});

/********9357行开始*****/
jQuery.extend({
	active : 0,
	lastModified : {},
	etag : {},
	ajaxSettings : {},
	ajaxSetup : function(){},
	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),
	ajax : function(){},
	getJSON : function(){},
	getScript : function(){}
});


// jquery 事件
jQuery.event = {
	//空对象
	global : {},

	add : function(ele,types,handler,data,selector){},
	remove : function(){},
	trigger : function(){},
	dispatch : function(){},
	handlers : function(){},
	fix :  function(){},
	props : [],
	fixHooks : {},
	mouseHooks : {},
	special : {},
	simulate : function(){}
}

//判断使用removeEventListener还是dispatch
jQuery.removeEvent = function(){}

jQuery.Event = function(){}

jQuery.Event.prototype = {}

/***公用函数部分***/

function internalData(elem , name , data ,pvt){
	//该函数仅内部使用，不对外公开
}

//判断当前节点是否允许在其上扩展数据
var acceptData = function(elem){
	//nodeType是1和9的节点才能扩展数据，其中applet，embed不允许扩展数据，只有指定classid的flash object才能扩展数据
}

/***公用函数部分***/