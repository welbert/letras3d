//DESENVOLVIDO POR WELBERT SERRA ---------------------------------------------
var fator = 0.33; //(Fiz a tela com -3 a 3, e houve uma mudança para -1 e 1. esse fator foi encontrado por uma regra de 3;
function DrawLetter(letter){
	RemoveAllObjectsInScene();
	switch (String(letter).toUpperCase()) {
		case "A":
			var triangleMaterial = new THREE.MeshBasicMaterial({ 
				color:0xff0000, 
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false
				});
			
			var geometry = new THREE.Geometry();
			geometry.vertices.push(	new THREE.Vector3( -2.5*fator,  -2.0*fator, 0.0*fator ),//0
									new THREE.Vector3( -1.25*fator, -2.0*fator, 0.0*fator ),//1
									new THREE.Vector3( -0.85*fator, -0.75*fator,0.0*fator ),//2
									new THREE.Vector3(  0.85*fator, -0.75*fator,0.0*fator ),//3
									new THREE.Vector3(  1.25*fator, -2.0*fator, 0.0*fator ),//4
									new THREE.Vector3(  2.5*fator,  -2.0*fator, 0.0*fator ),//5
									new THREE.Vector3(  0.5*fator,   2.5*fator, 0.0*fator ),//6
									new THREE.Vector3(  0.25*fator,  2.5*fator, 0.0*fator),//7
									new THREE.Vector3( -0.25*fator,  2.5*fator, 0.0*fator),//8
									new THREE.Vector3( -0.5*fator,   2.5*fator, 0.0*fator ),//9
									
									new THREE.Vector3( -0.75*fator,  0.0*fator, 0.0*fator ),//10
									new THREE.Vector3(  0.75*fator,  0.0*fator, 0.0*fator ),//11
									
									new THREE.Vector3( -2.5*fator,  -2.0*fator, 1.0*fator ),//0
									new THREE.Vector3( -1.25*fator, -2.0*fator, 1.0*fator ),//1
									new THREE.Vector3( -0.85*fator, -0.75*fator,1.0*fator ),//2
									new THREE.Vector3(  0.85*fator, -0.75*fator,1.0*fator ),//3
									new THREE.Vector3(  1.25*fator, -2.0*fator, 1.0*fator ),//4
									new THREE.Vector3(  2.5*fator,  -2.0*fator, 1.0*fator ),//5
									new THREE.Vector3(  0.5*fator,   2.5*fator, 1.0*fator ),//6
									new THREE.Vector3(  0.25*fator,  2.5*fator, 1.0*fator),//7
									new THREE.Vector3( -0.25*fator,  2.5*fator, 1.0*fator),//8
									new THREE.Vector3( -0.5*fator,   2.5*fator, 1.0*fator ),//9
									
									new THREE.Vector3( -0.75*fator, 0.0*fator, 1.0*fator ),//10
									new THREE.Vector3(  0.75*fator, 0.0*fator, 1.0*fator )	//11
										);
			
			//Fundo
			geometry.faces.push(new THREE.Face3( 9, 0, 7));
			geometry.faces.push(new THREE.Face3( 1, 0, 7));
			geometry.faces.push(new THREE.Face3( 4, 5, 8));
			geometry.faces.push(new THREE.Face3( 6, 5, 8));
			geometry.faces.push(new THREE.Face3( 2, 3, 10));
			geometry.faces.push(new THREE.Face3( 11, 3, 10));
			
			//Frente
			geometry.faces.push(new THREE.Face3( 9+12, 0+12, 7+12));
			geometry.faces.push(new THREE.Face3( 1+12, 0+12, 7+12));
			geometry.faces.push(new THREE.Face3( 4+12, 5+12, 8+12));
			geometry.faces.push(new THREE.Face3( 6+12, 5+12, 8+12));
			geometry.faces.push(new THREE.Face3( 2+12, 3+12, 10+12));
			geometry.faces.push(new THREE.Face3( 11+12, 3+12, 10+12));
			
			//Lado(Embaixo)
			geometry.faces.push(new THREE.Face3( 0, 1+12, 1));
			geometry.faces.push(new THREE.Face3( 0, 1+12, 0+12));
			geometry.faces.push(new THREE.Face3( 4, 5+12, 5));
			geometry.faces.push(new THREE.Face3( 4, 5+12, 4+12));
			geometry.faces.push(new THREE.Face3( 2, 3+12, 3));
			geometry.faces.push(new THREE.Face3( 2, 3+12, 2+12));
			
			//Lado(Interno)
			geometry.faces.push(new THREE.Face3( 10, 7+12, 7));
			geometry.faces.push(new THREE.Face3( 10, 7+12, 10+12));
			geometry.faces.push(new THREE.Face3( 11, 8+12, 8));
			geometry.faces.push(new THREE.Face3( 11, 8+12, 11+12));
			geometry.faces.push(new THREE.Face3( 11, 10+12, 10));
			geometry.faces.push(new THREE.Face3( 11, 10+12, 11+12));
			
			//Lado(Laterais)
			geometry.faces.push(new THREE.Face3( 0, 9+12, 9));
			geometry.faces.push(new THREE.Face3( 0, 9+12, 0+12));
			geometry.faces.push(new THREE.Face3( 5, 6+12, 6));
			geometry.faces.push(new THREE.Face3( 5, 6+12, 5+12));
			
			//Lado(Cima)
			geometry.faces.push(new THREE.Face3( 6, 9+12, 9));
			geometry.faces.push(new THREE.Face3( 6, 9+12, 6+12));
			
			var geometryMesh = new THREE.Mesh(geometry, triangleMaterial); 
			geometryMesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/4); 
			scene.add( geometryMesh );	
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "E":
			var triangleMaterial = new THREE.MeshBasicMaterial({ 
				color:0x00ff00, 
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false
				});
			var geometry = new THREE.Geometry();
			geometry.vertices.push(	new THREE.Vector3( 1.5*fator,  2.5*fator, 0.0*fator ),//0
									new THREE.Vector3(-1.0*fator,  2.5*fator, 0.0*fator ),//1 ponto importante
									new THREE.Vector3(-2.0*fator,  2.5*fator, 0.0*fator ),//2									
									new THREE.Vector3(-2.0*fator, -2.5*fator, 0.0*fator ),//3
									new THREE.Vector3(-1.0*fator, -2.5*fator, 0.0*fator ),//4 ponto importante 
									new THREE.Vector3( 1.5*fator, -2.5*fator, 0.0*fator ),//5
									new THREE.Vector3( 1.5*fator, -1.5*fator, 0.0*fator ),//6
									new THREE.Vector3(-1.0*fator, -1.5*fator, 0.0*fator ),//7
									new THREE.Vector3(-1.0*fator, -0.5*fator, 0.0*fator ),//8
									new THREE.Vector3( 1.0*fator, -0.5*fator, 0.0*fator ),//9
									new THREE.Vector3( 1.0*fator,  0.5*fator, 0.0*fator ),//10
									new THREE.Vector3(-1.0*fator,  0.5*fator, 0.0*fator ),//11
									new THREE.Vector3(-1.0*fator,  1.5*fator, 0.0*fator ),//12
									new THREE.Vector3( 1.5*fator,  1.5*fator, 0.0*fator ),//13
									new THREE.Vector3( 1.5*fator,  2.5*fator, 1.0*fator ),//0
									new THREE.Vector3(-1.0*fator,  2.5*fator, 1.0*fator ),//1 ponto importante
									new THREE.Vector3(-2.0*fator,  2.5*fator, 1.0*fator ),//2									
									new THREE.Vector3(-2.0*fator, -2.5*fator, 1.0*fator ),//3
									new THREE.Vector3(-1.0*fator, -2.5*fator, 1.0*fator ),//4 ponto importante 
									new THREE.Vector3( 1.5*fator, -2.5*fator, 1.0*fator ),//5
									new THREE.Vector3( 1.5*fator, -1.5*fator, 1.0*fator ),//6
									new THREE.Vector3(-1.0*fator, -1.5*fator, 1.0*fator ),//7
									new THREE.Vector3(-1.0*fator, -0.5*fator, 1.0*fator ),//8
									new THREE.Vector3( 1.0*fator, -0.5*fator, 1.0*fator ),//9
									new THREE.Vector3( 1.0*fator,  0.5*fator, 1.0*fator ),//10
									new THREE.Vector3(-1.0*fator,  0.5*fator, 1.0*fator ),//11
									new THREE.Vector3(-1.0*fator,  1.5*fator, 1.0*fator ),//12
									new THREE.Vector3( 1.5*fator,  1.5*fator, 1.0*fator )//13
								);
			//Fundo
			geometry.faces.push(new THREE.Face3(0, 1, 13));
			geometry.faces.push(new THREE.Face3( 1,12 ,13 ));
			geometry.faces.push(new THREE.Face3( 1, 2, 3));
			geometry.faces.push(new THREE.Face3( 3, 4, 1));
			geometry.faces.push(new THREE.Face3( 4, 5, 7));
			geometry.faces.push(new THREE.Face3( 7, 5, 6));
			geometry.faces.push(new THREE.Face3( 11, 10, 8));
			geometry.faces.push(new THREE.Face3( 8, 9, 10));
			
			//Frente
			geometry.faces.push(new THREE.Face3(0+14, 1+14, 13+14));
			geometry.faces.push(new THREE.Face3( 1+14,12+14 ,13+14 ));
			geometry.faces.push(new THREE.Face3( 1+14, 2+14, 3+14));
			geometry.faces.push(new THREE.Face3( 3+14, 4+14, 1+14));
			geometry.faces.push(new THREE.Face3( 4+14, 5+14, 7+14));
			geometry.faces.push(new THREE.Face3( 7+14, 5+14, 6+14));
			geometry.faces.push(new THREE.Face3( 11+14, 10+14, 8+14));
			geometry.faces.push(new THREE.Face3( 8+14, 9+14, 10+14));
			
			//Lados(embaixo)
			geometry.faces.push(new THREE.Face3( 3+14, 5, 5+14));
			geometry.faces.push(new THREE.Face3( 3+14, 5, 3));
			geometry.faces.push(new THREE.Face3( 8+14, 9, 9+14));
			geometry.faces.push(new THREE.Face3( 8+14, 9, 8));
			geometry.faces.push(new THREE.Face3( 12+14, 13, 13+14));
			geometry.faces.push(new THREE.Face3( 12+14, 13, 12));
			
			//Lados('costas')
			geometry.faces.push(new THREE.Face3( 2+14, 3, 3+14));
			geometry.faces.push(new THREE.Face3( 2+14, 3, 2));
			
			//Lados('frente')
			geometry.faces.push(new THREE.Face3( 5+14, 6, 6));
			geometry.faces.push(new THREE.Face3( 5+14, 6, 6+14));
			geometry.faces.push(new THREE.Face3( 9+14, 10, 9));
			geometry.faces.push(new THREE.Face3( 9+14, 10, 10+14));
			geometry.faces.push(new THREE.Face3( 0+14, 13, 0));
			geometry.faces.push(new THREE.Face3( 0+14, 13, 13+14));
			geometry.faces.push(new THREE.Face3( 12+14, 11, 12));
			geometry.faces.push(new THREE.Face3( 12+14, 11, 11+14));
			geometry.faces.push(new THREE.Face3( 8+14, 7, 8));
			geometry.faces.push(new THREE.Face3( 8+14, 7, 7+14));
			
			//Lados('cima')
			geometry.faces.push(new THREE.Face3( 2+14, 0, 2));
			geometry.faces.push(new THREE.Face3( 2+14, 0, 0+14));
			geometry.faces.push(new THREE.Face3( 11+14, 10, 10+14));
			geometry.faces.push(new THREE.Face3( 11+14, 10, 11));
			geometry.faces.push(new THREE.Face3( 7+14, 6, 6+14));
			geometry.faces.push(new THREE.Face3( 7+14, 6, 7));
			
			
			
			var geometryMesh = new THREE.Mesh(geometry, triangleMaterial); 
			geometryMesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/4); 
			scene.add( geometryMesh );	
			
			// Global Axis
			//var globalAxis = new THREE.AxisHelper( 3.0 );
			//scene.add( globalAxis );
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "I":
			var triangleMaterial = new THREE.MeshBasicMaterial({ 
				color:0x0000ff, 
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false
				});
			
			var geometry = new THREE.Geometry();
			geometry.vertices.push(	new THREE.Vector3(  -0.5*fator,  2.5*fator, 0.0*fator ), //0
									new THREE.Vector3(   0.5*fator,  2.5*fator, 0.0*fator ),// 1
									new THREE.Vector3(   0.5*fator, -2.0*fator, 0.0*fator ),//2
									new THREE.Vector3(  -0.5*fator, -2.0*fator, 0.0*fator ),//3
									new THREE.Vector3(  -0.5*fator,  2.5*fator, 1.0*fator ),//4
									new THREE.Vector3(   0.5*fator,  2.5*fator, 1.0*fator ),//5
									new THREE.Vector3(   0.5*fator, -2.0*fator, 1.0*fator ),//6
									new THREE.Vector3(  -0.5*fator, -2.0*fator, 1.0*fator )//7
										);
			//Fundo
			geometry.faces.push(new THREE.Face3(0, 1, 3)); 
			geometry.faces.push(new THREE.Face3(2, 1, 3)); 
			
			//Frente
			geometry.faces.push(new THREE.Face3(4, 5, 7)); 
			geometry.faces.push(new THREE.Face3(6, 5, 7));
			
			//Lado1
			geometry.faces.push(new THREE.Face3(0, 3, 4)); 
			geometry.faces.push(new THREE.Face3(4, 7, 3));
			
			//Lado2
			geometry.faces.push(new THREE.Face3(1, 2, 5)); 
			geometry.faces.push(new THREE.Face3(5, 6, 2));
			
			//Cima
			geometry.faces.push(new THREE.Face3(0, 1, 4)); 
			geometry.faces.push(new THREE.Face3(4, 5, 1));
			
			//Baixo
			geometry.faces.push(new THREE.Face3(6, 3, 2)); 
			geometry.faces.push(new THREE.Face3(6, 7, 3));
			
			var geometryMesh = new THREE.Mesh(geometry, triangleMaterial); 
			geometryMesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/10); 
			scene.add( geometryMesh );				
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "O":
			var triangleMaterial = new THREE.MeshBasicMaterial({ 
				color:0xffff00, 
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false
				});
			var numVertices = 60;
			var raioInterno = 1.2;
			var raioExterno = 2.2;
			var geometry = new THREE.Geometry();
			var i;
			
			for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
				var xi = raioInterno * Math.cos(i)/1.1;
				var yi = raioInterno * Math.sin(i)*1.2;
				var xe = raioExterno * Math.cos(i)/1.1;
				var ye = raioExterno * Math.sin(i)*1.2;
				
				geometry.vertices.push(new THREE.Vector3( xi*fator,  yi*fator, 0.0));
				geometry.vertices.push(new THREE.Vector3( xe*fator,  ye*fator, 0.0));
			}
			for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
				var xi = raioInterno * Math.cos(i)/1.1;
				var yi = raioInterno * Math.sin(i)*1.2;
				var xe = raioExterno * Math.cos(i)/1.1;
				var ye = raioExterno * Math.sin(i)*1.2;
				
				geometry.vertices.push(new THREE.Vector3( xi*fator,  yi*fator, 1.0*fator));
				geometry.vertices.push(new THREE.Vector3( xe*fator,  ye*fator, 1.0*fator));
			}
			var j;
			//Fundo
			for (j = 0 ; j <= numVertices*2 ; j+=2) {
				geometry.faces.push(new THREE.Face3(j, j+1, j+3));
				geometry.faces.push(new THREE.Face3(j+1,j, j+2));
				geometry.faces.push(new THREE.Face3(j+2, j+1, j+3));
				geometry.faces.push(new THREE.Face3(j+3,j, j+2));
			}
			
			//Frente
			for (j = numVertices-1 ; j <= (numVertices*2)*2 ; j+=2) {
				geometry.faces.push(new THREE.Face3(j, j+1, j+3));
				geometry.faces.push(new THREE.Face3(j+1,j, j+2));
				geometry.faces.push(new THREE.Face3(j+2, j+1, j+3));
				geometry.faces.push(new THREE.Face3(j+3,j, j+2));
			}
			
			//Lado (interno = par , externo = impar)
			for (j = 0 ; j <= numVertices*2 ; j+=2) {
				geometry.faces.push(new THREE.Face3(j+(numVertices*2), j+2, j));
				geometry.faces.push(new THREE.Face3(j+(numVertices*2), j+2, j+2+(numVertices*2)));
				geometry.faces.push(new THREE.Face3(j+1+(numVertices*2), j+3, j+1));
				geometry.faces.push(new THREE.Face3(j+1+(numVertices*2), j+3, j+3+(numVertices*2)));
			}
			
			var geometryMesh = new THREE.Mesh(geometry, triangleMaterial); 
			geometryMesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/7); 
			scene.add( geometryMesh );		
			
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "U":
			var triangleMaterial = new THREE.MeshBasicMaterial({ 
				color:0x00ffff, 
				vertexColors:THREE.VertexColors,
				side:THREE.DoubleSide,
				wireframe:false
				});
			
			var numVertices = 60;
			var raioInterno = 1.2;
			var raioExterno = 2.2;
			var geometry = new THREE.Geometry();
			geometry.vertices.push(
					new THREE.Vector3( -2.0*fator, -0.5*fator, 0.0*fator ),//0
					new THREE.Vector3( -2.0*fator,  2.5*fator, 0.0*fator ),//1
					new THREE.Vector3( -1.09*fator,  2.5*fator, 0.0*fator ),//2
					new THREE.Vector3( -1.09*fator, -0.5*fator, 0.0*fator ),//3
					new THREE.Vector3(  2.0*fator, -0.5*fator, 0.0*fator ),//4
					new THREE.Vector3(  2.0*fator,  2.5*fator, 0.0*fator ),//5
					new THREE.Vector3(  1.09*fator,  2.5*fator, 0.0*fator ),//6
					new THREE.Vector3(  1.09*fator, -0.5*fator, 0.0*fator ) //7
			);
			geometry.vertices.push(
					new THREE.Vector3( -2.0*fator, -0.5*fator, 1.0*fator ),//0
					new THREE.Vector3( -2.0*fator,  2.5*fator, 1.0*fator ),//1
					new THREE.Vector3( -1.09*fator,  2.5*fator, 1.0*fator ),//2
					new THREE.Vector3( -1.09*fator, -0.5*fator, 1.0*fator ),//3
					new THREE.Vector3(  2.0*fator, -0.5*fator, 1.0*fator ),//4
					new THREE.Vector3(  2.0*fator,  2.5*fator, 1.0*fator ),//5
					new THREE.Vector3(  1.09*fator,  2.5*fator, 1.0*fator ),//6
					new THREE.Vector3(  1.09*fator, -0.5*fator, 1.0*fator ) //7
			);
			
			for (i = Math.PI ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
				var xi = raioInterno * Math.cos(i)/1.1;
				var yi = raioInterno * Math.sin(i)*0.9;
				var xe = raioExterno * Math.cos(i)/1.1;
				var ye = raioExterno * Math.sin(i)*0.9;
				
				geometry.vertices.push(new THREE.Vector3( xi*fator,  (yi-0.5)*fator, 0.0));
				geometry.vertices.push(new THREE.Vector3( xe*fator,  (ye-0.5)*fator, 0.0));
			}
			
			
			for (i = Math.PI ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
				var xi = raioInterno * Math.cos(i)/1.1;
				var yi = raioInterno * Math.sin(i)*0.9;
				var xe = raioExterno * Math.cos(i)/1.1;
				var ye = raioExterno * Math.sin(i)*0.9;
				
				geometry.vertices.push(new THREE.Vector3( xi*fator,  (yi-0.5)*fator, 1.0*fator));
				geometry.vertices.push(new THREE.Vector3( xe*fator,  (ye-0.5)*fator, 1.0*fator));
			}
			var j;
			var incFrentePernas = 8;
			var incFrenteCurvas = geometry.vertices.length/2-incFrentePernas;
			
			//FUNDO
			geometry.faces.push(new THREE.Face3( 0, 2, 1));
			geometry.faces.push(new THREE.Face3( 0, 2, 3));
			geometry.faces.push(new THREE.Face3( 4, 6, 5));
			geometry.faces.push(new THREE.Face3( 4, 6, 7));
			for (j = incFrentePernas*2 ; j <= incFrenteCurvas+(incFrentePernas+4) ; j+=2) {
				geometry.faces.push(new THREE.Face3(j, j+1, j+3));
				geometry.faces.push(new THREE.Face3(j+1,j, j+2));
				geometry.faces.push(new THREE.Face3(j+2, j+1, j+3));
				geometry.faces.push(new THREE.Face3(j+3,j, j+2));
			}
			
			//FRENTE
			geometry.faces.push(new THREE.Face3( 0+incFrentePernas, 2+incFrentePernas, 1+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 0+incFrentePernas, 2+incFrentePernas, 3+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 4+incFrentePernas, 6+incFrentePernas, 5+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 4+incFrentePernas, 6+incFrentePernas, 7+incFrentePernas));
			for (j = incFrentePernas*2 ; j <= incFrenteCurvas+(incFrentePernas+4) ; j+=2) {
				geometry.faces.push(new THREE.Face3(j+incFrenteCurvas, j+1+incFrenteCurvas, j+3+incFrenteCurvas));
				geometry.faces.push(new THREE.Face3(j+1+incFrenteCurvas,j+incFrenteCurvas, j+2+incFrenteCurvas));
				geometry.faces.push(new THREE.Face3(j+2+incFrenteCurvas, j+1+incFrenteCurvas, j+3+incFrenteCurvas));
				geometry.faces.push(new THREE.Face3(j+3+incFrenteCurvas,j+incFrenteCurvas, j+2+incFrenteCurvas));
			}

			//Lado (interno = par , externo = impar)
			for (j = incFrentePernas*2 ; j <= incFrenteCurvas+(incFrentePernas+4) ; j+=2) {				
				geometry.faces.push(new THREE.Face3(j+(incFrenteCurvas), j+2, j));
				geometry.faces.push(new THREE.Face3(j+(incFrenteCurvas), j+2, j+2+(incFrenteCurvas)));
				geometry.faces.push(new THREE.Face3(j+1+(incFrenteCurvas), j+3, j+1));
				geometry.faces.push(new THREE.Face3(j+1+(incFrenteCurvas), j+3, j+3+(incFrenteCurvas)));
			}
			geometry.faces.push(new THREE.Face3( 0+incFrentePernas, 1, 0));
			geometry.faces.push(new THREE.Face3( 0+incFrentePernas, 1, 1+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 2+incFrentePernas, 3, 2));
			geometry.faces.push(new THREE.Face3( 2+incFrentePernas, 3, 3+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 4+incFrentePernas, 5, 4));
			geometry.faces.push(new THREE.Face3( 4+incFrentePernas, 5, 5+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 6+incFrentePernas, 7, 6));
			geometry.faces.push(new THREE.Face3( 6+incFrentePernas, 7, 7+incFrentePernas));
			
			//CIMA
			geometry.faces.push(new THREE.Face3( 1+incFrentePernas, 2, 1));
			geometry.faces.push(new THREE.Face3( 1+incFrentePernas, 2, 2+incFrentePernas));
			geometry.faces.push(new THREE.Face3( 5+incFrentePernas, 6, 5));
			geometry.faces.push(new THREE.Face3( 5+incFrentePernas, 6, 6+incFrentePernas));
			
			var geometryMesh = new THREE.Mesh(geometry, triangleMaterial); 
			geometryMesh.rotateOnAxis(new THREE.Vector3(1, 1, 1).normalize(), -Math.PI/6); 
			scene.add( geometryMesh );
			
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
