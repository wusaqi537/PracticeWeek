<template>
  <div class="model-viewer">
    <canvas ref="canvas"></canvas>
    <div class="loading" v-if="loading">
      <div class="spinner"></div>
      <div class="text">加载中...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const props = defineProps<{
  modelPath: string
}>()

const canvas = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let controls: OrbitControls
let model: THREE.Group | null = null

const init = () => {
  if (!canvas.value) return

  // 创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    75,
    canvas.value.clientWidth / canvas.value.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 5

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true
  })
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  // 添加轨道控制器
  controls = new OrbitControls(camera, canvas.value)
  controls.enableDamping = true
  controls.dampingFactor = 0.05

  // 添加环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 2.0)
  scene.add(ambientLight)

  // 添加主平行光
  const mainLight = new THREE.DirectionalLight(0xffffff, 2.5)
  mainLight.position.set(5, 5, 5)
  scene.add(mainLight)

  // 添加补充平行光（背光）
  const backLight = new THREE.DirectionalLight(0xffffff, 2.0)
  backLight.position.set(-5, 3, -5)
  scene.add(backLight)

  // 添加补充平行光（侧光）
  const sideLight = new THREE.DirectionalLight(0xffffff, 1.5)
  sideLight.position.set(5, -3, -5)
  scene.add(sideLight)

  // 添加底部补光
  const bottomLight = new THREE.DirectionalLight(0xffffff, 1.0)
  bottomLight.position.set(0, -5, 0)
  scene.add(bottomLight)

  // 添加半球光
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2)
  scene.add(hemiLight)

  // 设置渲染器的色调映射
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.2

  // 加载模型
  loadModel()

  // 开始动画循环
  animate()
}

const loadModel = () => {
  loading.value = true
  const loader = new GLTFLoader()

  // 如果存在旧模型，先移除
  if (model) {
    scene.remove(model)
    model = null
  }

  loader.load(
    props.modelPath,
    (gltf: GLTF) => {
      model = gltf.scene
      if (model) {
        scene.add(model)

        // 自动调整相机位置以适应模型大小
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())

        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / Math.tan(fov / 2))

        camera.position.z = cameraZ * 1.5
        camera.updateProjectionMatrix()

        // 将模型居中
        model.position.x = -center.x
        model.position.y = -center.y
        model.position.z = -center.z
      }
      loading.value = false
    },
    (progress: { loaded: number; total: number }) => {
      console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%')
    },
    (error: unknown) => {
      console.error('Error loading model:', error)
      loading.value = false
    }
  )
}

const animate = () => {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

const handleResize = () => {
  if (!canvas.value) return

  camera.aspect = canvas.value.clientWidth / canvas.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight)
}

// 监听模型路径变化
watch(() => props.modelPath, () => {
  loadModel()
})

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (controls) {
    controls.dispose()
  }
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<style lang="scss" scoped>
.model-viewer {
  width: 100%;
  height: 100%;
  position: relative;

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #721b28;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 10px;
    }

    .text {
      font-size: 16px;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>