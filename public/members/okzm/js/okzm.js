function mouseOverSlide(){
	var list0Length = 4;
	var list1Length = 3;
	var slide = function(id,slideTo){
		$(id).animate({
			marginLeft:slideTo + 'px',
		},{
			duration:100,
		});
	};
	var mouseOver = function(id){
		$(id).hover(
			function(){slide(id,10);},
			function(){slide(id,0);}
		);
	};
	for(var i=0;i<list0Length;i++){
		mouseOver('#list0_'+i);
	}
	for(var i=0;i<list1Length;i++){
		mouseOver('#list1_'+i);
	}
}
function addLinkParent(){
	addLink('#list0_0','./okzm/okzmtop_test.html');
	addLink('#list0_1','./okzm/okzm_prof.html');
	addLink('#list0_2','./okzm/okzm_link.html');
	addLink('#list0_3','./okzm/okzm_etc.html');
	
	addLink('#list1_0','./okzm/okzm_FMmidi_mp3.html');
	addLink('#list1_1','./okzm/okzm_htsfms_mp3.html');
	addLink('#list1_2','./okzm/okzm_other_mp3.html');
}
function addLink(id,path){
	$(id).click(function(){
		writePage(path);
	});
}
function writePage(path){
	var contentsId = '#contents';
	$(contentsId).load(path);
}
function rotateImg(){
	var i=0;
	setInterval(function(){
		$('#magicCircuitPos').rotate(i);
		i+= 0.02;
		if(i>360){
			i-=360;
		}
	},10);
}