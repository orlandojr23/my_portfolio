export function TechStack() {
  const stack = [
    {
      category: 'Frontend',
      items: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['PHP', 'MySQL', 'Shopify']
    },
    {
      category: 'AI & Tools',
      items: ['Google Antigravity', 'Generative AI', 'VS Code', 'Git', 'GitHub', 'Vercel']
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h2 className="font-bold text-xl sm:text-2xl tracking-tight text-foreground">
          Tools I Build With
        </h2>
      </div>

      <div className="space-y-5 sm:space-y-6">
        {stack.map((group) => (
          <div key={group.category} className="space-y-1.5">
            <h3 className="font-mono text-[11px] sm:text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {group.category}
            </h3>
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
              {group.items.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
