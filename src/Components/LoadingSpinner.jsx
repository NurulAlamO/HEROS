export default function LoadingSpinner({ label = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <span className="loading loading-spinner loading-lg text-primary" />
      <p className="text-sm font-medium text-base-content/70">{label}</p>
    </div>
  );
}
