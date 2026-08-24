import type { ReactNode } from 'react'

export function SpecTable({
  rows,
}: {
  rows: { label: string; value: ReactNode }[]
}) {
  return (
    <div className="not-prose my-7 overflow-x-auto rounded-xl border border-sand dark:border-white/12">
      <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.label}
              className="border-b border-sand last:border-b-0 dark:border-white/10"
            >
              <th className="w-[38%] bg-sand/50 px-3 py-2.5 font-medium text-ink dark:bg-white/[0.04] dark:text-papyrus">
                {row.label}
              </th>
              <td className="px-3 py-2.5 text-ink/90 dark:text-papyrus/90">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
