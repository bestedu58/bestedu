'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Something went wrong: {error.message}</p>
      <button type="button" onClick={() => reset()}>Try Again</button>
    </div>
  );
}
