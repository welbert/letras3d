//DESENVOLVIDO POR WELBERT SERRA ---------------------------------------------
var rotationX=1 , rotationY=1, rotationZ=1;
var rotationAngle = 0;//-Math.PI/4; 
var fator = 0.05;
var fatorfloor = 0.33; //MAX 0.33 , pois tem q ir de -1 a 1

var incAnimation = 0;
var typeAnimation = "1";

var geometryMeshFloor;
var geometryMeshLetterA;
var geometryMeshLetterE;
var geometryMeshLetterI;
var geometryMeshLetterO;
var geometryMeshLetterU;
ConstructFloor();
ConstructAllLetter();

var groupLetters = new THREE.Object3D();
var groupAll = new THREE.Object3D();


function DrawLetter(letter){
	//RemoveAllObjectsInScene();
	//geometryMeshFloor.rotateOnAxis(
		//	new THREE.Vector3(rotationX, rotationY, rotationZ).normalize(), rotationAngle);
	//scene.add( geometryMeshFloor );	
	//Render();
	switch (String(letter).toUpperCase()) {
		case "A":
			geometryMeshLetterA.rotateOnAxis(
					new THREE.Vector3(rotationX, rotationY, rotationZ).normalize(), rotationAngle);
			
			scene.add( geometryMeshLetterA );
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "E":
			
			geometryMeshLetterE.rotateOnAxis(
					new THREE.Vector3(rotationX, rotationY, rotationZ).normalize(), rotationAngle); 
			
			geometryMeshLetterE.translateOnAxis(
					new THREE.Vector3(-0.47, -1, 0).normalize(),0.88);			
			

			scene.add( geometryMeshLetterE );
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "I":
			
			geometryMeshLetterI.rotateOnAxis(
					new THREE.Vector3(rotationX, rotationY, rotationZ).normalize(), rotationAngle);
			
			geometryMeshLetterI.translateOnAxis(
					new THREE.Vector3(0, -1, 0).normalize(),0.81);				
			

			scene.add( geometryMeshLetterI );
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "O":
			 
			geometryMeshLetterO.rotateOnAxis(
					new THREE.Vector3(rotationX, rotationY, rotationZ).normalize(), rotationAngle);
			
			geometryMeshLetterO.translateOnAxis(
					new THREE.Vector3(0.5, -1, 0).normalize(),0.9);		
			

			scene.add( geometryMeshLetterO );
			renderer.clear();
			renderer.render(scene, camera);
			break;
			
		case "U":
			
			geometryMeshLetterU.rotateOnAxis(
					new THREE.Vector3(rotationX, rotationY, rotationZ).normalize(), rotationAngle);
			
			geometryMeshLetterU.translateOnAxis(
					new THREE.Vector3(1, -1, 0).normalize(),1.11);
			

			scene.add( geometryMeshLetterU );
			renderer.clear();
			renderer.render(scene, camera);
			break;
		default:
			break;
	}
}

