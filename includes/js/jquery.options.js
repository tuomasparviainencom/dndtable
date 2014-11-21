// 	This program is compiled for the purpose of using a scanned tabletop miniature game map
//	on a large screen that is on a table. Miniatures are used on top of the screen. Maps printed
//	paper would be several square meters. This is a solution on that problem.
//	tuomasparviainen.com/dndtable
//	----------------------------------------------------------------------------------------------
// 	GLOBAL VARIABLES
// 	----------------------------------------------------------------------------------------------
   	var coverpcs = 20; //the amount of covers created
// 	----------------------------------------------------------------------------------------------
// 	HTML Title
// 	Title is extracted from the folder name where index.html is located.
// 	title variable is used to separate localStorage data per folder.
	var url = location.href;
	var folder = url.split( '/' );
	var title = folder[folder.length - 2];
	$( 'title' ).replaceWith('<title>'+title+'</title>');
// 	----------------------------------------------------------------------------------------------
// 	LOOPS
// 	----------------------------------------------------------------------------------------------
// 	Map and cover are created 
// 	----------------------------------------------------------------------------------------------
	$( document ).ready(function() {
		$( 'body' ).append( '<div id="map"></div>' ); 	// placeholder for the draggable map
		$( '#map' ).append( '<img src="map.png" />' );	// map image 
		$('#map').draggable({cursor:'move'});			// make map placeholder draggable
		var i = 1;
		while (i <= coverpcs) {
			$( '#map' ).append( '<div id="cover_'+i+'" class="cover"><div class="resize_icon"></div></div>' );
			$( '#cover_'+i ).resizable({ghost: true});
			$( '#cover_'+i ).draggable( {zIndex:99,cursor:'move',stack:'.cover'});
			i++;}
	});
// 	----------------------------------------------------------------------------------------------
//	PERSISTENCE
// 	----------------------------------------------------------------------------------------------
// 	If localStorage is supported, then use it to load classes and styles on window load.
// 	----------------------------------------------------------------------------------------------
	$( document ).ready(function() {
		if (typeof localStorage !== "undefined") {
			var i = 1;
			while (i <= coverpcs) {
				var styles = localStorage.getItem(title+'_styles_'+i,$('#cover_'+i));		
				$('#cover_'+i).attr('style',localStorage.getItem(title+'_styles_'+i,$('#cover_'+i))) 	
				$( '#cover_'+i ).addClass(localStorage.getItem(title+'_classes_'+i));
				$('#cover_'+i).removeClass('context-menu-active');
				i++;
			}
			var styles_map = localStorage.getItem(title+'_map_styles',$('#map'));		
			$('#map').attr('style',styles_map) 	
			$('#map').addClass(localStorage.getItem(title+'_map_classes'));
			$('#map').removeClass('context-menu-active');
		} else { }	
	});
// 	----------------------------------------------------------------------------------------------
// 	If localStorage is supported, then use it to save classes and styles on window close, refresh etc.
// 	----------------------------------------------------------------------------------------------
	$( window ).unload(function() {
		if (typeof localStorage !== "undefined") {
			var i = 1;
			while (i <= coverpcs) {
				localStorage.setItem(title+'_classes_'+i,$('#cover_'+i).attr('class'));
				localStorage.setItem(title+'_styles_'+i,$('#cover_'+i).attr('style'));
				i++;
			}
			localStorage.setItem(title+'_map_classes',$('#map').attr('class'));
			localStorage.setItem(title+'_map_styles',$('#map').attr('style'));
		} else { }
	});
