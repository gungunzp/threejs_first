window.onload = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const canvas = document.getElementById('canvas');

  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);

  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setClearColor(0x000000);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 5000);
  camera.position.set(0, 0, 1000);

  const light = new THREE.AmbientLight(0xffffff);
  scene.add(light);

  // const geometry = new THREE.PlaneGeometry(300, 300, 12, 12);
  const geometry = new THREE.SphereGeometry(200, 12, 12);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
  });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const loop = () => {
    // mesh.position.x += 1;
    mesh.rotation.y += Math.PI / 500;

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
