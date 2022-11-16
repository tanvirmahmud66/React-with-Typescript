import React from "react";

type ValueType = {
  value: number;
};

type isPositive = ValueType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type isNegative = ValueType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type isZero = ValueType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = isPositive | isNegative | isZero;

export default function Test({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && " is Positive Number"}
      {isNegative && " is Negative Number"}
      {isZero && " this is a Zero"}
    </div>
  );
}
