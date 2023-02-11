const matrix = {
  m11: 0.0, m12: 0.0, m13: 0.0, m14: 0.0,
  m21: 0.0, m22: 0.0, m23: 0.0, m24: 0.0,
  m31: 0.0, m32: 0.0, m33: 0.0, m34: 0.0,
  m41: 0.0, m42: 0.0, m43: -1.0, m44: 0.0,
};

const controllers = {};

let gui;

const guiSetting = {
  reset: resetProjectionMatrix,
}

window.onload = (event) => {
  initProjectionMatrix();
  initGui();
  initControllers();
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  const canvas = document.getElementById("canvas");
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  canvas.appendChild( renderer.domElement );

  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
  };

  animate();
}

function initProjectionMatrix() {
  const n = 0.1;
  const f = 1000.0;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const r = w;
  const l = 0.0;
  const t = 0.0;
  const b = h;
  
  matrix.m11 = (2.0 * n) / (r - l);
  matrix.m21 = 0.0;
  matrix.m31 = 0.0;
  matrix.m41 = 0.0;

  matrix.m12 = 0.0;
  matrix.m22 = (2.0 * n) / (t - b);
  matrix.m32 = 0.0;
  matrix.m42 = 0.0;
  
  matrix.m13 = (r + l) / (r - l);
  matrix.m23 = (t + b) / (t - b);
  matrix.m33 = -(f + n) / (f - n);
  matrix.m43 = 0.0;

  matrix.m14 = 0.0;
  matrix.m24 = 0.0;
  matrix.m34 = -(2.0 * f * n) / (f - n);
  matrix.m44 = 0.0;
}

function resetProjectionMatrix() {
  initProjectionMatrix();
  applyController();
}

function applyController() {
  controllers.m11.setValue(matrix.m11);
  controllers.m21.setValue(matrix.m21);
  controllers.m31.setValue(matrix.m31);
  controllers.m41.setValue(matrix.m41);

  controllers.m12.setValue(matrix.m12);
  controllers.m22.setValue(matrix.m22);
  controllers.m32.setValue(matrix.m32);
  controllers.m42.setValue(matrix.m42);

  controllers.m13.setValue(matrix.m13);
  controllers.m23.setValue(matrix.m23);
  controllers.m33.setValue(matrix.m33);
  controllers.m43.setValue(matrix.m43);

  controllers.m14.setValue(matrix.m14);
  controllers.m24.setValue(matrix.m24);
  controllers.m34.setValue(matrix.m34);
  controllers.m44.setValue(matrix.m44);
}

function initGui() {
  gui = new GUI();

  gui.add( guiSetting, 'reset' );
  
  const colaum1 = gui.addFolder( 'Colaum 1' );
  controllers.m11 = colaum1.add( matrix, 'm11', -10, 10);
  controllers.m21 = colaum1.add( matrix, 'm21', -10, 10);
  controllers.m31 = colaum1.add( matrix, 'm31', -10, 10);
  controllers.m41 = colaum1.add( matrix, 'm41', -10, 10);

  const colaum2 = gui.addFolder( 'Colaum 2' );
  controllers.m12 = colaum2.add( matrix, 'm12', -10, 10);
  controllers.m22 = colaum2.add( matrix, 'm22', -10, 10);
  controllers.m32 = colaum2.add( matrix, 'm32', -10, 10);
  controllers.m42 = colaum2.add( matrix, 'm42', -10, 10);

  const colaum3 = gui.addFolder( 'Colaum 3' );
  controllers.m13 = colaum3.add( matrix, 'm13', -10, 10);
  controllers.m23 = colaum3.add( matrix, 'm23', -10, 10);
  controllers.m33 = colaum3.add( matrix, 'm33', -10, 10);
  controllers.m43 = colaum3.add( matrix, 'm43', -10, 10);

  const colaum4 = gui.addFolder( 'Colaum 4' );
  controllers.m14 = colaum4.add( matrix, 'm14', -10, 10);
  controllers.m24 = colaum4.add( matrix, 'm24', -10, 10);
  controllers.m34 = colaum4.add( matrix, 'm34', -10, 10);
  controllers.m44 = colaum4.add( matrix, 'm44', -10, 10);
}

function initControllers() {
  controllers.m11.onChange((x) => { matrix.m11 = x; });
  controllers.m21.onChange((x) => { matrix.m21 = x; });
  controllers.m31.onChange((x) => { matrix.m31 = x; });
  controllers.m41.onChange((x) => { matrix.m41 = x; });

  controllers.m12.onChange((x) => { matrix.m12 = x; });
  controllers.m22.onChange((x) => { matrix.m22 = x; });
  controllers.m32.onChange((x) => { matrix.m32 = x; });
  controllers.m42.onChange((x) => { matrix.m42 = x; });

  controllers.m13.onChange((x) => { matrix.m13 = x; });
  controllers.m23.onChange((x) => { matrix.m23 = x; });
  controllers.m33.onChange((x) => { matrix.m33 = x; });
  controllers.m43.onChange((x) => { matrix.m43 = x; });

  controllers.m14.onChange((x) => { matrix.m14 = x; });
  controllers.m24.onChange((x) => { matrix.m24 = x; });
  controllers.m34.onChange((x) => { matrix.m34 = x; });
  controllers.m44.onChange((x) => { matrix.m44 = x; });
}
