window.onload = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvas = document.getElementById('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  const ball = {
    positionX: 0,
    // positionX: 1.8,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    // rotationZ: -0.016,
    rotationZ: 0
  };

  const gui = new dat.GUI();
  gui
    .add(ball, 'positionX')
    .min(-5)
    .max(5)
    .step(0.1);
  gui
    .add(ball, 'positionY')
    .min(-5)
    .max(5)
    .step(0.1);
  gui
    .add(ball, 'positionZ')
    .min(-5)
    .max(5)
    .step(0.1);
  gui
    .add(ball, 'rotationX')
    .min(-0.2)
    .max(0.2)
    .step(0.001);
  gui
    .add(ball, 'rotationY')
    .min(-0.2)
    .max(0.2)
    .step(0.001);
  gui
    .add(ball, 'rotationZ')
    .min(-0.2)
    .max(0.2)
    .step(0.001);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setClearColor(0x000000);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
  camera.position.set(100, 0, 1000);

  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  // const geometry = new THREE.PlaneGeometry(300, 300, 12, 12);
  const geometry = new THREE.SphereGeometry(200, 12, 12);
  const material = new THREE.MeshBasicMaterial({
    // wireframe: true,
    color: 0xffffff,
    // color: 0x00ff00,
    vertexColors: THREE.FaceColors
  });

  console.log('geometry: ', geometry);

  for (let i = 0; i < geometry.faces.length; i++) {
    geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
  }

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const loop = () => {
    // mesh.position.x += 1;
    // mesh.rotation.y += Math.PI / 500;
    mesh.position.x += ball.positionX;
    mesh.position.y += ball.positionY;
    mesh.position.z += ball.positionZ;
    mesh.rotation.x += ball.rotationX;
    mesh.rotation.y += ball.rotationY;
    mesh.rotation.z += ball.rotationZ;

    renderer.render(scene, camera);
    requestAnimationFrame(() => loop());
  };

  loop();
};

// window.onresize = () => {
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   canvas.setAttribute('width', width);
//   canvas.setAttribute('height', height);
// };
