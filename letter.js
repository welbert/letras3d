function DrawLetter(letter){
	RemoveAllObjectsInScene();
	switch (String(letter).toUpperCase()) {
		case "A":
			var obj =scene.children[1];
			scene.remove(obj);
			var material = new THREE.LineBasicMaterial({color:0xff0000});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(	 new THREE.Vector3( -2.5,  -2.0, 0.0 ),
									new THREE.Vector3( -1.25, -2.0, 0.0 ),
									new THREE.Vector3(  -0.85,  -0.75, 0.0 ),
									new THREE.Vector3(  0.85, -0.75, 0.0 ),
									new THREE.Vector3(  1.25,  -2.0, 0.0 ),
									new THREE.Vector3(  2.5,  -2.0, 0.0 ),
									new THREE.Vector3(  0.5,  2.5, 0.0 ),
									new THREE.Vector3(  -0.5,  2.5, 0.0 ),
									new THREE.Vector3(  -2.5,  -2.0, 0.0 )
										);
			
			
			var line = new THREE.Line(geometry, material);
			scene.add( line );	
			
			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(	 new THREE.Vector3( -0.75,  0.0, 0.0 ),
									new THREE.Vector3( 0.75, 0.0, 0.0 ),
									new THREE.Vector3(  0.0,  2.0, 0.0 ),
									new THREE.Vector3(  -0.75,  0.0, 0.0 )
								);
			var line2 = new THREE.Line(geometry2, material);		
			scene.add( line2 );	
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "E":
			var material = new THREE.LineBasicMaterial({color:0x00ff00});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(	new THREE.Vector3( 1.5,  2.5, 0.0 ),
									new THREE.Vector3(-2.0,  2.5, 0.0 ),
									new THREE.Vector3(-2.0, -2.5, 0.0 ),
									new THREE.Vector3( 1.5, -2.5, 0.0 ),
									new THREE.Vector3( 1.5, -1.5, 0.0 ),
									new THREE.Vector3(-1.0, -1.5, 0.0 ),
									new THREE.Vector3(-1.0, -0.5, 0.0 ),
									new THREE.Vector3( 1.0, -0.5, 0.0 ),
									new THREE.Vector3( 1.0,  0.5, 0.0 ),
									new THREE.Vector3(-1.0,  0.5, 0.0 ),
									new THREE.Vector3(-1.0,  1.5, 0.0 ),
									new THREE.Vector3( 1.5,  1.5, 0.0 ),
									new THREE.Vector3( 1.5,  2.5, 0.0 )
								);
			
			
			var line = new THREE.Line(geometry, material);
			scene.add( line );
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "I":
			var material = new THREE.LineBasicMaterial({color:0x0000ff});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(	 new THREE.Vector3( -0.5,  2.5, 0.0 ),
									new THREE.Vector3( 0.5, 2.5, 0.0 ),
									new THREE.Vector3(  0.5,  -2.0, 0.0 ),
									new THREE.Vector3(  -0.5, -2.0, 0.0 ),
									new THREE.Vector3(  -0.5,  2.5, 0.0 )
										);
			
			
			var line = new THREE.Line(geometry, material);
			scene.add( line );	
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "O":
			var material = new THREE.LineBasicMaterial({color:0xffff00});
			var curve = new THREE.EllipseCurve(
					0,  0,            // ax, aY
					2.0, 2.5,           // xRadius, yRadius
					0,  2 * Math.PI,  // aStartAngle, aEndAngle
					false,            // aClockwise
					0                 // aRotation 
				);

			var path = new THREE.Path( curve.getPoints( 50 ) );
			var geometry = path.createPointsGeometry( 50 );
			var ellipse = new THREE.Line( geometry, material );
			
			scene.add(ellipse);
			
			var curve1 = new THREE.EllipseCurve(
					0,  0,            // ax, aY
					1.0, 1.5,           // xRadius, yRadius
					0,  2 * Math.PI,  // aStartAngle, aEndAngle
					false,            // aClockwise
					0                 // aRotation 
				);

			var path1 = new THREE.Path( curve1.getPoints( 50 ) );
			var geometry1 = path1.createPointsGeometry( 50 );
			var ellipse1 = new THREE.Line( geometry1, material );
			
			scene.add(ellipse1);
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "U":
			var material = new THREE.LineBasicMaterial({color:0x00ffff});
			var geometry = new THREE.Geometry();
			
			geometry.vertices.push(	new THREE.Vector3( -2.0, -0.5, 0.0 ),
									new THREE.Vector3( -2.0,  2.5, 0.0 ),
									new THREE.Vector3( -1.0,  2.5, 0.0 ),
									new THREE.Vector3( -1.0, -0.5, 0.0 )
								);
			
			var line = new THREE.Line(geometry, material);
			scene.add( line );
			
			var geometry2 = new THREE.Geometry();
			geometry2.vertices.push(new THREE.Vector3( 2.0, -0.5, 0.0 ),
									new THREE.Vector3( 2.0,  2.5, 0.0 ),
									new THREE.Vector3( 1.0,  2.5, 0.0 ),
									new THREE.Vector3( 1.0, -0.5, 0.0 )
				);

			var line2 = new THREE.Line(geometry2, material);
			scene.add( line2 );
			
			var curve = new THREE.CubicBezierCurve3(
					new THREE.Vector3( -1.0, -0.5, 0 ),
					new THREE.Vector3( -1.0, -1.5, 0 ),
					new THREE.Vector3(  1.0, -1.5, 0 ),
					new THREE.Vector3(  1.0, -0.5, 0 )
				);

			var geometry3 = new THREE.Geometry();
			geometry3.vertices = curve.getPoints( 50 );
			var curveObject = new THREE.Line( geometry3, material );
			
			scene.add(curveObject);
			
			var curve1 = new THREE.CubicBezierCurve3(
					new THREE.Vector3( -2.0, -0.5, 0 ),
					new THREE.Vector3( -2.0, -2.75, 0 ),
					new THREE.Vector3(  2.0, -2.75, 0 ),
					new THREE.Vector3(  2.0, -0.5, 0 )
				);

				var geometry4 = new THREE.Geometry();
				geometry4.vertices = curve1.getPoints( 50 );
				var curveObject2 = new THREE.Line( geometry4, material );
				
				scene.add(curveObject2);
			
				renderer.clear();
				renderer.render(scene, camera);
			break;
		default:
			break;
	}
}

function RemoveAllObjectsInScene(){
	var obj, i;
	for ( i = scene.children.length - 1; i >= 0 ; i -- ) {
	    obj = scene.children[ i ];
	    if (obj !== camera) {
	        scene.remove(obj);
	    }
	}
}