function DrawAllLettersInScene(type){
	incAnimation=-1;
	//Resetar as configurações
	RemoveAllObjectsInScene();
	ConstructAllLetter();
	
	ConstructFloor();		
	
	switch (String(type)) {
		case "1"://normal
			geometryMeshLetterA.position.set(-2.3*fatorfloor,-1.75*fatorfloor,0*fatorfloor);
			geometryMeshLetterE.position.set(-1.1*fatorfloor,-1.67*fatorfloor,0*fatorfloor);
			geometryMeshLetterI.position.set( 0*fatorfloor,  -1.75*fatorfloor,0*fatorfloor);
			geometryMeshLetterO.position.set( 1.1*fatorfloor,-1.67*fatorfloor,0*fatorfloor);
			geometryMeshLetterU.position.set( 2.3*fatorfloor,-1.67*fatorfloor,0*fatorfloor);
			
		break;
			
		case "2"://ciranda
			geometryMeshLetterA.position.set(-1.8*fatorfloor,-1.75*fatorfloor,0*fatorfloor);
			geometryMeshLetterE.position.set(-0.5*fatorfloor,-1.67*fatorfloor,1.5*fatorfloor);
			geometryMeshLetterI.position.set( 1.3*fatorfloor,-1.75*fatorfloor,1.1*fatorfloor);
			geometryMeshLetterO.position.set( 1.3*fatorfloor,-1.67*fatorfloor,-1.1*fatorfloor);
			geometryMeshLetterU.position.set( -0.5*fatorfloor,-1.67*fatorfloor,-1.5*fatorfloor);
		
		break;
		
		case "3": //trem
			geometryMeshLetterA.position.set(-2.3*fatorfloor,-1.75*fatorfloor,0*fatorfloor);
			geometryMeshLetterE.position.set(-1.1*fatorfloor,-1.67*fatorfloor,0*fatorfloor);
			geometryMeshLetterI.position.set( 0*fatorfloor,  -1.75*fatorfloor,0*fatorfloor);
			geometryMeshLetterO.position.set( 1.1*fatorfloor,-1.67*fatorfloor,0*fatorfloor);
			geometryMeshLetterU.position.set( 2.3*fatorfloor,-1.67*fatorfloor,0*fatorfloor);
			
		break;
		default:
			break;
	}
	
	groupLetters = new THREE.Object3D();
	groupAll = new THREE.Object3D();
	
	groupLetters.add(geometryMeshLetterA);
	groupLetters.add(geometryMeshLetterE);
	groupLetters.add(geometryMeshLetterI);
	groupLetters.add(geometryMeshLetterO);
	groupLetters.add(geometryMeshLetterU);
	
	groupAll.add(groupLetters);
	groupAll.add(geometryMeshFloor);
	
	
	scene.add( groupAll );
	
	incAnimation=0;
}

function Animation(){
	if(typeAnimation == "2")
		groupLetters.rotateOnAxis(new THREE.Vector3(0, 1, 0).normalize(), 0.01);
	else if(typeAnimation == "3"){
		groupLetters.translateX(0.01);
		/*
		if((groupLetters.position.x)%1.8 > 0.2)
			geometryMeshLetterU.position.x = -2.7*fatorfloor*(1.3);
		if((groupLetters.position.x)%1.8 > 0.5)
			geometryMeshLetterO.position.x = -2.7*fatorfloor;
		if((groupLetters.position.x)%1.8 > 0.8)
			geometryMeshLetterI.position.x = -2.7*fatorfloor;
		if((groupLetters.position.x)%1.8 > 1.3)
			geometryMeshLetterE.position.x = -2.7*fatorfloor;
		if((groupLetters.position.x)%1.8 > 1.7)
			geometryMeshLetterA.position.x = -2.7*fatorfloor;
		*/
		
		if(groupLetters.position.x > 2)
			groupLetters.position.x = -2;
	}
	
	if(incAnimation>89)
		incAnimation=0;
	
	switch (Math.floor(incAnimation/15)) {
	case 0:
				
		geometryMeshLetterA.scale.x += 0.035;
		
		geometryMeshLetterE.translateX(0.01);

		geometryMeshLetterI.rotateOnAxis(
				new THREE.Vector3(0, 0, 1),-0.105);
		
		geometryMeshLetterO.rotateOnAxis(
				new THREE.Vector3(1, 0, 0),0.1);
		
		
		incAnimation++;
	break;
	
	case 1:
		geometryMeshLetterA.translateY(0.003);
		geometryMeshLetterA.scale.y += 0.035;
		
		geometryMeshLetterE.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),-0.210);
		geometryMeshLetterE.translateX(-0.01);
		
		geometryMeshLetterI.translateX(-0.011);
		
		geometryMeshLetterO.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),-0.1);
		
		geometryMeshLetterU.translateY(0.01);
		geometryMeshLetterU.scale.x += 0.05;
		geometryMeshLetterU.scale.y += 0.05;
		
		incAnimation++;
	break;
	
	case 2:
		geometryMeshLetterA.translateY(-0.003);
		geometryMeshLetterA.scale.y -= 0.035;
		
		geometryMeshLetterE.translateX(-0.01);
		
		geometryMeshLetterO.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),0.1);
		
		geometryMeshLetterU.rotateOnAxis(
				new THREE.Vector3(0, 0, 1),0.105);
		
		incAnimation++;
	break;
	
	case 3:
		geometryMeshLetterA.scale.x -= 0.035;
		
		geometryMeshLetterE.translateX(0.01);
		
		geometryMeshLetterI.rotateOnAxis(
				new THREE.Vector3(0, 0, 1),-0.105);
		
		geometryMeshLetterO.rotateOnAxis(
				new THREE.Vector3(1, 0, 0),-0.1);
		
		
		incAnimation++;
	break;
	
	case 4:
		
		geometryMeshLetterA.scale.x -= 0.035;
		
		geometryMeshLetterE.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),-0.105);
		
		geometryMeshLetterI.translateX(-0.011);
		
		geometryMeshLetterO.translateX(-0.001);
		geometryMeshLetterO.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),-0.1);
		
		geometryMeshLetterU.rotateOnAxis(
				new THREE.Vector3(0, 0, 1),-0.105);
		geometryMeshLetterU.scale.x -= 0.05;
		geometryMeshLetterU.scale.y -= 0.05;
		
		incAnimation++;
	break;
	
	case 5:		
		geometryMeshLetterA.scale.x += 0.035;
		
		geometryMeshLetterE.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),0.105);
		
		geometryMeshLetterO.translateX(0.0011);
		geometryMeshLetterO.rotateOnAxis(
				new THREE.Vector3(0, 1, 0),0.1);
		
		geometryMeshLetterU.translateY(-0.01);
		
		incAnimation++;
	break;

	default:
		break;
	}
	
}


