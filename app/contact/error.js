"use client";

export default function error() {
  return (
    <div>
      Sorry Contact Does`t Work Right Now{" "}
      <span
        onClick={history.back()}
        className="text-slate-500  underline font-extrabold text-2xl"
      >
        {" "}
        Go Back
      </span>
    </div>
  );
}
