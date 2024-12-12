import React from "react";

export function ColorPresenter({ token }) {
  console.log(token);
  return (
    <div className="overflow-hidden rounded-2xl border border-black/40 shadow-lg">
      <div
        className="border-b border-black/10"
        style={{
          height: 120,
          backgroundColor: `var(${token.name})`,
        }}
      />

      <div className="flex flex-col gap-2 p-5 text-center">
        <div className="!text-[20px] font-bold">{token.name}</div>
        <div className="!text-[14px]">{token.value}</div>
      </div>
    </div>
  );
}
