"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

type Question = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export default function Quiz({
  test,
}: {
  test: { title: string; questions: Question[] };
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const total = test.questions.length;
  const attempted = Object.keys(answers).length;
  const correct = test.questions.reduce(
    (n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0
  );
  const wrong = attempted - correct;
  const unanswered = total - attempted;

  return (
    <div className="space-y-5">
      <div className="card grid grid-cols-3 gap-3 p-4 text-center">
        <div><p className="text-2xl font-bold">{total}</p><p className="text-xs text-gray-400">Total</p></div>
        <div><p className="text-2xl font-bold">{attempted}</p><p className="text-xs text-gray-400">Attempted</p></div>
        <div><p className="text-2xl font-bold">{unanswered}</p><p className="text-xs text-gray-400">Remaining</p></div>
      </div>

      {test.questions.map((q, i) => {
        const isCorrect = answers[i] === q.answer;
        return (
          <section key={q.question} className="card p-5">
            <p className="text-xs text-violet-200">QUESTION {i + 1} OF {total}</p>
            <h2 className="mt-3 font-semibold leading-7">{q.question}</h2>
            <div className="mt-4 grid gap-2">
              {q.options.map((option, j) => {
                const selected = answers[i] === j;
                const right = submitted && q.answer === j;
                const wrongSelected = submitted && selected && !isCorrect;
                return (
                  <label key={option} className={`flex items-center gap-3 rounded-xl border p-3 text-sm ${
                    right ? "border-green-400 bg-green-400/10" :
                    wrongSelected ? "border-red-400 bg-red-400/10" :
                    selected ? "border-violet-300 bg-violet-300/10" : "border-white/10"
                  } ${submitted ? "cursor-default" : "cursor-pointer"}`}>
                    <input type="radio" name={`q${i}`} disabled={submitted}
                      checked={selected}
                      onChange={() => setAnswers(a => ({ ...a, [i]: j }))} />
                    <span className="flex-1">{option}</span>
                    {right && <CheckCircle2 size={18} className="text-green-400" />}
                    {wrongSelected && <XCircle size={18} className="text-red-400" />}
                  </label>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-4 rounded-xl bg-white/[0.04] p-4 text-sm leading-6">
                <p className={answers[i] === q.answer ? "text-green-300" : answers[i] === undefined ? "text-amber-300" : "text-red-300"}>
                  {answers[i] === undefined ? "Not answered" : answers[i] === q.answer ? "Correct answer!" : "Incorrect answer"}
                </p>
                <p className="mt-1">Correct answer: <strong>{q.options[q.answer]}</strong></p>
                {answers[i] !== undefined && <p>Your answer: {q.options[answers[i]]}</p>}
                <p className="mt-2 text-gray-300">{q.explanation}</p>
              </div>
            )}
          </section>
        );
      })}

      {!submitted ? (
        <button onClick={() => setSubmitted(true)}
          className="rounded-xl bg-violet-300 px-5 py-3 font-semibold text-black">
          Submit test ({attempted}/{total} answered)
        </button>
      ) : (
        <section className="card space-y-5 p-6">
          <div>
            <p className="text-sm text-gray-400">FINAL RESULT</p>
            <p className="mt-2 text-4xl font-bold">{correct}/{total}</p>
            <p className="mt-2 text-lg">{total ? Math.round(correct / total * 100) : 0}% correct</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-3"><p className="text-2xl font-bold">{correct}</p><p className="text-xs text-green-300">Correct</p></div>
            <div className="rounded-xl bg-white/5 p-3"><p className="text-2xl font-bold">{wrong}</p><p className="text-xs text-red-300">Incorrect</p></div>
            <div className="rounded-xl bg-white/5 p-3"><p className="text-2xl font-bold">{unanswered}</p><p className="text-xs text-amber-300">Unanswered</p></div>
            <div className="rounded-xl bg-white/5 p-3"><p className="text-2xl font-bold">{attempted}</p><p className="text-xs text-violet-200">Attempted</p></div>
          </div>
          <button onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3">
            <RotateCcw size={16} /> Try again
          </button>
        </section>
      )}
    </div>
  );
}
