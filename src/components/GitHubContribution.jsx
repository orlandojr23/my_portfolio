import { useState, useMemo, useRef, useEffect } from 'react';
import { GitCommitHorizontal } from 'lucide-react';

const DIGITS = {
  '0': ["1111", "1001", "1001", "1001", "1111"],
  '1': ["0110", "1110", "0110", "0110", "1111"],
  '2': ["1111", "0001", "1111", "1000", "1111"],
  '3': ["1111", "0001", "0111", "0001", "1111"],
  '4': ["1001", "1001", "1111", "0001", "0001"],
  '5': ["1111", "1000", "1111", "0001", "1111"],
  '6': ["1111", "1000", "1111", "1001", "1111"],
  '7': ["1111", "0001", "0010", "0100", "0100"],
  '8': ["1111", "1001", "1111", "1001", "1111"],
  '9': ["1111", "1001", "1111", "0001", "1111"]
};

export function GitHubContribution() {
  const [selectedYear, setSelectedYear] = useState('2026');
  const containerRef = useRef(null);

  // Auto-center the contribution grid on mobile viewports so the year is instantly visible
  useEffect(() => {
    if (containerRef.current) {
      const el = containerRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        el.scrollLeft = maxScroll / 2;
      }
    }
  }, [selectedYear]);

  // Generate 52 weeks x 7 days simulated contribution blocks with dynamic year text
  const days = useMemo(() => {
    const grid = [];
    const yearStr = selectedYear;
    const textPattern = ["", "", "", "", ""];
    
    // Build the 5-row pattern string for the year
    for (let i = 0; i < yearStr.length; i++) {
      const digit = yearStr[i];
      const charPattern = DIGITS[digit] || DIGITS['0'];
      for (let r = 0; r < 5; r++) {
        textPattern[r] += charPattern[r];
        if (i < yearStr.length - 1) textPattern[r] += "0"; // 1 column spacing
      }
    }
    
    const patternWidth = textPattern[0].length;
    const startCol = Math.floor((52 - patternWidth) / 2);
    
    // Generate 52 weeks x 7 days
    for (let i = 0; i < 52 * 7; i++) {
      const col = Math.floor(i / 7);
      const row = i % 7;
      let level = 0;
      
      if (col >= startCol && col < startCol + patternWidth && row >= 1 && row <= 5) {
        const patternCol = col - startCol;
        const patternRow = row - 1;
        if (textPattern[patternRow][patternCol] === '1') {
          // Highlight text with level 3 or 4
          level = Math.random() > 0.5 ? 4 : 3;
        } else {
          // Background within text bounds
          level = Math.random() > 0.85 ? 1 : 0;
        }
      } else {
        // General background noise
        level = Math.random() > 0.85 ? Math.floor(Math.random() * 2) + 1 : 0;
      }
      grid.push(level);
    }
    
    return grid;
  }, [selectedYear]);

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-emerald-200/50 border-emerald-300/40 dark:bg-emerald-950/50 dark:border-emerald-900/40';
      case 2:
        return 'bg-emerald-400/80 border-emerald-500/60 dark:bg-emerald-800/60 dark:border-emerald-700/50';
      case 3:
        return 'bg-emerald-500 border-emerald-600 dark:bg-emerald-500 dark:border-emerald-400';
      case 4:
        return 'bg-emerald-600 border-emerald-700 dark:bg-emerald-400 dark:border-emerald-300 shadow-xs ring-1 ring-emerald-400/30';
      default:
        return 'bg-muted/40 border-border/20';
    }
  };

  const getContributionsCount = (year) => {
    if (year === '2026') return '5,555';
    if (year === '2025') return '1,105';
    return '948';
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <GitCommitHorizontal className="size-4 text-emerald-500 shrink-0" />
          <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-muted-foreground truncate">
            {getContributionsCount(selectedYear)} Contributions in {selectedYear}
          </h2>
        </div>

        <div className="flex items-center gap-1">
          {['2026', '2025', '2024'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                selectedYear === year
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div 
        ref={containerRef}
        className="rounded-xl border border-border/60 bg-card p-3 sm:p-4 overflow-x-auto no-scrollbar touch-pan-x"
      >
        <div className="w-max">
          <div className="grid grid-rows-7 grid-flow-col gap-1">
            {days.map((level, idx) => (
              <div
                key={idx}
                title={`Contribution level ${level}`}
                className={`size-2.5 rounded-[2px] border transition-transform hover:scale-125 ${getLevelColor(
                  level
                )}`}
              />
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground font-mono">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Oct</span>
            <span>Dec</span>
          </div>
        </div>
      </div>
    </div>
  );
}
