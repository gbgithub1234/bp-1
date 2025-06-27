// components/ProcedureBox.tsx
import { Procedure } from '@/utils/generateLayout'

export default function ProcedureBox({ proc }: { proc: Procedure }) {
  return (
    <div
      className="absolute border-2 border-black text-sm px-2 py-1 font-semibold text-black"
      style={{
        top: proc.y,
        left: proc.x,
        backgroundColor: proc.color,
      }}
    >
      {proc.name}
      <div className="text-xs text-black text-right mt-1">{proc.comments}</div>
    </div>
  )
}
