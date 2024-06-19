import * as THREE from 'three';
import * as dat from 'lil-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff06 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry1 = new THREE.ConeGeometry( 1,2,3 ); 
const material1 = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(geometry1, material1 ); 
scene.add( cone );
cone.position.x=6;

camera.position.z = 5;

const gui = new dat.GUI()
gui.add(cube.position,'x').min(-3).max(3).step(0.01)
gui.addColor(material,'color')
gui.add(cube,'visible')
gui.add(material,'wireframe')

const gui1 = new dat.GUI()
gui1.add(cone.position,'x').min(-3).max(3).step(0.01)
gui1.addColor(material1,'color')
gui1.add(cone,'visible')
gui1.add(material1,'wireframe')

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}
