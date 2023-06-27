import { useAtom } from 'jotai';
import { displayAtom } from '@/store/diary';

const useDisplay = () => {
  const [display, setDisplay] = useAtom(displayAtom);

  return [display, setDisplay];
};

export default useDisplay;
