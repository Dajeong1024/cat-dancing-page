import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import useAnimation from './hooks/useAnimation';

export default function App() {
  const { isDancing, mode, speed, toggle, selectMode, changeSpeed } = useAnimation();

  return (
    <main className="app">
      <h1 className="title">🐱 춤추는 고양이 파티 🎵</h1>
      <p className="subtitle">버튼을 눌러 댄스 모드와 속도를 바꿔보세요!</p>

      <DancingCat isDancing={isDancing} mode={mode} speed={speed} />

      <AnimationControls
        isDancing={isDancing}
        mode={mode}
        speed={speed}
        onToggle={toggle}
        onSelectMode={selectMode}
        onChangeSpeed={changeSpeed}
      />
    </main>
  );
}