function ConstructFloor() {
	var triangleMaterialFloor = new THREE.MeshBasicMaterial({ 
		color:0x000000, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		});
	var fator = 0.33;
	var geometryFloor = new THREE.Geometry();
	geometryFloor.vertices.push(	
			new THREE.Vector3(  2.95*fatorfloor, -2.25*fatorfloor, 2.95*fatorfloor ),//0
			new THREE.Vector3( -2.95*fatorfloor, -2.25*fatorfloor, 2.95*fatorfloor ),//1
			new THREE.Vector3( -2.95*fatorfloor, -2.25*fatorfloor,-2.95*fatorfloor ),//2
			new THREE.Vector3(  2.95*fatorfloor, -2.25*fatorfloor,-2.95*fatorfloor ),//3
			new THREE.Vector3(  2.95*fatorfloor, -2.05*fatorfloor, 2.95*fatorfloor ),//0
			new THREE.Vector3( -2.95*fatorfloor, -2.05*fatorfloor, 2.95*fatorfloor ),//1
			new THREE.Vector3( -2.95*fatorfloor, -2.05*fatorfloor,-2.95*fatorfloor ),//2
			new THREE.Vector3(  2.95*fatorfloor, -2.05*fatorfloor,-2.95*fatorfloor ))//3
					
	//Plano								
	geometryFloor.faces.push(new THREE.Face3( 0, 1, 2));
	geometryFloor.faces.push(new THREE.Face3( 0, 3, 2));
	geometryFloor.faces.push(new THREE.Face3( 0+4, 1+4, 2+4));
	geometryFloor.faces.push(new THREE.Face3( 0+4, 3+4, 2+4));
	
	//Lados
	geometryFloor.faces.push(new THREE.Face3( 0, 1+4, 0+4));
	geometryFloor.faces.push(new THREE.Face3( 0, 1+4, 1));
	geometryFloor.faces.push(new THREE.Face3( 1, 2+4, 1+4));
	geometryFloor.faces.push(new THREE.Face3( 1, 2+4, 2));
	geometryFloor.faces.push(new THREE.Face3( 2, 3+4, 2+4));
	geometryFloor.faces.push(new THREE.Face3( 2, 3+4, 3));
	geometryFloor.faces.push(new THREE.Face3( 3, 0+4, 3+4));
	geometryFloor.faces.push(new THREE.Face3( 3, 0+4, 0));
	
	geometryMeshFloor = new THREE.Mesh(geometryFloor, triangleMaterialFloor); 
}



