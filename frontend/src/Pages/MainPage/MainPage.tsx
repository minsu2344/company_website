import Contact from './Contact';
import Forum from './Forum';
import Hero from './Hero';

function MainPage() {
  return (
    <div className='space-y-30'>
      <Hero />
      <Forum />
      <Contact />
    </div>
  );
}

export default MainPage;
