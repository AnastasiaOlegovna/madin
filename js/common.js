$(document).ready(function(){
	$(".head__item_box-nav ul").on("click", "a", function (e) {
		e.preventDefault();
		$(".info-box").find("li").removeClass("active");
		$(this).parent().addClass("active");
		var i = $(this).attr("href"), o = $(i).offset().top - 150;
		$("body,html").animate({scrollTop: o}, 1500)
	});
	// animate elements

	$('.move').on('inview', function(event, isInView) {
		var el = $(this);
		isInView && this.classList.contains('timeout') && setTimeout(function () {el.addClass('end')}, 200);
		isInView && !this.classList.contains('timeout') && el.addClass('end');
		!isInView && el.removeClass('end');
	});
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('.skrolltop').fadeIn();
			} else {
				$('.skrolltop').fadeOut();
			}
		});
		$('.skrolltop').click(function() {
			$('body,html').animate({scrollTop:0},700);
		});
	});

	window.addEventListener('click' , function(event) {
		const element = (element, attribute) => {
			for (; element !== document; element = element.parentNode) {
				if (element.hasAttribute(attribute)) {
					return element;
				}
			}
			return null;
		};

		if (!element(event.target, 'data-popup-open') && !element(event.target, 'aria-controls') && !element(event.target, 'aria-label')) {
			$('.remodal-close').click();
		}
	});
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
$(document).on('click', '.remodal__project_pure_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__pure');
	var modal = $('[data-remodal-id=remodal__project_pure]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});
$(document).on('click', '.remodal__project_africa_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__africa');
	var modal = $('[data-remodal-id=remodal__project_africa]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});
$(document).on('click', '.remodal__project_deep-color_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__deep-color');
	var modal = $('[data-remodal-id=remodal__project_deep-color]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});
$(document).on('click', '.remodal__project_elegance_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__elegance');
	var modal = $('[data-remodal-id=remodal__project_elegance]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});
$(document).on('click', '.remodal__project_summer_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__summer');
	var modal = $('[data-remodal-id=remodal__project_summer]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});
$(document).on('click', '.remodal__project_coral_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__coral');
	var modal = $('[data-remodal-id=remodal__project_coral]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});
$(document).on('click', '.remodal__project_purple_btn', function (e) {
	e.preventDefault();
	var currentSider = $('.project__purple');
	var modal = $('[data-remodal-id=remodal__project_purple]').remodal();
	modal.open();
	if(currentSider.length > 0) {
		currentSider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			swipe: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 600,
					settings: {
						dots: false
					}
				},
				{
					breakpoint: 480,
					settings: {
						dots: false
					}
				}
			]
		});
	}
	return false;
});

$(document).on('click', '.remodal__panorama__project_btn', function (e) {
	e.preventDefault();
  const element = (element, attribute) => {
    for (; element !== document; element = element.parentNode) {
      if (element.hasAttribute(attribute)) {
        return element;
      }
    }
    return null;
  };
  var fileName = element(e.target, 'image').getAttribute('image');
  var modal = $('[data-remodal-id=remodal__panorama__project]').remodal();
	modal.open();
// panorama__project_deep-color
	var camera, scene, renderer;
	var isUserInteracting = false,
		onMouseDownMouseX = 0, onMouseDownMouseY = 0,
		lon = 0, onMouseDownLon = 0,
		lat = 0, onMouseDownLat = 0,
		phi = 0, theta = 0;
	init();
	animate();
	function init() {
		var container, mesh;
		container = document.getElementById( 'panorama' );
		while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
		camera.target = new THREE.Vector3( 0, 0, 0 );
		scene = new THREE.Scene();
		var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
		// invert the geometry on the x-axis so that all of the faces point inward
		geometry.scale( - 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( {
      map: new THREE.TextureLoader().load('images/' + fileName)
		} );
		mesh = new THREE.Mesh( geometry, material );
		scene.add( mesh );
		renderer = new THREE.WebGLRenderer();
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		container.appendChild( renderer.domElement );
		document.addEventListener( 'mousedown', onPointerStart, false );
		document.addEventListener( 'mousemove', onPointerMove, false );
		document.addEventListener( 'mouseup', onPointerUp, false );
		document.addEventListener( 'wheel', onDocumentMouseWheel, false );
		document.addEventListener( 'touchstart', onPointerStart, false );
		document.addEventListener( 'touchmove', onPointerMove, false );
		document.addEventListener( 'touchend', onPointerUp, false );
		//
		document.addEventListener( 'dragover', function ( event ) {
			event.preventDefault();
			event.dataTransfer.dropEffect = 'copy';
		}, false );
		document.addEventListener( 'dragenter', function () {
			document.body.style.opacity = 0.5;
		}, false );
		document.addEventListener( 'dragleave', function () {
			document.body.style.opacity = 1;
		}, false );
		document.addEventListener( 'drop', function ( event ) {
			event.preventDefault();
			var reader = new FileReader();
			reader.addEventListener( 'load', function ( event ) {
				material.map.image.src = event.target.result;
				material.map.needsUpdate = true;
			}, false );
			reader.readAsDataURL( event.dataTransfer.files[ 0 ] );
			document.body.style.opacity = 1;
		}, false );
		//
		window.addEventListener( 'resize', onWindowResize, false );
	}
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
	}
	function onPointerStart( event ) {
		isUserInteracting = true;
		var clientX = event.clientX || event.touches[ 0 ].clientX;
		var clientY = event.clientY || event.touches[ 0 ].clientY;
		onMouseDownMouseX = clientX;
		onMouseDownMouseY = clientY;
		onMouseDownLon = lon;
		onMouseDownLat = lat;
	}
	function onPointerMove( event ) {
		if ( isUserInteracting === true ) {
			var clientX = event.clientX || event.touches[ 0 ].clientX;
			var clientY = event.clientY || event.touches[ 0 ].clientY;
			lon = ( onMouseDownMouseX - clientX ) * 0.1 + onMouseDownLon;
			lat = ( clientY - onMouseDownMouseY ) * 0.1 + onMouseDownLat;
		}
	}
	function onPointerUp() {
		isUserInteracting = false;
	}
	function onDocumentMouseWheel( event ) {
		var fov = camera.fov + event.deltaY * 0.05;
		camera.fov = THREE.Math.clamp( fov, 10, 75 );
		camera.updateProjectionMatrix();
	}
	function animate() {
		requestAnimationFrame( animate );
		update();
	}
	function update() {
		if ( isUserInteracting === false ) {
			lon += 0.1;
		}
		lat = Math.max( - 85, Math.min( 85, lat ) );
		phi = THREE.Math.degToRad( 90 - lat );
		theta = THREE.Math.degToRad( lon );
		camera.target.x = 500 * Math.sin( phi ) * Math.cos( theta );
		camera.target.y = 500 * Math.cos( phi );
		camera.target.z = 500 * Math.sin( phi ) * Math.sin( theta );
		camera.lookAt( camera.target );
		/*
		// distortion
		camera.position.copy( camera.target ).negate();
		*/
		renderer.render( scene, camera );
	}

});