function ConstructAllLetter(){

	//LETRA A --------------------------------------------------------------------------------

	var triangleMaterialLetterA = new THREE.MeshBasicMaterial({ 
		color:0xff0000, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		});

	var geometryLetterA = new THREE.Geometry();
	geometryLetterA.vertices.push(	new THREE.Vector3( -2.5*fator,  -2.0*fator, 0.0*fator ),//0
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
	geometryLetterA.faces.push(new THREE.Face3( 9, 0, 7));
	geometryLetterA.faces.push(new THREE.Face3( 1, 0, 7));
	geometryLetterA.faces.push(new THREE.Face3( 4, 5, 8));
	geometryLetterA.faces.push(new THREE.Face3( 6, 5, 8));
	geometryLetterA.faces.push(new THREE.Face3( 2, 3, 10));
	geometryLetterA.faces.push(new THREE.Face3( 11, 3, 10));

	//Frente
	geometryLetterA.faces.push(new THREE.Face3( 9+12, 0+12, 7+12));
	geometryLetterA.faces.push(new THREE.Face3( 1+12, 0+12, 7+12));
	geometryLetterA.faces.push(new THREE.Face3( 4+12, 5+12, 8+12));
	geometryLetterA.faces.push(new THREE.Face3( 6+12, 5+12, 8+12));
	geometryLetterA.faces.push(new THREE.Face3( 2+12, 3+12, 10+12));
	geometryLetterA.faces.push(new THREE.Face3( 11+12, 3+12, 10+12));

	//Lado(Embaixo)
	geometryLetterA.faces.push(new THREE.Face3( 0, 1+12, 1));
	geometryLetterA.faces.push(new THREE.Face3( 0, 1+12, 0+12));
	geometryLetterA.faces.push(new THREE.Face3( 4, 5+12, 5));
	geometryLetterA.faces.push(new THREE.Face3( 4, 5+12, 4+12));
	geometryLetterA.faces.push(new THREE.Face3( 2, 3+12, 3));
	geometryLetterA.faces.push(new THREE.Face3( 2, 3+12, 2+12));

	//Lado(Interno)
	geometryLetterA.faces.push(new THREE.Face3( 10, 7+12, 7));
	geometryLetterA.faces.push(new THREE.Face3( 10, 7+12, 10+12));
	geometryLetterA.faces.push(new THREE.Face3( 11, 8+12, 8));
	geometryLetterA.faces.push(new THREE.Face3( 11, 8+12, 11+12));
	geometryLetterA.faces.push(new THREE.Face3( 11, 10+12, 10));
	geometryLetterA.faces.push(new THREE.Face3( 11, 10+12, 11+12));

	//Lado(Laterais)
	geometryLetterA.faces.push(new THREE.Face3( 0, 9+12, 9));
	geometryLetterA.faces.push(new THREE.Face3( 0, 9+12, 0+12));
	geometryLetterA.faces.push(new THREE.Face3( 5, 6+12, 6));
	geometryLetterA.faces.push(new THREE.Face3( 5, 6+12, 5+12));

	//Lado(Cima)
	geometryLetterA.faces.push(new THREE.Face3( 6, 9+12, 9));
	geometryLetterA.faces.push(new THREE.Face3( 6, 9+12, 6+12));

	geometryMeshLetterA = new THREE.Mesh(geometryLetterA, triangleMaterialLetterA); 

	//----------------------------------------------------------------------------------------
	
	//LETRA E --------------------------------------------------------------------------------
	
	var triangleMaterialLetterE = new THREE.MeshBasicMaterial({ 
		color:0x00ff00, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		});
	var geometryLetterE = new THREE.Geometry();
	geometryLetterE.vertices.push(	new THREE.Vector3( 1.5*fator,  2.5*fator, 0.0*fator ),//0
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
	geometryLetterE.faces.push(new THREE.Face3(0, 1, 13));
	geometryLetterE.faces.push(new THREE.Face3( 1,12 ,13 ));
	geometryLetterE.faces.push(new THREE.Face3( 1, 2, 3));
	geometryLetterE.faces.push(new THREE.Face3( 3, 4, 1));
	geometryLetterE.faces.push(new THREE.Face3( 4, 5, 7));
	geometryLetterE.faces.push(new THREE.Face3( 7, 5, 6));
	geometryLetterE.faces.push(new THREE.Face3( 11, 10, 8));
	geometryLetterE.faces.push(new THREE.Face3( 8, 9, 10));
	
	//Frente
	geometryLetterE.faces.push(new THREE.Face3(0+14, 1+14, 13+14));
	geometryLetterE.faces.push(new THREE.Face3( 1+14,12+14 ,13+14 ));
	geometryLetterE.faces.push(new THREE.Face3( 1+14, 2+14, 3+14));
	geometryLetterE.faces.push(new THREE.Face3( 3+14, 4+14, 1+14));
	geometryLetterE.faces.push(new THREE.Face3( 4+14, 5+14, 7+14));
	geometryLetterE.faces.push(new THREE.Face3( 7+14, 5+14, 6+14));
	geometryLetterE.faces.push(new THREE.Face3( 11+14, 10+14, 8+14));
	geometryLetterE.faces.push(new THREE.Face3( 8+14, 9+14, 10+14));
	
	//Lados(embaixo)
	geometryLetterE.faces.push(new THREE.Face3( 3+14, 5, 5+14));
	geometryLetterE.faces.push(new THREE.Face3( 3+14, 5, 3));
	geometryLetterE.faces.push(new THREE.Face3( 8+14, 9, 9+14));
	geometryLetterE.faces.push(new THREE.Face3( 8+14, 9, 8));
	geometryLetterE.faces.push(new THREE.Face3( 12+14, 13, 13+14));
	geometryLetterE.faces.push(new THREE.Face3( 12+14, 13, 12));
	
	//Lados('costas')
	geometryLetterE.faces.push(new THREE.Face3( 2+14, 3, 3+14));
	geometryLetterE.faces.push(new THREE.Face3( 2+14, 3, 2));
	
	//Lados('frente')
	geometryLetterE.faces.push(new THREE.Face3( 5+14, 6, 6));
	geometryLetterE.faces.push(new THREE.Face3( 5+14, 6, 6+14));
	geometryLetterE.faces.push(new THREE.Face3( 9+14, 10, 9));
	geometryLetterE.faces.push(new THREE.Face3( 9+14, 10, 10+14));
	geometryLetterE.faces.push(new THREE.Face3( 0+14, 13, 0));
	geometryLetterE.faces.push(new THREE.Face3( 0+14, 13, 13+14));
	geometryLetterE.faces.push(new THREE.Face3( 12+14, 11, 12));
	geometryLetterE.faces.push(new THREE.Face3( 12+14, 11, 11+14));
	geometryLetterE.faces.push(new THREE.Face3( 8+14, 7, 8));
	geometryLetterE.faces.push(new THREE.Face3( 8+14, 7, 7+14));
	
	//Lados('cima')
	geometryLetterE.faces.push(new THREE.Face3( 2+14, 0, 2));
	geometryLetterE.faces.push(new THREE.Face3( 2+14, 0, 0+14));
	geometryLetterE.faces.push(new THREE.Face3( 11+14, 10, 10+14));
	geometryLetterE.faces.push(new THREE.Face3( 11+14, 10, 11));
	geometryLetterE.faces.push(new THREE.Face3( 7+14, 6, 6+14));
	geometryLetterE.faces.push(new THREE.Face3( 7+14, 6, 7));
	
	
	geometryMeshLetterE = new THREE.Mesh(geometryLetterE, triangleMaterialLetterE); 
	
	//----------------------------------------------------------------------------------------
	
	//LETRA I --------------------------------------------------------------------------------
	
	var triangleMaterialLetterI = new THREE.MeshBasicMaterial({ 
		color:0x0000ff, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		});
	
	var geometryLetterI = new THREE.Geometry();
	geometryLetterI.vertices.push(	new THREE.Vector3(  -0.5*fator,  2.5*fator, 0.0*fator ), //0
							new THREE.Vector3(   0.5*fator,  2.5*fator, 0.0*fator ),// 1
							new THREE.Vector3(   0.5*fator, -2.0*fator, 0.0*fator ),//2
							new THREE.Vector3(  -0.5*fator, -2.0*fator, 0.0*fator ),//3
							new THREE.Vector3(  -0.5*fator,  2.5*fator, 1.0*fator ),//4
							new THREE.Vector3(   0.5*fator,  2.5*fator, 1.0*fator ),//5
							new THREE.Vector3(   0.5*fator, -2.0*fator, 1.0*fator ),//6
							new THREE.Vector3(  -0.5*fator, -2.0*fator, 1.0*fator )//7
								);
	//Fundo
	geometryLetterI.faces.push(new THREE.Face3(0, 1, 3)); 
	geometryLetterI.faces.push(new THREE.Face3(2, 1, 3)); 
	
	//Frente
	geometryLetterI.faces.push(new THREE.Face3(4, 5, 7)); 
	geometryLetterI.faces.push(new THREE.Face3(6, 5, 7));
	
	//Lado1
	geometryLetterI.faces.push(new THREE.Face3(0, 3, 4)); 
	geometryLetterI.faces.push(new THREE.Face3(4, 7, 3));
	
	//Lado2
	geometryLetterI.faces.push(new THREE.Face3(1, 2, 5)); 
	geometryLetterI.faces.push(new THREE.Face3(5, 6, 2));
	
	//Cima
	geometryLetterI.faces.push(new THREE.Face3(0, 1, 4)); 
	geometryLetterI.faces.push(new THREE.Face3(4, 5, 1));
	
	//Baixo
	geometryLetterI.faces.push(new THREE.Face3(6, 3, 2)); 
	geometryLetterI.faces.push(new THREE.Face3(6, 7, 3));
	
	geometryMeshLetterI = new THREE.Mesh(geometryLetterI, triangleMaterialLetterI); 
	
	//----------------------------------------------------------------------------------------
	
	//LETRA O --------------------------------------------------------------------------------
	
	var triangleMaterialLetterO = new THREE.MeshBasicMaterial({ 
		color:0xffff00, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		});
	var numVertices = 60;
	var raioInterno = 1.2;
	var raioExterno = 2.2;
	var geometryLetterO = new THREE.Geometry();
	var i;
	
	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var xi = raioInterno * Math.cos(i)/1.1;
		var yi = raioInterno * Math.sin(i)*1.2;
		var xe = raioExterno * Math.cos(i)/1.1;
		var ye = raioExterno * Math.sin(i)*1.2;
		
		geometryLetterO.vertices.push(new THREE.Vector3( xi*fator,  yi*fator, 0.0));
		geometryLetterO.vertices.push(new THREE.Vector3( xe*fator,  ye*fator, 0.0));
	}
	for (i = 0 ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var xi = raioInterno * Math.cos(i)/1.1;
		var yi = raioInterno * Math.sin(i)*1.2;
		var xe = raioExterno * Math.cos(i)/1.1;
		var ye = raioExterno * Math.sin(i)*1.2;
		
		geometryLetterO.vertices.push(new THREE.Vector3( xi*fator,  yi*fator, 1.0*fator));
		geometryLetterO.vertices.push(new THREE.Vector3( xe*fator,  ye*fator, 1.0*fator));
	}
	var j;
	//Fundo
	for (j = 0 ; j <= numVertices*2 ; j+=2) {
		geometryLetterO.faces.push(new THREE.Face3(j, j+1, j+3));
		geometryLetterO.faces.push(new THREE.Face3(j+1,j, j+2));
		geometryLetterO.faces.push(new THREE.Face3(j+2, j+1, j+3));
		geometryLetterO.faces.push(new THREE.Face3(j+3,j, j+2));
	}
	
	//Frente
	for (j = numVertices-1 ; j <= (numVertices*2)*2 ; j+=2) {
		geometryLetterO.faces.push(new THREE.Face3(j, j+1, j+3));
		geometryLetterO.faces.push(new THREE.Face3(j+1,j, j+2));
		geometryLetterO.faces.push(new THREE.Face3(j+2, j+1, j+3));
		geometryLetterO.faces.push(new THREE.Face3(j+3,j, j+2));
	}
	
	//Lado (interno = par , externo = impar)
	for (j = 0 ; j <= numVertices*2 ; j+=2) {
		geometryLetterO.faces.push(new THREE.Face3(j+(numVertices*2), j+2, j));
		geometryLetterO.faces.push(new THREE.Face3(j+(numVertices*2), j+2, j+2+(numVertices*2)));
		geometryLetterO.faces.push(new THREE.Face3(j+1+(numVertices*2), j+3, j+1));
		geometryLetterO.faces.push(new THREE.Face3(j+1+(numVertices*2), j+3, j+3+(numVertices*2)));
	}
	
	geometryMeshLetterO = new THREE.Mesh(geometryLetterO, triangleMaterialLetterO);
	
	//----------------------------------------------------------------------------------------
	
	//LETRA U --------------------------------------------------------------------------------
	
	var triangleMaterialLetterU = new THREE.MeshBasicMaterial({ 
		color:0x00ffff, 
		vertexColors:THREE.VertexColors,
		side:THREE.DoubleSide,
		wireframe:false
		});
	
	var numVertices = 60;
	var raioInterno = 1.2;
	var raioExterno = 2.2;
	var geometryLetterU = new THREE.Geometry();
	geometryLetterU.vertices.push(
			new THREE.Vector3( -2.0*fator, -0.5*fator, 0.0*fator ),//0
			new THREE.Vector3( -2.0*fator,  2.5*fator, 0.0*fator ),//1
			new THREE.Vector3( -1.09*fator,  2.5*fator, 0.0*fator ),//2
			new THREE.Vector3( -1.09*fator, -0.5*fator, 0.0*fator ),//3
			new THREE.Vector3(  2.0*fator, -0.5*fator, 0.0*fator ),//4
			new THREE.Vector3(  2.0*fator,  2.5*fator, 0.0*fator ),//5
			new THREE.Vector3(  1.09*fator,  2.5*fator, 0.0*fator ),//6
			new THREE.Vector3(  1.09*fator, -0.5*fator, 0.0*fator ) //7
	);
	geometryLetterU.vertices.push(
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
		
		geometryLetterU.vertices.push(new THREE.Vector3( xi*fator,  (yi-0.5)*fator, 0.0));
		geometryLetterU.vertices.push(new THREE.Vector3( xe*fator,  (ye-0.5)*fator, 0.0));
	}
	
	
	for (i = Math.PI ; i < 2*Math.PI ; i+= (2*Math.PI)/numVertices) {
		var xi = raioInterno * Math.cos(i)/1.1;
		var yi = raioInterno * Math.sin(i)*0.9;
		var xe = raioExterno * Math.cos(i)/1.1;
		var ye = raioExterno * Math.sin(i)*0.9;
		
		geometryLetterU.vertices.push(new THREE.Vector3( xi*fator,  (yi-0.5)*fator, 1.0*fator));
		geometryLetterU.vertices.push(new THREE.Vector3( xe*fator,  (ye-0.5)*fator, 1.0*fator));
	}
	var j;
	var incFrentePernas = 8;
	var incFrenteCurvas = geometryLetterU.vertices.length/2-incFrentePernas;
	
	//FUNDO
	geometryLetterU.faces.push(new THREE.Face3( 0, 2, 1));
	geometryLetterU.faces.push(new THREE.Face3( 0, 2, 3));
	geometryLetterU.faces.push(new THREE.Face3( 4, 6, 5));
	geometryLetterU.faces.push(new THREE.Face3( 4, 6, 7));
	for (j = incFrentePernas*2 ; j <= incFrenteCurvas+(incFrentePernas+4) ; j+=2) {
		geometryLetterU.faces.push(new THREE.Face3(j, j+1, j+3));
		geometryLetterU.faces.push(new THREE.Face3(j+1,j, j+2));
		geometryLetterU.faces.push(new THREE.Face3(j+2, j+1, j+3));
		geometryLetterU.faces.push(new THREE.Face3(j+3,j, j+2));
	}
	
	//FRENTE
	geometryLetterU.faces.push(new THREE.Face3( 0+incFrentePernas, 2+incFrentePernas, 1+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 0+incFrentePernas, 2+incFrentePernas, 3+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 4+incFrentePernas, 6+incFrentePernas, 5+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 4+incFrentePernas, 6+incFrentePernas, 7+incFrentePernas));
	for (j = incFrentePernas*2 ; j <= incFrenteCurvas+(incFrentePernas+4) ; j+=2) {
		geometryLetterU.faces.push(new THREE.Face3(j+incFrenteCurvas, j+1+incFrenteCurvas, j+3+incFrenteCurvas));
		geometryLetterU.faces.push(new THREE.Face3(j+1+incFrenteCurvas,j+incFrenteCurvas, j+2+incFrenteCurvas));
		geometryLetterU.faces.push(new THREE.Face3(j+2+incFrenteCurvas, j+1+incFrenteCurvas, j+3+incFrenteCurvas));
		geometryLetterU.faces.push(new THREE.Face3(j+3+incFrenteCurvas,j+incFrenteCurvas, j+2+incFrenteCurvas));
	}

	//Lado (interno = par , externo = impar)
	for (j = incFrentePernas*2 ; j <= incFrenteCurvas+(incFrentePernas+4) ; j+=2) {				
		geometryLetterU.faces.push(new THREE.Face3(j+(incFrenteCurvas), j+2, j));
		geometryLetterU.faces.push(new THREE.Face3(j+(incFrenteCurvas), j+2, j+2+(incFrenteCurvas)));
		geometryLetterU.faces.push(new THREE.Face3(j+1+(incFrenteCurvas), j+3, j+1));
		geometryLetterU.faces.push(new THREE.Face3(j+1+(incFrenteCurvas), j+3, j+3+(incFrenteCurvas)));
	}
	geometryLetterU.faces.push(new THREE.Face3( 0+incFrentePernas, 1, 0));
	geometryLetterU.faces.push(new THREE.Face3( 0+incFrentePernas, 1, 1+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 2+incFrentePernas, 3, 2));
	geometryLetterU.faces.push(new THREE.Face3( 2+incFrentePernas, 3, 3+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 4+incFrentePernas, 5, 4));
	geometryLetterU.faces.push(new THREE.Face3( 4+incFrentePernas, 5, 5+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 6+incFrentePernas, 7, 6));
	geometryLetterU.faces.push(new THREE.Face3( 6+incFrentePernas, 7, 7+incFrentePernas));
	
	//CIMA
	geometryLetterU.faces.push(new THREE.Face3( 1+incFrentePernas, 2, 1));
	geometryLetterU.faces.push(new THREE.Face3( 1+incFrentePernas, 2, 2+incFrentePernas));
	geometryLetterU.faces.push(new THREE.Face3( 5+incFrentePernas, 6, 5));
	geometryLetterU.faces.push(new THREE.Face3( 5+incFrentePernas, 6, 6+incFrentePernas));
	
	geometryMeshLetterU = new THREE.Mesh(geometryLetterU, triangleMaterialLetterU); 
	
	//----------------------------------------------------------------------------------------
}




function RotationGroup(type){
	switch (String(type)) {
	case "I":
		groupAll.rotateOnAxis(
				new THREE.Vector3(1, 0, 0).normalize(), -0.1);
		
	break;
	case "J":
		groupAll.rotateOnAxis(
				new THREE.Vector3(0, 1, 0).normalize(), -0.1);
		
		break;
	case "K":
		groupAll.rotateOnAxis(
				new THREE.Vector3(1, 0, 0).normalize(), 0.1);
		
		break;
	case "L":
		groupAll.rotateOnAxis(
				new THREE.Vector3(0, 1, 0).normalize(), 0.1);
		
		break;
	case "U":
		groupAll.rotateOnAxis(
				new THREE.Vector3(0, 0, 1).normalize(), 0.1);
		
		break;
	case "O":
		groupAll.rotateOnAxis(
				new THREE.Vector3(0, 0, 1).normalize(), -0.1);
		
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
