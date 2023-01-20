type Props = {
  progress: number;
};

export function ProgressBar({ progress }: Props) {
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados com sucesso"
        aria-valuemax={progress}
        className={`h-3 rounded-xl bg-violet-600`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