// 	----------------------------------------------------------------------------------------------
//	MENU
// 	----------------------------------------------------------------------------------------------
//	
	$(function(){
	$.contextMenu({
	selector: '.cover', 
	items: 	{
	
		"fold1": 	{
				"name": "Shapes",
				"items": 	{
						"Round": 	{
								name: "Round", 
								callback: function(key, options) 	{
													$(this).css('border-radius','50%');
													}
								},
						"Rectangular": 	{
								name: "Rectangular", 
								callback: function(key, options) 	{
													$(this).css('border-radius','0%');
													}
								}
						}
				},
		"fold2": 	{
				"name": "Colours",
				"items": 	{
						"Black": 	{
								name: "Black", 
								callback: function(key, options) 	{
													$(this).css('background-color','black');
													}
								},
						"Silver": 	{
								name: "silver", 
								callback: function(key, options) 	{
													$(this).css('background-color','silver');
													}
								},
						"Cornsilk": 	{
								name: "cornsilk", 
								callback: function(key, options) 	{
													$(this).css('background-color','cornsilk');
													}
								},
						"darkred": 	{
								name: "Dark Red", 
								callback: function(key, options) 	{
													$(this).css('background-color','darkred');
													}
								},
						"khaki": 	{
								name: "khaki", 
								callback: function(key, options) 	{
													$(this).css('background-color','khaki');
													}
								},
						"gold": 	{
								name: "Gold", 
								callback: function(key, options) 	{
													$(this).css('background-color','gold');
													}
								},
						"darkcyan": 	{
								name: "Dark cyan", 
								callback: function(key, options) 	{
													$(this).css('background-color','darkcyan');
													}
								}
						}
				},
		
		"fold3": 	{
				"name": "Opacity",
				"items": 	{
						"0opacity": 	{
								name: "Opacity 0%", 
								callback: function(key, options) 	{
													$(this).css('opacity', '0.0');
	
													}
								},
						"20opacity": 	{
								name: "Opacity 20%", 
								callback: function(key, options) 	{
													$(this).css('opacity', '0.2');
	
													}
								},
						"40opacity": 	{
								name: "Opacity 40%", 
								callback: function(key, options) 	{
													$(this).css('opacity', '0.4');
	
													}
								},
						"60opacity": 	{
								name: "Opacity 60%", 
								callback: function(key, options) 	{
													$(this).css('opacity', '0.6');
	
													}
								},
						"80opacity": 	{
								name: "opacity 80%", 
								callback: function(key, options) 	{
													$(this).css('opacity', '0.8');
	
													}
								},
						"100opacity": 	{
								name: "opacity 100%", 
								callback: function(key, options) 	{
													$(this).css('opacity', '1.0');
	
													}
								}
						}
				},
				
		"fold43": 	{
				"name": "Rotation",
				"items": 	{
						"-45degrees": 	{
								name: "-45 degrees", 
								callback: function(key, options) 	{
													$(this).css('transform', 'rotate(-45deg)');
	
													}
								},
						"0degrees": 	{
								name: "0 degrees", 
								callback: function(key, options) 	{
													$(this).css('transform', 'rotate(0deg)');
	
													}
								},
						"45degrees": 	{
								name: "45 degrees", 
								callback: function(key, options) 	{
													$(this).css('transform', 'rotate(45deg)');
	
													}
								}
						}
				},
	
	"lock": {
	name: "Lock", 
	callback: function(key, options) {
	$(this).draggable('disable');
	}
	},
	"free": {
	name: "Free", 
	callback: function(key, options) {
	$(this).draggable('enable');
	}
	},
	"Remove": {
	name: "Remove", 
	callback: function(key, options) {
	$(this).css('display','none');
	}
	},
	
	
	}
	})
	});
$(function(){
	$.contextMenu({
		selector: '#map', 
		items: {
		"fullscreen": {
		name: "Full screen toggle", 
		callback: function(key, options) {
		BigScreen.toggle();
		}
		},
		"lockbackground": {
		name: "Lock background", 
		callback: function(key, options) {
		$('#map').draggable('disable');
		}
		},
		"freebackground": {
		name: "Free background", 
		callback: function(key, options) {
		$('#map').draggable('enable');
		}
		},
		"hideallcovers": {
		name: "Hide all covers", 
		callback: function(key, options) {
		$('.cover').css('display','none');
		}
		},
		"showallcovers": {
		name: "Show all covers", 
		callback: function(key, options) {
		$('.cover').css('display','block');
		}
		}
		}
	})
});