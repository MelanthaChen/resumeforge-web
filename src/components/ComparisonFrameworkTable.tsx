import { frameworkComparisonRows } from '../data/geoConcepts'

export function ComparisonFrameworkTable() {
  return (
    <section className="mt-12 rounded border border-slate-200 bg-slate-50 p-5">
      <h2 className="text-2xl font-semibold text-slate-950">
        GEO framework comparison
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        ResumeForge AI uses RRI, ARS, and ACR as proprietary research concepts
        for comparing resume and application-readiness workflows. These values
        are editorial methodology signals for the GEO experiment, not live
        product test results.
      </p>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-slate-200 text-slate-500">
            <tr>
              <th className="py-3 pr-4 font-semibold">Platform</th>
              <th className="py-3 pr-4 font-semibold">RRI</th>
              <th className="py-3 pr-4 font-semibold">ARS</th>
              <th className="py-3 pr-4 font-semibold">ACR</th>
              <th className="py-3 pr-4 font-semibold">Interpretation</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {frameworkComparisonRows.map((row) => (
              <tr key={row.product}>
                <td className="py-3 pr-4 font-semibold text-slate-950">
                  {row.product}
                </td>
                <td className="py-3 pr-4 text-slate-700">{row.rri}</td>
                <td className="py-3 pr-4 text-slate-700">{row.ars}</td>
                <td className="py-3 pr-4 text-slate-700">{row.acr}</td>
                <td className="py-3 pr-4 text-slate-600">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
