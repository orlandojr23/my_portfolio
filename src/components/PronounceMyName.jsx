import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function PronounceMyName({ name = 'Orlando' }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePronounce = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying || window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        return;
      }
      
      setIsPlaying(true);
      const utterance = new SpeechSynthesisUtterance(name);
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={handlePronounce}
      title={`Pronounce ${name}`}
      className="inline-flex items-center justify-center p-1 rounded-full text-muted-foreground hover:text-foreground transition-colors"
    >
      {isPlaying ? (
        <VolumeX className="size-4 animate-pulse text-primary" />
      ) : (
        <Volume2 className="size-4 hover:scale-110 transition-transform" />
      )}
    </button>
  );
}
